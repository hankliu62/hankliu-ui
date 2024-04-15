import * as React from 'react';
import { useEffect, useMemo, useRef } from 'react';
import cl from 'classnames';
import type { TreeSelectProps } from 'antd4x/lib/tree-select';
import type { RefSelectProps } from 'antd4x/lib/select';
import TreeSelect from 'antd4x/lib/tree-select';
import appendDefaultProps from '../_util/appendDefaultProps';
import generateRandomClass from '../_util/generateRandomClass';

appendDefaultProps();

export * from 'antd4x/lib/select';

export interface HlTreeSelectProps extends TreeSelectProps {
  lockHeight?: boolean;
}

const HlTreeSelect = React.forwardRef<RefSelectProps, HlTreeSelectProps>((props, ref) => {
  const { lockHeight, className, multiple, treeCheckable, ...rest } = props;

  const randomClass = useMemo(() => generateRandomClass(), []);
  const observerRef = useRef<MutationObserver>();

  useEffect(() => {
    if (!multiple && !treeCheckable) {
      return undefined;
    }
    if (!lockHeight) {
      return undefined;
    }
    const containerDom = document.querySelector(`.${randomClass} .hlui-select-selector`);
    const contentDom = document.querySelector(`.${randomClass} .hlui-select-selection-overflow`);

    function scrollAction() {
      const width = contentDom?.getBoundingClientRect().width;
      if (width) {
        containerDom?.scrollTo(width, 0);
      }
    }
    scrollAction();
    observerRef.current = new MutationObserver(scrollAction);
    if (!containerDom) {
      return undefined;
    }
    observerRef.current.observe(containerDom, {
      childList: true,
      subtree: true,
      characterData: true,
    });
    return () => {
      observerRef.current?.disconnect();
    };
  }, [lockHeight, multiple, treeCheckable]);
  // eslint-disable-next-line react/jsx-props-no-spreading
  return (
    <TreeSelect
      multiple={multiple}
      treeCheckable={treeCheckable}
      {...rest}
      className={cl(
        {
          'hl-tree-select-lock-height': lockHeight,
        },
        randomClass,
        className,
      )}
      ref={ref}
    />
  );
});

const HlTreeSelectAssign: typeof HlTreeSelect & {
  TreeNode: typeof TreeSelect.TreeNode,
  SHOW_ALL: typeof TreeSelect.SHOW_ALL,
  SHOW_PARENT: typeof TreeSelect.SHOW_PARENT,
  SHOW_CHILD: typeof TreeSelect.SHOW_CHILD,
} = Object.assign(HlTreeSelect, {
  TreeNode: TreeSelect.TreeNode,
  SHOW_ALL: TreeSelect.SHOW_ALL,
  SHOW_PARENT: TreeSelect.SHOW_PARENT,
  SHOW_CHILD: TreeSelect.SHOW_CHILD,
});
export default HlTreeSelectAssign;
