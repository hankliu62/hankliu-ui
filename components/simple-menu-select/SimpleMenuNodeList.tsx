import React, {
  useMemo,
  ReactNode,
  useRef,
  createRef,
  forwardRef,
  RefObject,
  ForwardRefRenderFunction,
  useImperativeHandle,
} from 'react';
import difference from 'lodash/difference';
import union from 'lodash/union';
import SimpleMenuNode, { SimpleMenuNodeHandles } from './SimpleMenuNode';
import {
  getTreeNode,
  walkTree,
  SimpleTreeSelectInnerOption,
  CheckTreeNode,
  SimpleTreeOptionValue,
  getTreeTitle,
} from '../_util/simpleTree';

export interface SimpleMenuNodeListHandles {
  scrollToNode(index: number): void;
}

interface SimpleMenuNodeListProps {
  options: SimpleTreeSelectInnerOption[];
  groupList: SimpleTreeSelectInnerOption[][];
  group: SimpleTreeSelectInnerOption[];
  checkTree: CheckTreeNode[];
  groupIndex: number;
  onChange(val: SimpleTreeOptionValue[], title: ReactNode[]): void;
  onNodeMouseEnter(item: SimpleTreeSelectInnerOption): void;
  showChildSelectedCount: boolean;
  value: SimpleTreeOptionValue[];
}
const SimpleMenuNodeList: ForwardRefRenderFunction<
  SimpleMenuNodeListHandles,
  SimpleMenuNodeListProps
> = (
  {
    options,
    groupList,
    group,
    checkTree,
    groupIndex,
    onChange,
    onNodeMouseEnter,
    value,
    showChildSelectedCount,
  }: SimpleMenuNodeListProps,
  ref,
) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const nodeRefs = useMemo(() => {
    const refs: RefObject<SimpleMenuNodeHandles>[] = [];
    group.forEach(() => {
      refs.push(createRef<SimpleMenuNodeHandles>());
    });
    return refs;
  }, [group]);

  function scrollToNode(index: number) {
    if (index >= 0) {
      const element = nodeRefs[index].current?.element;
      containerRef?.current?.scrollTo(0, element?.offsetTop || 0);
    }
  }

  useImperativeHandle(
    ref,
    () => ({
      scrollToNode,
    }),
    [scrollToNode],
  );

  return (
    <div className="hlui-simple-menu-select-group-node-list" ref={containerRef}>
      {group.map((item, itemIndex) => {
        const checked = Boolean(getTreeNode(checkTree, item.position)?.checked);

        const nextLevel = groupList[groupIndex + 1];
        const active = Boolean(nextLevel && nextLevel.length && item.children === nextLevel);
        const hasChildren = Boolean(item.children && item.children.length);

        function handleClick() {
          const treeValues = [item.value];
          if (item.children && item.children.length) {
            walkTree(item.children, (node) => {
              treeValues.push(node.value);
            });
          }
          if (checked) {
            const val = difference(value, treeValues);
            const title = getTreeTitle(options, val);
            onChange(val, title);
          } else {
            const val = union(value, treeValues);
            const title = getTreeTitle(options, val);
            onChange(val, title);
          }
        }
        function handleMouseEnter() {
          onNodeMouseEnter(item);
        }

        let childSelectedCount = 0;
        if (showChildSelectedCount && item.children && item.children.length) {
          walkTree(item.children, (node) => {
            if (getTreeNode(checkTree, node.position)?.checked) {
              childSelectedCount += 1;
            }
          });
        }

        return (
          <SimpleMenuNode
            ref={nodeRefs[itemIndex]}
            key={item.value}
            active={active}
            childSelectedCount={childSelectedCount}
            checkable={item.checkable}
            disabled={item.disabled}
            title={item.title}
            checked={checked}
            hasChildren={hasChildren}
            onClick={handleClick}
            onMouseEnter={handleMouseEnter}
          />
        );
      })}
    </div>
  );
};

export default forwardRef(SimpleMenuNodeList);
