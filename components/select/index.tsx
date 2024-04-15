import * as React from 'react';
import AntdSelect from 'antd4x/lib/select';
import type {
  SelectProps as AntdSelectProps,
  RefSelectProps as AntdRefSelectProps,
} from 'antd4x/lib/select';
import appendDefaultProps from '../_util/appendDefaultProps';

export type { RefSelectProps } from 'antd4x/lib/select';

appendDefaultProps();

export * from 'antd4x/lib/select';

export interface SelectProps extends Omit<AntdSelectProps, 'size'> {
  size?: AntdSelectProps['size'] | 'medium' | 'smedium';
}

const Select = React.forwardRef<AntdRefSelectProps, SelectProps>((props, ref) => {
  const { size, className, ...rest } = props;
  let finalSize = size;
  let finalClassName = className;
  if (size === 'medium' || size === 'smedium') {
    finalSize = undefined;
    finalClassName = `hlui-select-${size} ${className || ''}`;
  }
  // eslint-disable-next-line react/jsx-props-no-spreading
  return (
    <AntdSelect
      {...rest}
      size={finalSize as AntdSelectProps['size']}
      className={finalClassName}
      ref={ref}
    />
  );
});

// @ts-ignore
export default Object.assign(Select, {
  SECRET_COMBOBOX_MODE_DO_NOT_USE: AntdSelect.SECRET_COMBOBOX_MODE_DO_NOT_USE,
  Option: AntdSelect.Option,
  OptGroup: AntdSelect.OptGroup,
});
