import React, {
  CSSProperties, ReactNode, useEffect, useMemo, useRef, useState,
} from 'react';
import cl from 'classnames';
import intersection from 'lodash/intersection';
import union from 'lodash/union';
import difference from 'lodash/difference';
import SimpleMenuNode from './SimpleMenuNode';
import SimpleMenuNodeList, { SimpleMenuNodeListHandles } from './SimpleMenuNodeList';

import {
  stopPropagation,
  walkTree,
  generateCheckTree,
  getTreeTitle,
  SimpleTreeSelectInnerOption,
  SimpleTreeOptionValue,
} from '../_util/simpleTree';

export type HandleAlphabetClickFunc = (val: string) => number;

const alphabetList = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z',
];

interface CheckboxTreeSelectDropDownProps {
  options: SimpleTreeSelectInnerOption[];
  originalOptions: SimpleTreeSelectInnerOption[];
  onChange(value: SimpleTreeOptionValue[], title: ReactNode[]): void;
  onAlphabetClick?: HandleAlphabetClickFunc;
  value: SimpleTreeOptionValue[];
  style?: CSSProperties;
  className?: string;
  showChildSelectedCount: boolean;
}
function SimpleMenuSelectDropDown({
  originalOptions,
  options,
  onChange,
  value,
  style,
  className,
  onAlphabetClick,
  showChildSelectedCount,
}: CheckboxTreeSelectDropDownProps) {
  const ref = useRef<HTMLDivElement>(null);
  const checkTree = useMemo(() => generateCheckTree(options, value), [options, value]);
  const [groupList, setGroupList] = useState<SimpleTreeSelectInnerOption[][]>([options]);
  useEffect(() => {
    setGroupList([options]);
  }, [options]);
  const checkboxTreeNodeListRef = useRef<SimpleMenuNodeListHandles>(null);

  return (
    <div
      style={style}
      className={cl('hlui-simple-menu-select-dropdown', className)}
      onMouseDown={stopPropagation}
    >
      {onAlphabetClick ? (
        <div className="hlui-simple-menu-select-alphabet-filter-wrap">
          <div className="hlui-simple-menu-select-alphabet-filter">
            {alphabetList.map((val) => (
              <span
                key={val}
                className="hlui-simple-menu-select-alphabet-item"
                onClick={() => {
                  const index = onAlphabetClick(val);
                  checkboxTreeNodeListRef?.current?.scrollToNode(index);
                }}
              >
                {val}
              </span>
            ))}
          </div>
        </div>
      ) : null}

      {groupList.map((group, groupIndex) => {
        let onlyParentChecked = false;
        let parent: SimpleTreeSelectInnerOption | undefined;
        if (groupIndex !== 0) {
          parent = groupList[groupIndex - 1].find((item) => item.children === groupList[groupIndex]);
        }

        const treeValues: SimpleTreeOptionValue[] = [];
        if (parent && parent.children && parent.children.length) {
          walkTree(parent.children, (node) => {
            treeValues.push(node.value);
          });
          onlyParentChecked = value.indexOf(parent.value) > -1 && intersection(value, treeValues).length === 0;
        }

        return (
          <div
            className="hlui-simple-menu-select-group"
            key={groupIndex}
            ref={groupIndex === 0 ? ref : undefined}
          >
            {parent && parent.checkable ? (
              <div className="hlui-simple-menu-select-only-parent-box">
                <SimpleMenuNode
                  checkable
                  disabled={parent.disabled}
                  active={false}
                  title={(
                    <span>
                      只选父级
                      {parent.title}
                    </span>
)}
                  checked={onlyParentChecked}
                  onClick={() => {
                    if (!parent) {
                      return;
                    }
                    if (onlyParentChecked) {
                      const val = union([parent.value], treeValues, value);
                      const title = getTreeTitle(originalOptions, val);
                      onChange(val, title);
                    } else {
                      const val = union([parent.value], difference(value, treeValues));
                      const title = getTreeTitle(originalOptions, val);
                      onChange(val, title);
                    }
                  }}
                />
              </div>
            ) : null}

            <SimpleMenuNodeList
              options={originalOptions}
              showChildSelectedCount={showChildSelectedCount}
              ref={groupIndex === 0 ? checkboxTreeNodeListRef : undefined}
              groupList={groupList}
              group={group}
              groupIndex={groupIndex}
              checkTree={checkTree}
              onChange={onChange}
              value={value}
              onNodeMouseEnter={(item) => {
                setGroupList((prevState) => {
                  const newState = prevState.slice(0, groupIndex + 1);
                  if (item.children && item.children.length) {
                    newState.push(item.children);
                  }
                  return newState;
                });
              }}
            />
          </div>
        );
      })}
    </div>
  );
}
export default SimpleMenuSelectDropDown;
