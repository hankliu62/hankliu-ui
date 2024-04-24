import type { CSSProperties, ReactNode } from 'react';
import React, { useCallback, useMemo, useState } from 'react';
import cl from 'classnames';
import debounce from 'lodash/debounce';
import HlSelect from '../hl-select';
import type { HlSelectProps } from '../hl-select';
import type { HandleAlphabetClickFunc } from './SimpleMenuSelectDropDown';
import SimpleMenuSelectDropDown from './SimpleMenuSelectDropDown';

import type { SimpleTreeSelectOption, SimpleTreeOptionValue } from '../_util/simpleTree';
import { setTreeNodePosition, walkTree, getTreeTitle } from '../_util/simpleTree';

interface SimpleTreeSelectOptionForSearch extends SimpleTreeSelectOption {
  needDelete?: boolean;
  children?: SimpleTreeSelectOptionForSearch[];
}

const EMPTY_ARRAY: SimpleTreeSelectOptionForSearch[] = [];

function generateSearchHighlightTreeData(
  data: SimpleTreeSelectOption[],
  keywords: string,
): SimpleTreeSelectOptionForSearch[] {
  if (!data || !keywords) {
    return [];
  }
  return data.map((item) => {
    const { title, children } = item;
    let finalTitle: React.ReactNode;
    let index;
    if (title && typeof title === 'string') {
      index = title.toLowerCase().indexOf(keywords.toLowerCase());
      const beforeStr = title.substr(0, index);
      const afterStr = title.substr(index + keywords.length);
      const actualKeywords = title.substr(index, keywords.length);
      finalTitle =
        index > -1 ? (
          <span>
            {beforeStr}
            <span className="hlui-simple-menu-search-matched">{actualKeywords}</span>
            {afterStr}
          </span>
        ) : (
          <span>{title}</span>
        );
    }

    const isNotMatched = index === -1;
    const finalChildren =
      children && isNotMatched
        ? generateSearchHighlightTreeData(children, keywords).filter(
            (itemSub) => !itemSub.needDelete,
          )
        : children;
    const needDelete =
      isNotMatched && (finalChildren ? finalChildren.length === 0 : !finalChildren);
    return {
      ...item,
      needDelete,
      title: finalTitle || title,
      children: finalChildren,
    };
  });
}

export interface SimpleMenuSelectProps
  extends Omit<
    HlSelectProps,
    | 'options'
    | 'value'
    | 'onChange'
    | 'mode'
    | 'allowClear'
    | 'dropdownRender'
    | 'defaultActiveFirstOption'
    | 'onBlur'
    | 'searchValue'
    | 'onSearch'
    | 'fieldNames'
  > {
  options: SimpleTreeSelectOption[];
  value: SimpleTreeOptionValue[];
  onChange(val: SimpleTreeOptionValue[], title: ReactNode[]): void;
  dropdownContentStyle?: CSSProperties;
  dropdownClassName?: string;
  dropdownContentClassName?: string;
  onAlphabetClick?: HandleAlphabetClickFunc;
  showChildSelectedCount?: boolean;
}

function SimpleMenuSelect({
  options,
  value,
  onChange,
  className,
  dropdownContentStyle,
  dropdownContentClassName,
  dropdownClassName,
  popupClassName,
  onAlphabetClick,
  showChildSelectedCount = false,
  ...restProps
}: SimpleMenuSelectProps) {
  const [searchVal, setSearchVal] = useState('');
  const selectOptions = useMemo(() => {
    const list: any[] = [];
    walkTree(options, (item) => {
      list.push({
        value: item.value,
        title: item.title || item.label,
      });
    });
    return list;
  }, [options]);

  const searchDropdownOptions = searchVal
    ? generateSearchHighlightTreeData(options, searchVal).filter((item) => !item.needDelete)
    : EMPTY_ARRAY;

  const normalDropdownOptions = useMemo(() => setTreeNodePosition(options), [options]);
  const normalSearchDropdownOptions = useMemo(
    () => setTreeNodePosition(searchDropdownOptions),
    [searchDropdownOptions],
  );
  const dropdownRender = () => (
    <SimpleMenuSelectDropDown
      key={searchVal}
      showChildSelectedCount={showChildSelectedCount}
      onAlphabetClick={onAlphabetClick}
      style={dropdownContentStyle}
      className={dropdownContentClassName}
      originalOptions={normalDropdownOptions}
      options={searchVal ? normalSearchDropdownOptions : normalDropdownOptions}
      value={value}
      onChange={(val, title) => {
        onChange(val, title);
        setSearchVal('');
      }}
    />
  );

  const handleSearch = useCallback(debounce(setSearchVal, 50), []);
  const finalPopupClassName = popupClassName || dropdownClassName;
  return (
    <HlSelect
      popupClassName={cl('hlui-simple-menu-select-dropdown-content', finalPopupClassName)}
      className={cl('hlui-simple-menu-select', className)}
      mode="multiple"
      allowClear
      defaultActiveFirstOption={false}
      value={value}
      onChange={(val: any) => {
        // 仅在select删除项目时触发onChange,解决搜索关键词与某一项完全匹配时自动填入
        if (val.length < value.length) {
          const title = getTreeTitle(normalDropdownOptions, val);
          onChange(val, title);
        }
      }}
      onBlur={() => {
        setSearchVal('');
      }}
      searchValue={searchVal}
      options={selectOptions}
      dropdownRender={dropdownRender}
      onSearch={handleSearch}
      fieldNames={{
        label: 'title',
      }}
      {...restProps}
    />
  );
}

export default SimpleMenuSelect;
