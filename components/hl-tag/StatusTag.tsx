import React from 'react';
import cs from 'classnames';

export interface StatusTagProps {
  className?: string;
  status?: string;
  ghost?: string | boolean;
  size?: string;
  style?: any;
  children?: React.ReactNode;
}

export default class StatusTag extends React.Component<StatusTagProps> {
  static defaultProps = {
    status: 'success',
    size: 'small',
  };

  render() {
    const {
      className, status, ghost, size, style, children,
    } = this.props;
    const classNames = cs(className, {
      'hlui-hl-status-tag': true,
      [`ghost-${ghost}`]: ghost,
      [`status-${status}`]: status,
      [`size-${size}`]: size,
    });

    return (
      <div className={classNames} style={style}>
        {children}
      </div>
    );
  }
}
