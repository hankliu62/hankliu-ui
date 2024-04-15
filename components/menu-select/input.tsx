import React, { useRef, useState, useContext } from 'react';
import pick from 'lodash/pick';
import difference from 'lodash/difference';
import debounce from 'lodash/debounce'
import { ConfigContext } from 'antd4x/lib/config-provider';
import { deleteAncestorTreeNodes, deleteTreeNodes, getOptions, convertTree2Map } from '../_util/tree';
import Select from '../select';
import Panel from './panel';
import { EShowCheckedStrategy, MenuInputSelectProps } from './interfaces';

const SELECT_PROP_NAMES = [
  'value',
  'disabled',
  'lockHeight',
  'size',
  'className',
  'style',
  'width',
  'height',
  'block',
  'placeholder',
  'addonBefore',
  'addonBeforeClick',
  'addonAfter',
  'addonAfterClick',
  'allowClear',
  'dropdownClassName',
  'dropdownMatchSelectWidth',
  'dropdownStyle',
  'getPopupContainer',
  'showArrow',
  'suffixIcon',
  'removeIcon',
  'clearIcon',
  'onDropdownVisibleChange',
  'max',
  'maxMessage',
  'maxTagTextLength',
  'maxTagTextLengthMessage',
  'maxTagCount',
  'maxTagPlaceholder',
  'onSearch',
];

const MENU_PROP_NAMES = [
  'disabled',
  'value',
  'onChange',
  'defaultActiveValue',
  'onSelect',
  'options',
  'fieldNames',
  'menuColumnStyle',
  'showCheckedStrategy',
  'allowSearch',
];

export default function MenuInputSelect(props: MenuInputSelectProps) {
  const showCheckedStrategy = props.showCheckedStrategy || EShowCheckedStrategy.SHOW_CHILD;
  // 下拉菜单和选择器是否同宽
  const dropdownMatchSelectWidth = 'dropdownMatchSelectWidth' in props ? props.dropdownMatchSelectWidth : false;

  // 选择器组件中搜索文本框值改变的回调
  const onSearchDebounce = props.onSearch && debounce(props.onSearch, 500);

  const [searchValue, setSearchValue] = useState<string>()

  const context = useContext(ConfigContext);
  const prefixCls = context?.getPrefixCls();

  // 选择器对象
  const selectRef = useRef<any>()

  function handleSelectChange(val: any) {
    const { onChange, options } = props;
    let value = props.value || [];
    if (!val || val.length === 0) {
      // 清空数据
      onChange([]);
    } else {
      // 取消选择数据
      value = value.slice();
      const arr = difference(value as any, val);
      const map = convertTree2Map(options, { mapKey: 'value', parentMapKey: 'parentValue' });
      arr.forEach((ar: any) => {
        const item = map[ar];
        if (!item) return;
        // 当 node 节点被取消选择后，该节点和所有后代节点需要取消选择
        deleteTreeNodes(item, value);
        // 当 node 节点被取消选择后，该节点的所有祖先节点需要取消选择
        deleteAncestorTreeNodes(map, item, value);
      });
      onChange(value);
    }
  };


  // 选择器组件中搜索文本框值改变的回调
  function handleSearchValueChange(val: string) {
    setSearchValue(val);
    onSearchDebounce && onSearchDebounce(val);
  }

  // 选择器组件中展开下拉菜单的回调
  function handleDropdownVisibleChange(open: boolean) {
    const { allowSearch, onDropdownVisibleChange } = props;
    if (allowSearch) {
      // 隐藏Dropdown时，清空搜索字符
      !open && handleSearchValueChange('');
    }

    onDropdownVisibleChange && onDropdownVisibleChange(open);
  }

  // 点击复选框触发，修改选中的选项
  function handleSelectOptionsChange(value: string[] | number[]) {
    const { allowSearch, onChange } = props;
    if (allowSearch) {
      // 如果选中某个节点时，清空搜索值
      handleSearchValueChange('');
    }

    onChange && onChange(value);
  }

  function getSelectOptions() {
    const { value = [], options = [], fieldNames = { label: '' } } = props;
    const labelKey = fieldNames.label || 'label';
    return getOptions(options, value, labelKey);
  }

  // 禁止事件冒泡
  function stopPropagation(e: any) {
    e.stopPropagation();
    e.preventDefault();
  }

  const renderOverlay = () => {
    const selectProps: any = pick({
      ...props,
      showCheckedStrategy,
      dropdownMatchSelectWidth,
    }, MENU_PROP_NAMES);

    return (
      <div onMouseDown={stopPropagation} className={`${prefixCls}-menu-dropdown`}>
        <Panel {...selectProps} searchValue={searchValue} onChange={handleSelectOptionsChange} />
      </div>
    );
  };

  const { allowSearch, onDropdownVisibleChange, ...restProps } = props;
  const selectProps: any = pick({
    ...restProps,
    showCheckedStrategy,
    dropdownMatchSelectWidth,
  }, SELECT_PROP_NAMES);
  if (!allowSearch) {
    if (selectProps.className) {
      selectProps.className += ` ${prefixCls}-menu-select-input`;
    } else {
      selectProps.className = `${prefixCls}-menu-select-input`;
    }
  } else {
    selectProps.searchValue = searchValue;
  }
  const innerStyle: any = {};
  if (selectProps.width) {
    innerStyle.width = selectProps.width;
  }
  if (typeof selectProps.height === 'string') {
    if (selectProps.height[0] === '>') {
      innerStyle.minHeight = parseInt(selectProps.height.substring(1), 10);
    } else if (selectProps.height[0] === '<') {
      innerStyle.maxHeight = parseInt(selectProps.height.substring(1), 10);
    } else {
      innerStyle.height = selectProps.height as string;
    }
  } else if (typeof selectProps.height === 'number') {
    innerStyle.height = selectProps.height;
  }

  // 是否允许搜索
  selectProps.showSearch = !!allowSearch;

  return (
    <Select
      ref={selectRef}
      mode="multiple"
      onChange={handleSelectChange}
      options={getSelectOptions()}
      filterOption={false}
      dropdownRender={renderOverlay}
      {...selectProps}
      onSearch={handleSearchValueChange}
      onDropdownVisibleChange={handleDropdownVisibleChange}
      style={innerStyle}
    />
  );
}
