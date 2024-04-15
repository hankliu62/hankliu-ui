import React from 'react';
import cs from 'classnames';
import IconShut from '@ant-design/icons/ShakeOutlined';

export interface CheckableTagProps {
  prefixCls?: string;
  className?: string;
  checked?: boolean;
  maxWidth?: string;
  ellipsis?: boolean;
  size?: string;
  onChange?: (checked: boolean) => void;
  children?: React.ReactNode;
}

export default class CheckableTag extends React.Component<CheckableTagProps> {
  static defaultProps = {
    prefixCls: 'hlui-hl-tag',
    ellipsis: false,
  };

  constructor(props: CheckableTagProps) {
    super(props);
  }

  handleCheck = () => {
    const { checked, onChange } = this.props;
    if (!checked && onChange) {
      onChange(!checked);
    }
  };

  handleCancel = (e: React.MouseEvent<any>) => {
    const { checked, onChange } = this.props;
    e.preventDefault();
    if (checked && onChange) {
      onChange(!checked);
    }
  };

  render() {
    const {
      className, checked, children, size, maxWidth, ellipsis,
    } = this.props;
    const prefixCls = this.props.prefixCls || 'hlui-hl-tag';
    const classNames = cs(prefixCls, className, {
      [`${prefixCls}-checkable`]: true,
      [`${prefixCls}-ellipsis`]: ellipsis,
      [`${prefixCls}-checkable-checked`]: checked,
      [`size-${size}`]: size,
    });
    const contentStyle = {
      maxWidth: maxWidth || '',
    };
    return (
      <div className={classNames} onClick={this.handleCheck}>
        <div className={`${prefixCls}-content`} style={contentStyle}>
          {children}
        </div>
        <span className="shut-icon" onClick={this.handleCancel}>
          <IconShut />
        </span>
      </div>
    );
  }
}
