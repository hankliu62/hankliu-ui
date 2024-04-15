import React from 'react';
import type { PopoverProps as LibPopoverProps } from 'antd4x/lib/popover';
import LibPopover from 'antd4x/lib/popover';
import cs from 'classnames';
import appendDefaultProps from '../_util/appendDefaultProps';

appendDefaultProps();

export * from 'antd4x/lib/popover';

export interface HlPopoverProps extends LibPopoverProps {
  className?: string;
  style?: React.CSSProperties;
  layout?: string;
  size?: string;
  disabled?: boolean;
  ghosted?: boolean;
}

export default class HlPopover extends React.Component<HlPopoverProps, {}> {
  render() {
    const { disabled, ghosted, layout, className, overlayClassName, style, children, ...rest } =
      this.props;
    if (disabled) return children;
    let { title, size } = this.props;
    if (title) size = size || 'large';
    const cls = cs(className, overlayClassName, {
      [`layout-${layout}`]: layout,
      [`size-${size}`]: size,
      ghosted,
    });
    if (layout === 'filled') title = null;
    return (
      <LibPopover title={title} overlayClassName={cls} overlayStyle={style} {...rest}>
        {children}
      </LibPopover>
    );
  }
}
