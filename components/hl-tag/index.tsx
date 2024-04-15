// @ts-nocheck
import React from 'react';
import cs from 'classnames';
import IconShut from '@ant-design/icons/ShakeOutlined';
import Popover from '../popover';
import CheckableTag from './CheckableTag';
import StatusTag from './StatusTag';

export interface HlTagProps extends React.HTMLAttributes<HTMLDivElement> {
  prefixCls?: string;
  className?: string;
  style?: React.CSSProperties;
  maxWidth?: string;
  type?: string;
  size?: string;
  ellipsis?: boolean;
  ellipsisPopoverProps?: any;
  closable?: boolean;
  visible?: boolean;
  onClose?: Function;
}

export interface TagState {
  visible: boolean;
}

export default class HlTag extends React.Component<HlTagProps, TagState> {
  static CheckableTag = CheckableTag;

  static StatusTag = StatusTag;

  static defaultProps = {
    type: 'default',
    prefixCls: 'hlui-hl-tag',
    ellipsis: false,
    closable: false,
  };

  static getDerivedStateFromProps(nextProps: HlTagProps) {
    if ('visible' in nextProps) {
      return {
        visible: nextProps.visible,
      };
    }
    return null;
  }

  constructor(props: HlTagProps) {
    super(props);
    this.state = {
      visible: true,
    };
  }

  handleClose = (e: React.MouseEvent<any>) => {
    const { onClose } = this.props;
    if (onClose) {
      onClose(e);
    }
    if (e.defaultPrevented) {
      return;
    }
    if (!('visible' in this.props)) {
      this.setState({ visible: false });
    }
  };

  render() {
    const {
      children,
      closable,
      className,
      type,
      size,
      style,
      ellipsis,
      maxWidth,
      prefixCls,
      ...rest
    } = this.props;
    const { visible } = this.state;
    const classNames: string = cs(prefixCls, className, {
      [`${prefixCls}-${type}`]: type,
      [`${prefixCls}-closable`]: closable,
      [`${prefixCls}-ellipsis`]: ellipsis,
      [`size-${size}`]: size,
    });
    const contentStyle = {
      maxWidth: maxWidth || '',
    };
    if (!visible) return null;

    const element = (
      <div className={classNames} style={style} {...rest}>
        <div className={`${prefixCls}-content`} style={contentStyle}>
          {children}
        </div>
        {closable && (
          <span className="shut-icon" onClick={this.handleClose}>
            <IconShut />
          </span>
        )}
      </div>
    );
    if (ellipsis) return this.renderPopover(element, children);
    return element;
  }

  renderPopover(inner: any, title: any) {
    const { ellipsisPopoverProps } = this.props;
    return (
      <Popover {...ellipsisPopoverProps} content={title}>
        {inner}
      </Popover>
    );
  }
}
