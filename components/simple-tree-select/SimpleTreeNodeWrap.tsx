import React from 'react';
import intersection from 'lodash/intersection';
import difference from 'lodash/difference';
import union from 'lodash/union';
import SimpleTreeNode from './SimpleTreeNode';
import {
  getTreeNode,
  walkTree,
  SimpleTreeSelectInnerOption,
  CheckTreeNode,
  SimpleTreeOptionValue,
} from '../_util/simpleTree';

const INDENT_LENGTH = 24;

interface SimpleTreeNodeWrapProps {
  item: SimpleTreeSelectInnerOption;
  checkTree: CheckTreeNode[];
  foldTree: CheckTreeNode[];
  value: SimpleTreeOptionValue[];
  foldValue: SimpleTreeOptionValue[];
  defaultUnfoldAll?: boolean;
  onChange(val: SimpleTreeOptionValue[]): void;
  onFoldValueChange(val: SimpleTreeOptionValue[]): void;
}

function SimpleTreeNodeWrap({
  item,
  checkTree,
  foldTree,
  value,
  foldValue,
  onChange,
  onFoldValueChange,
  defaultUnfoldAll,
}: SimpleTreeNodeWrapProps) {
  const checked = Boolean(getTreeNode(checkTree, item.position)?.checked);
  const isFold = Boolean(getTreeNode(foldTree, item.position)?.checked);

  let onlyParentChecked = false;

  const treeValues: any[] = [];
  if (item?.children?.length) {
    walkTree(item.children, (node) => {
      treeValues.push(node.value);
    });
    onlyParentChecked = value.indexOf(item.value) > -1 && intersection(value, treeValues).length === 0;
  }

  const hasChildren = Boolean(item.children && item.children.length);
  let indent;
  if (item.position.length === 1) {
    indent = hasChildren ? 0 : INDENT_LENGTH;
  } else {
    indent = hasChildren ? INDENT_LENGTH : INDENT_LENGTH * 2;
  }

  function handleOnlyParentClick() {
    if (onlyParentChecked) {
      onChange(union([item.value], treeValues, value));
    } else {
      onChange(union([item.value], difference(value, treeValues)));
    }
  }

  function handleClick() {
    const currentTreeValues = [item.value];
    if (item.children && item.children.length) {
      walkTree(item.children, (node) => {
        currentTreeValues.push(node.value);
      });
    }
    if (checked) {
      onChange(difference(value, currentTreeValues));
    } else {
      onChange(union(value, currentTreeValues));
      // 选中某节点后自动展开全部子级
      onFoldValueChange(difference(foldValue, currentTreeValues));
    }
  }

  function handleFoldClick() {
    if (isFold) {
      const index = foldValue.indexOf(item.value);
      foldValue.splice(index, 1);
      onFoldValueChange([...foldValue]);
    } else {
      onFoldValueChange([...foldValue, item.value]);
    }
  }
  return (
    <div
      className="hlui-simple-tree-select-node-wrap"
      style={{
        paddingLeft: indent,
      }}
    >
      <SimpleTreeNode
        disabled={item.disabled}
        title={item.title}
        fold={isFold}
        checked={checked}
        hasChildren={hasChildren}
        onlyParentChecked={onlyParentChecked}
        onFoldClick={handleFoldClick}
        onClick={handleClick}
        onOnlyParentClick={handleOnlyParentClick}
      />
      {!isFold && hasChildren
        ? item.children?.map((option, index) => (
          <SimpleTreeNodeWrap
            key={index}
            defaultUnfoldAll={defaultUnfoldAll}
            item={option}
            checkTree={checkTree}
            foldTree={foldTree}
            value={value}
            foldValue={foldValue}
            onFoldValueChange={onFoldValueChange}
            onChange={onChange}
          />
        ))
        : null}
    </div>
  );
}

export default SimpleTreeNodeWrap;
