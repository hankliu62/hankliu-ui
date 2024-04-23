import React, { useCallback } from 'react';
import type { FixedSizeListProps, VariableSizeListProps } from 'react-window';
import { FixedSizeList, VariableSizeList } from 'react-window';

export interface VirtualListProps<T> extends Omit<FixedSizeListProps<T>, 'children'> {
  /**
   * @deprecated 将于下个版本被弃用, itemSize会覆盖此属性
   */
  gap?: number;
  /**
   * @deprecated 将于下个版本被弃用， itemSize会覆盖此属性
   */
  itemHeight?: number;
  /**
   * @deprecated 将于下个版本被弃用， itemData会覆盖此属性
   */
  items?: T[];
  /**
   * @deprecated 将于下个版本被弃用， children会覆盖此属性
   */
  renderItem?: (item: T, index: number, isScrolling?: boolean) => React.ReactNode;
  children?: FixedSizeListProps<T>['children'];
}

export default function VirtualList<T>({
  items,
  itemHeight = 0,
  gap = 5,
  itemCount,
  width = '100%',
  renderItem,
  children,
  ...rest
}: VirtualListProps<T>) {
  const renderFn = useCallback(
    ({
      index,
      style: itemStyle,
      isScrolling,
    }: {
      index: number;
      style: any;
      isScrolling: boolean;
    }) => {
      if (!items || !renderItem) {
        return null;
      }
      return <div style={itemStyle}> {renderItem(items[index], index, isScrolling)}</div>;
    },
    [renderItem],
  );

  return (
    <FixedSizeList<T>
      itemCount={itemCount || items?.length || 0}
      // @ts-ignore
      itemSize={itemHeight + gap}
      width={width}
      {...rest}
    >
      {/* @ts-ignore */}
      {children || renderFn}
    </FixedSizeList>
  );
}
