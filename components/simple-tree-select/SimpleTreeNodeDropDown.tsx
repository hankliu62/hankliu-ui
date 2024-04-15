import React, { CSSProperties, useMemo, useState } from 'react';
import cl from 'classnames';
import SimpleTreeNodeList from './SimpleTreeNodeList';
import {
  stopPropagation,
  generateCheckTree,
  SimpleTreeSelectInnerOption,
  SimpleTreeOptionValue,
  walkTree,
} from '../_util/simpleTree';

interface CheckboxTreeSelectDropDownProps {
  options: SimpleTreeSelectInnerOption[];
  onChange(value: SimpleTreeOptionValue[]): void;
  value: SimpleTreeOptionValue[];
  defaultUnfoldAll?: boolean;
  style?: CSSProperties;
  className?: string;
}

function HorizontalCheckboxTreeSelectDropDown({
  options,
  onChange,
  value,
  defaultUnfoldAll,
  className,
  style,
}: CheckboxTreeSelectDropDownProps) {
  const checkTree = useMemo(() => generateCheckTree(options, value), [options, value]);

  const [foldValue, setFoldValue] = useState<SimpleTreeOptionValue[]>(() => {
    const currentValue: SimpleTreeOptionValue[] = [];
    if (!defaultUnfoldAll) {
      walkTree(options, (item) => {
        currentValue.push(item.value);
      });
    }
    return currentValue;
  });
  const foldTree = useMemo(() => generateCheckTree(options, foldValue), [options, foldValue]);

  return (
    <div
      className={cl('hlui-simple-tree-select-dropdown', className)}
      style={style}
      onMouseDown={stopPropagation}
    >
      <div className="hlui-simple-tree-select-group">
        <SimpleTreeNodeList
          options={options}
          checkTree={checkTree}
          onChange={onChange}
          value={value}
          defaultUnfoldAll={defaultUnfoldAll}
          foldTree={foldTree}
          foldValue={foldValue}
          onFoldValueChange={setFoldValue}
        />
      </div>
    </div>
  );
}
export default HorizontalCheckboxTreeSelectDropDown;
