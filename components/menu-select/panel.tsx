// @ts-nocheck
import React, { useState, useContext } from 'react';
import { ConfigContext } from 'antd4x/lib/config-provider';
import Menus from './menu';
import Empty from '../empty';
import cs from 'classnames';
import remove from 'lodash/remove';
import { EShowCheckedStrategy, MenuSelectProps, Option } from './interfaces';
import { traverseTreeNode, convertTree2Map } from '../_util/tree';

const DefaultMenuColumnStyle = {
  maxWidth: 240,
};

const FieldNames = { label: 'label', value: 'value', children: 'children' };

export default function MenuPanelSelect({
  menuColumnStyle = DefaultMenuColumnStyle,
  fieldNames = FieldNames,
  options = [],
  value = [],
  onChange = () => {},
  onSelect = () => {},
  expandTrigger = 'hover',
  checkable = true,
  defaultActiveValue = [],
  showCheckedStrategy = EShowCheckedStrategy.SHOW_ALL,
  className,
  children,
  style = {},
  type,
  ...restProps
}: MenuSelectProps) {
  const context = useContext(ConfigContext);
  const prefixCls = context?.getPrefixCls();

  const [activeValue, setActiveValue] = useState<string[] | number[]>([]);

  function handleSelect(option: Option, menuIndex: number) {
    let tempActiveValue: any[] = [...activeValue];
    if (activeValue.length === 0) {
      tempActiveValue = [...defaultActiveValue];
    }
    tempActiveValue[menuIndex] = option.value;
    setActiveValue(tempActiveValue);
  }

  function handleChange(value: any) {
    if (showCheckedStrategy === EShowCheckedStrategy.SHOW_ALL) {
      onChange && onChange(value);
      return;
    }
    const map = convertTree2Map(options, { mapKey: 'value', parentMapKey: 'parentValue' });
    let results: any[] = [];
    if (showCheckedStrategy === EShowCheckedStrategy.SHOW_PARENT) {
      let _values: any = [];
      value.forEach((v: any) => {
        let item = map[v];
        if (!item) return;
        item.checked = true;
        _values.push(item);
      });
      // 删掉父级被选中的元素
      remove(_values, (_v: any) => {
        let item = map[_v.parentValue];
        return item && item.checked;
      });
      _values.forEach((_v: any) => results.push(_v.value));
    } else if (showCheckedStrategy === EShowCheckedStrategy.SHOW_CHILD) {
      value.forEach((v: any) => {
        let item = map[v];
        if (!item) return;
        if (item.children) return;
        results.push(v);
      });
    }
    onChange && onChange(results);
  }

  function getMenuValue() {
    if (
      showCheckedStrategy === EShowCheckedStrategy.SHOW_ALL ||
      showCheckedStrategy === EShowCheckedStrategy.SHOW_CHILD
    )
      return value;
    const map = convertTree2Map(options, { mapKey: 'value', parentMapKey: 'parentValue' });
    let results: Set<any> = new Set();
    value.forEach((v: any) => {
      let item = map[v];
      if (!item) return;
      traverseTreeNode(item, ({ value }: any) => results.add(value));
    });
    return Array.from(results);
  }

  /**
   * 根据搜索Text过滤对应的options
   */
  function getFilterTreeData() {
    const { allowSearch, searchValue } = restProps;
    const labelKey = fieldNames.label || 'label';
    const childrenKey = fieldNames.children || 'children';

    // 不存在搜索Text或者不允许搜索时直接返回所有的options
    if (!searchValue || !allowSearch) {
      return options;
    }

    const upperStr = searchValue.toUpperCase();

    // 判断当前节点的Label中是否存在搜索Text
    const filterOptionFunc = (_: any, dataNode: any) => {
      const value = dataNode[labelKey];
      return String(value).toUpperCase().includes(upperStr);
    };

    // DFS根据搜索字符过滤节点
    function dig(list: any[] | null, keepAll: boolean = false): any[] | null {
      if (!list) {
        return list;
      }

      return list
        .map((dataNode) => {
          const children = dataNode[childrenKey];

          // label中包含该搜索字符
          const hasMatchedSearch = filterOptionFunc(searchValue, { ...dataNode });
          // 如果父元素匹配到搜索字符，其子元素都应该保留
          const match = keepAll || hasMatchedSearch;
          const childList = dig(children, match);

          if (match || (childList && childList.length)) {
            return {
              ...dataNode,
              [childrenKey]: childList,
              className: hasMatchedSearch ? 'menu-item-filtered' : '',
            };
          }
          return null;
        })
        .filter(Boolean); // 过滤没有匹配到的节点
    }

    return dig(options!);
  }

  const cls = cs(`${prefixCls}-menu`, `${prefixCls}-menu-select-menu`, className);
  const curOptions = getFilterTreeData();

  if (curOptions && curOptions.length) {
    return (
      <div className={cls}>
        <Menus
          {...restProps}
          expandTrigger={expandTrigger}
          checkable={checkable}
          options={options}
          filteredOptions={curOptions}
          onCheck={handleChange}
          checkedValue={getMenuValue()}
          onSelect={handleSelect as any}
          onClick={onSelect as any}
          activeValue={activeValue.length > 0 ? activeValue : defaultActiveValue}
          menuColumnStyle={menuColumnStyle}
          defaultFieldNames={FieldNames}
          fieldNames={fieldNames}
          prefixCls={`${prefixCls}-cascader-menus`}
        />
      </div>
    );
  }

  // 暂无数据
  return (
    <Empty
      size="default"
      image={Empty.IMAGES.NO_COLLECTION}
      className={`${prefixCls}-cascader-menus-empty`}
    />
  );
}
