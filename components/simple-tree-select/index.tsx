import type { CSSProperties } from 'react';
import React, { useMemo } from 'react';
import cl from 'classnames';
import HlSelect from '../hl-select';
import type { HlSelectProps } from '../hl-select';
import SimpleTreeNodeDropDown from './SimpleTreeNodeDropDown';
import type { SimpleTreeSelectOption } from '../_util/simpleTree';
import { setTreeNodePosition, walkTree } from '../_util/simpleTree';

export interface SimpleTreeSelectProps
  extends Omit<
    HlSelectProps,
    'options' | 'value' | 'onChange' | 'mode' | 'dropdownRender' | 'dropdownRender' | 'fieldNames'
  > {
  options: SimpleTreeSelectOption[];
  value: string[];
  onChange(val: string[]): void;
  defaultUnfoldAll?: boolean;
  dropdownStyle?: CSSProperties;
  dropdownClassName?: string;
}

function SimpleTreeSelect({
  options = [],
  value,
  onChange,
  defaultUnfoldAll = false,
  className,
  dropdownStyle,
  dropdownClassName,
  ...restProps
}: SimpleTreeSelectProps) {
  const selectOptions = useMemo(() => {
    const list: any[] = [];
    walkTree(options, (item) => {
      list.push({
        value: item.value,
        title: item.label || item.title,
      });
    });
    return list;
  }, [options]);

  const dropdownOptions = useMemo(() => setTreeNodePosition(options), [options]);

  const dropdownRender = () => (
    <SimpleTreeNodeDropDown
      style={dropdownStyle}
      className={dropdownClassName}
      defaultUnfoldAll={defaultUnfoldAll}
      options={dropdownOptions}
      value={value}
      onChange={onChange}
    />
  );
  return (
    <HlSelect
      className={cl('hlui-simple-tree-select', className)}
      allowClear
      mode="multiple"
      value={value}
      onChange={onChange}
      options={selectOptions}
      dropdownRender={dropdownRender}
      fieldNames={{
        label: 'title',
      }}
      {...restProps}
    />
  );
}

export default SimpleTreeSelect;
