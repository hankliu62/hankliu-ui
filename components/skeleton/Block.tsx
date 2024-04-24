import classnames from 'classnames';
import React from 'react';
import type { ReactNode } from 'react';

export interface SkeletonBlockProps {
  width?: number | string;
  height?: number | string;
  round?: number | string;
  style?: any | undefined;
  active?: boolean;
  children?: ReactNode | ReactNode[];
}

const Block = (props: SkeletonBlockProps) => {
  const { width = '100%', height = '100%', round = 2, style = {}, active = true, children } = props;
  if (width) style.width = width;
  if (height) style.height = height;
  style.borderRadius = round;
  return (
    <div
      style={style}
      className={classnames('hlui-skeleton-button hlui-skeleton-block', { active })}
    >
      {children}
    </div>
  );
};

export default Block;
