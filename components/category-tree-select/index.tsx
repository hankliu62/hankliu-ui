import type { CSSProperties } from 'react';
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import cl from 'classnames';
import Tree from 'antd4x/lib/tree/Tree';
import xor from 'lodash/xor';
import union from 'lodash/union';
import uniq from 'lodash/uniq';
import debounce from 'lodash/debounce';
import HlSelect from '../hl-select';
import type { HlSelectProps } from '../hl-select';
import stopPropagation from '../_util/stopPropagation';
import { walkTree } from '../_util/simpleTree';

interface TreeNode {
  title: React.ReactNode;
  value: string;
  children?: TreeNode[];
}

interface TreeNodeProcess {
  title: React.ReactNode;
  value: string;
  key: string;
  children?: TreeNodeProcess[];
}

interface SearchTreeNodeProcess extends TreeNodeProcess {
  needDelete?: boolean;
  children?: SearchTreeNodeProcess[];
}

// 生成高亮搜索关键词后的数据源
function generateSearchHighlightTreeData(
  data: SearchTreeNodeProcess[],
  keywords: string,
): SearchTreeNodeProcess[] {
  if (!data) {
    return [];
  }
  return data.map((item) => {
    const { title, value: v, key: k, children } = item;
    let finalTitle: React.ReactNode;
    let index;
    if (typeof title === 'string') {
      index = title.indexOf(keywords);
      const beforeStr = title.substring(0, index);
      const afterStr = title.substring(index + keywords.length);
      finalTitle =
        index > -1 ? (
          <span>
            {beforeStr}
            <span className="hlui-tree-search-match">{keywords}</span>
            {afterStr}
          </span>
        ) : (
          <span>{title}</span>
        );
    }

    const isNotMatched = index === -1;
    const finalChildren = children
      ? generateSearchHighlightTreeData(children, keywords).filter((itemSub) => !itemSub.needDelete)
      : undefined;
    return {
      needDelete: isNotMatched && (!finalChildren || finalChildren.length === 0),
      title: finalTitle || title,
      value: v,
      key: k,
      children: finalChildren,
    };
  });
}

function getTreeData(data?: TreeNode[]): TreeNodeProcess[] | undefined {
  if (data && data.length) {
    return data.map((item) => {
      const { title, value, children } = item;
      return {
        title,
        value,
        key: value,
        children: getTreeData(children),
      };
    });
  }
  return undefined;
}

function getNodeByValue(value: string, treeData?: TreeNode[]): TreeNode | undefined {
  let findItem: TreeNode;
  function traverse(val: string, data?: TreeNode[]) {
    if (!data || !data.length) {
      return;
    }
    for (let i = 0; i < data.length; i++) {
      const item = data[i];
      if (item.value === val) {
        findItem = item;
        return;
      }
      if (item.children) {
        traverse(val, item.children);
      }
    }
  }
  traverse(value, treeData);
  return findItem!;
}

function getNodeChainByValue(value: string, treeData?: TreeNode[]) {
  const chain: TreeNode[] = [];
  if (!treeData) {
    return chain;
  }
  function traverse(val: string, chainList: TreeNode[], data: TreeNode[]): boolean {
    for (let i = 0; i < data.length; i++) {
      const item = data[i];
      chainList.push(item);
      if (item.value === val) {
        return true;
      }
      if (item.children && item.children.length) {
        const isFind = traverse(val, chainList, item.children);
        if (!isFind) {
          chainList.pop();
        } else {
          return true;
        }
      } else {
        chainList.pop();
      }
    }
    return false;
  }
  traverse(value, chain, treeData);
  return chain;
}

export function getNodeNameList(value: string[], treeData?: TreeNode[]): string[] {
  const nameList: string[] = [];
  if (!treeData || treeData.length > 0) {
    value.forEach((val) => {
      const chain = getNodeChainByValue(val, treeData);
      nameList.push(chain.map((item) => item.title).join('>'));
    });
  }
  return nameList;
}

function getAllChildrenValuesByValue(value: string, treeData?: TreeNode[]): string[] {
  if (!treeData) {
    return [];
  }
  let findItem: TreeNode;
  function traverse(val: string, data: TreeNode[]): void {
    for (let i = 0; i < data.length; i++) {
      const item = data[i];
      if (item.value === val) {
        findItem = item;
        return;
      }
      if (item.children && item.children.length) {
        traverse(val, item.children);
      }
    }
  }
  traverse(value, treeData);

  // @ts-ignore
  if (findItem && findItem.children && findItem.children.length) {
    const values: string[] = [];
    walkTree(findItem.children, (item) => {
      values.push(item.value);
    });
    return values;
  }
  return [];
}

interface CheckedKey {
  checked: string[];
  halfChecked: string[];
}

export interface CategoryTreeSelectProps extends Omit<HlSelectProps, 'options' | 'onChange'> {
  options: TreeNode[];
  value: string[];
  disabled?: boolean;
  needAllChildren?: boolean;
  dropdownMatchSelectWidth?: boolean;
  onChange(value: string[], valueWithChildren?: string[]): void;
  style?: CSSProperties;
  className?: string;
  dropdownStyle?: CSSProperties;
  dropdownClassName?: string;
  placeholder?: string;
  getPopupContainer?: (triggerNode: HTMLElement) => HTMLElement;
  open?: boolean;
  defaultOpen?: boolean;
}

function CategoryTreeSelect({
  options = [],
  value,
  disabled,
  placeholder,
  onChange,
  style,
  className,
  needAllChildren = false,
  dropdownStyle,
  dropdownClassName,
  popupClassName,
  getPopupContainer,
  dropdownMatchSelectWidth,
  ...restProps
}: CategoryTreeSelectProps) {
  const selectOptions = useMemo(() => {
    const list: any[] = [];
    walkTree(options, (item) => {
      const itemChain = getNodeChainByValue(item.value, options);
      list.push({
        value: item.value,
        label: itemChain.map((i) => i.title).join('>'),
      });
    });
    return list;
  }, [options]);

  const treeData = useMemo(() => getTreeData(options), [options]);

  const [checkedKeys, setCheckedKeys] = useState<CheckedKey>({
    checked: [],
    halfChecked: [],
  });
  function valueToChecked(checked: string[]) {
    const finalHalfChecked: string[] = [];
    checked.forEach((val) => {
      const nodeChain = getNodeChainByValue(val, treeData);
      const parentNodeChain = nodeChain.slice(0, -1);
      parentNodeChain.forEach((item) => {
        finalHalfChecked.push(item.value);
      });
    });
    setCheckedKeys({
      checked,
      halfChecked: uniq(finalHalfChecked),
    });
  }

  useEffect(() => {
    valueToChecked(value);
  }, [value]);

  function handleChange(vals: string[]) {
    if (needAllChildren) {
      let childrenValues: string[] = [];
      vals.forEach((val) => {
        childrenValues = union(getAllChildrenValuesByValue(val, treeData), childrenValues);
      });
      const valueWithChildren = union(vals, childrenValues);
      onChange(vals, valueWithChildren);
    } else {
      onChange(vals);
    }
  }

  const [expandedKeys, setExpandedKeys] = useState<string[]>([]);
  const [forSearchExpandedKeys, setForSearchExpandedKeys] = useState<string[]>([]);

  const [searchValue, setSearchValue] = useState('');
  const [searchResultTree, setSearchResultTree] = useState<TreeNodeProcess[]>([]);

  function handleCheck(data: CheckedKey) {
    const { checked } = data as CheckedKey;
    const { checked: lastChecked } = checkedKeys;
    const addKeys = xor(checked, lastChecked);
    const addKey = addKeys[0];
    const node = getNodeByValue(addKey, options);
    let finalChecked: string[] = [];
    const chain = getNodeChainByValue(addKey, treeData);
    const parentChain = chain.slice(0, -1);
    const checkedParentList: string[] = [];
    parentChain.forEach((item) => {
      if (lastChecked.includes(item.value)) {
        checkedParentList.push(item.value);
      }
    });
    if (node?.children) {
      // 如果有子节点，遍历检查子节点是否有选中项
      const checkedChildList = [];
      walkTree(node.children, (item) => {
        if (lastChecked.includes(item.value)) {
          checkedChildList.push(item.value);
        }
      });
      if (checkedChildList.length === 0) {
        // 如果子节点没有选中项，检查父节点是否有选中项
        if (checkedParentList.length) {
          // 如果父节点有选中项，取消父节点的选中
          finalChecked = xor(checked, checkedParentList);
        } else {
          // 如果父节点没有选中项，则正常选中
          finalChecked = checked;
        }
      } else {
        // 如果子节点存在选中项，不做操作
        finalChecked = lastChecked;
      }
      if (checked.length > lastChecked.length) {
        setExpandedKeys(union([addKey], expandedKeys));
      }
    } else {
      // 如果没有子节点，检查父节点是否有选中项
      // eslint-disable-next-line no-lonely-if
      if (checkedParentList.length) {
        // 如果父节点有选中项，取消父节点的选中
        finalChecked = xor(checked, checkedParentList);
      } else {
        // 如果父节点没有选中项，则正常选中
        finalChecked = checked;
      }
    }
    handleChange(finalChecked);
  }

  function handleSelect(selectedKeys: string[]) {
    const key = selectedKeys[0];
    const index = expandedKeys.indexOf(key);
    if (index > -1) {
      expandedKeys.splice(index, 1);
      setExpandedKeys([...expandedKeys]);
    } else {
      setExpandedKeys([...expandedKeys, key]);
    }
  }

  const handleSearch = useCallback(
    debounce((val: string) => {
      if (!treeData) {
        return;
      }
      setSearchValue(val);
      const searchResultTreeData = generateSearchHighlightTreeData(treeData!, val).filter(
        (itemSub) => !itemSub.needDelete,
      );
      const keys: string[] = [];
      walkTree(searchResultTreeData, (item) => {
        if (item.children && item.children?.length > 0) {
          keys.push(item.key);
        }
      });
      setSearchResultTree(searchResultTreeData);
      setForSearchExpandedKeys(keys);
    }, 100),
    [treeData],
  );

  function handleExpand(keys: string[]) {
    if (searchValue) {
      setForSearchExpandedKeys(keys);
    } else {
      setExpandedKeys(keys);
    }
  }

  const dropdownRender = () => (
    <div onMouseDown={stopPropagation}>
      <Tree
        key={searchValue}
        checkable
        checkStrictly
        treeData={searchValue ? searchResultTree : treeData}
        expandedKeys={searchValue ? forSearchExpandedKeys : expandedKeys}
        checkedKeys={checkedKeys}
        // @ts-ignore
        onCheck={handleCheck}
        // @ts-ignore
        onExpand={handleExpand}
        selectedKeys={[]}
        // @ts-ignore
        onSelect={handleSelect}
      />
    </div>
  );
  const finalPopupClassName = popupClassName || dropdownClassName;
  return (
    <HlSelect
      disabled={disabled}
      style={style}
      className={cl('hlui-category-tree-select', className)}
      allowClear
      placeholder={placeholder}
      getPopupContainer={getPopupContainer}
      mode="multiple"
      value={value}
      onChange={handleChange}
      options={selectOptions}
      dropdownRender={dropdownRender}
      dropdownMatchSelectWidth={dropdownMatchSelectWidth}
      dropdownStyle={dropdownStyle}
      popupClassName={cl('hlui-category-tree-select-dropdown', finalPopupClassName)}
      onSearch={handleSearch}
      onBlur={() => {
        setSearchValue('');
      }}
      {...restProps}
    />
  );
}

export default CategoryTreeSelect;
