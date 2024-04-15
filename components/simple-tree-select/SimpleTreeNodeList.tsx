import React from 'react';
import SimpleTreeNodeWrap from './SimpleTreeNodeWrap';
import {
  SimpleTreeSelectInnerOption,
  CheckTreeNode,
  SimpleTreeOptionValue,
} from '../_util/simpleTree';

interface SimpleTreeNodeListProps {
  options: SimpleTreeSelectInnerOption[];
  checkTree: CheckTreeNode[];
  foldTree: CheckTreeNode[];
  onChange(val: SimpleTreeOptionValue[]): void;
  foldValue: SimpleTreeOptionValue[];
  onFoldValueChange(val: SimpleTreeOptionValue[]): void;
  value: SimpleTreeOptionValue[];
  defaultUnfoldAll?: boolean;
}
function SimpleTreeNodeList({
  options,
  checkTree,
  foldTree,
  onChange,
  value,
  foldValue,
  onFoldValueChange,
  defaultUnfoldAll,
}: SimpleTreeNodeListProps) {
  return (
    <div className="hlui-simple-tree-select-group-node-list">
      {options.map((item, itemIndex) => (
        <SimpleTreeNodeWrap
          value={value}
          key={itemIndex}
          item={item}
          checkTree={checkTree}
          foldTree={foldTree}
          onChange={onChange}
          defaultUnfoldAll={defaultUnfoldAll}
          foldValue={foldValue}
          onFoldValueChange={onFoldValueChange}
        />
      ))}
    </div>
  );
}

export default SimpleTreeNodeList;
