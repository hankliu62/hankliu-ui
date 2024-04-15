import React, { useCallback, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import Table from 'antd4x/lib/table';
import type { TableProps } from 'antd4x/lib/table';
import appendDefaultProps from '../_util/appendDefaultProps';

appendDefaultProps();

function getContentHeight(el: HTMLElement) {
  const contentDiv = document.createElement('div');
  contentDiv.style.cssText = 'height:100%; position:absolute; top:0; bottom:0; width:0;';
  el.appendChild(contentDiv);
  const elPosition = getComputedStyle(el).position;
  const cachePositionValue = el.style.position;
  if (elPosition === 'static') {
    // eslint-disable-next-line no-param-reassign
    el.style.position = 'relative';
  }
  const { height } = contentDiv.getBoundingClientRect();
  el.removeChild(contentDiv);
  // eslint-disable-next-line no-param-reassign
  el.style.position = cachePositionValue;
  return height;
}

export interface HlTableProps<T> extends TableProps<T> {
  onScrollEnd?: () => void;
  bottomOffset?: number;
}

function HlTable<T extends object = any>({
  onScrollEnd,
  bottomOffset = 0,
  ...rest
}: HlTableProps<T>) {
  const lastScrollTopRef = useRef(0);
  const containerHeightRef = useRef(0);
  const contentRectHeightRef = useRef(0);
  // 标记是否触发了滚动
  const triggeredScrollEndRef = useRef(false);
  const handleTableBodyScroll = useCallback(
    (e: Event) => {
      if (!onScrollEnd) {
        return;
      }
      const target = e.target as HTMLDivElement;
      if (!target) {
        return;
      }

      const { scrollTop } = target;

      const lastScrollTop = lastScrollTopRef.current;
      lastScrollTopRef.current = scrollTop;

      // 向上滚动
      if (scrollTop < lastScrollTop) {
        triggeredScrollEndRef.current = false;
        return;
      }
      // 向下滚动
      if (scrollTop > lastScrollTop && triggeredScrollEndRef.current) {
        return;
      }
      // 横向滚动
      if (lastScrollTop === scrollTop) {
        return;
      }
      if (!containerHeightRef.current) {
        containerHeightRef.current = getContentHeight(target);
      }
      if (!contentRectHeightRef.current) {
        const contentEl = target.children[0];
        contentRectHeightRef.current = contentEl.getBoundingClientRect().height;
      }

      // 判断是否为纵向滚动
      if (!triggeredScrollEndRef.current) {
        const containerHeight = containerHeightRef.current;
        const contentRectHeight = contentRectHeightRef.current;
        if (scrollTop + containerHeight + bottomOffset >= contentRectHeight) {
          onScrollEnd();
          triggeredScrollEndRef.current = true;
        }
      }
    },
    [onScrollEnd, bottomOffset],
  );

  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!onScrollEnd) {
      return undefined;
    }
    const node = ReactDOM.findDOMNode(ref.current) as HTMLDivElement;
    const scrollContainer = node.querySelector('.hlui-table-body');
    if (scrollContainer) {
      scrollContainer.addEventListener('scroll', handleTableBodyScroll);
      return () => {
        scrollContainer.removeEventListener('scroll', handleTableBodyScroll);
      };
    }
    return undefined;
  }, [onScrollEnd, handleTableBodyScroll]);

  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Table {...rest} ref={ref} />;
}

export * from 'antd4x/lib/table';
type HlTableType = typeof HlTable & typeof Table;

const HlTableAssign: HlTableType = Object.assign(HlTable, {
  SELECTION_COLUMN: Table.SELECTION_COLUMN,
  EXPAND_COLUMN: Table.EXPAND_COLUMN,
  SELECTION_ALL: Table.SELECTION_ALL,
  SELECTION_INVERT: Table.SELECTION_INVERT,
  SELECTION_NONE: Table.SELECTION_NONE,
  Column: Table.Column,
  ColumnGroup: Table.ColumnGroup,
  Summary: Table.Summary,
});

export default HlTableAssign;
