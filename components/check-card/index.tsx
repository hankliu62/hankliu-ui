import IconDone from '@hankliu/icons/FileDoneOutlined';
import ConfigProvider from 'antd4x/lib/config-provider';
import cs from 'classnames';
import React, { useContext } from 'react';
import appendDefaultProps from '../_util/appendDefaultProps';
appendDefaultProps();

export interface CheckCardProps {
  checked?: boolean;
  disabled?: boolean;
  usable?: boolean;
  onChange?: (checked?: boolean) => void;
  indicate?: 'always' | 'hover' | 'checked' | 'never';
  color?: string;
  size?: 'small' | 'default' | 'large';
  type?: 'circle' | 'round';
  border?: boolean | number;
  className?: string;
  style?: any;
  children?: React.ReactNode;
}

const CheckCard = (props: CheckCardProps) => {
  const context = useContext(ConfigProvider.ConfigContext);
  const antPrefix = context?.getPrefixCls() || 'hlui';
  const {
    className = '',
    checked,
    onChange,
    children,
    color,
    indicate = 'always',
    size = 'default',
    type = 'circle',
    usable = true,
    border,
    style = {},
    disabled,
    ...rest
  } = props;
  const iconStyle: any = {};
  if (color) {
    style.borderColor = color;
    iconStyle.backgroundColor = color;
  }
  let _icon = null;
  if (usable) {
    _icon = (
      <div
        className={cs(`${antPrefix}-check-card-icon`, {
          [`${antPrefix}-checked`]: checked,
          [`${antPrefix}-disabled`]: disabled,
          [`${antPrefix}-size-${size}`]: size,
          [`${antPrefix}-type-${type}`]: type,
        })}
        style={iconStyle}
      >
        <IconDone />
      </div>
    );
  }
  if (typeof border === 'number') style.borderWidth = border;
  return (
    <div
      {...rest}
      className={cs(
        `${antPrefix}-check-card`,
        className
          ?.trim()
          .split(/\s+/)
          .filter(Boolean)
          .map((item: string) => (item.startsWith(`${antPrefix}-`) ? item : `${antPrefix}-${item}`))
          .join(' '),
        {
          [`${antPrefix}-checked`]: checked,
          [`${antPrefix}-disabled`]: disabled,
          [`${antPrefix}-border`]: border,
          [`${antPrefix}-usable`]: usable,
          [`${antPrefix}-indicate-${indicate}`]: indicate,
          [`${antPrefix}-size-${size}`]: size,
          [`${antPrefix}-type-${type}`]: type,
        },
      )}
      style={style}
      onClick={() => usable && !disabled && onChange && onChange(!checked)}
    >
      {children}
      {_icon}
    </div>
  );
};

export default CheckCard;
