import * as React from 'react';
import DatePicker from 'antd4x/lib/date-picker';
import type { CommonPickerMethods } from 'antd4x/lib/date-picker/generatePicker/interface';
import appendDefaultProps from '../_util/appendDefaultProps';

appendDefaultProps();

// @ts-ignore
const { RangePicker } = DatePicker;

type AntdRangePickerProps = React.ComponentProps<typeof RangePicker>;
type AntdDatePickerProps = React.ComponentProps<typeof DatePicker>;

export interface HlDatePickerProps extends Omit<AntdDatePickerProps, 'size'> {
  size?: AntdDatePickerProps['size'] | 'medium' | 'smedium';
}

export interface HlRangePickerProps extends Omit<AntdRangePickerProps, 'size'> {
  size?: AntdRangePickerProps['size'] | 'medium' | 'smedium';
}

const HlRangePicker = React.forwardRef<CommonPickerMethods, HlRangePickerProps>((props, ref) => {
  const { size, className, ...rest } = props;
  let finalSize = size;
  let finalClassName = className;
  if (size === 'medium' || size === 'smedium') {
    finalSize = undefined;
    finalClassName = `hlui-range-${size} ${className || ''}`;
  }
  // eslint-disable-next-line react/jsx-props-no-spreading
  return (
    <RangePicker
      {...rest}
      size={finalSize as AntdDatePickerProps['size']}
      className={finalClassName}
      // @ts-ignore
      ref={ref}
    />
  );
});

const HlDatePicker = React.forwardRef<CommonPickerMethods, HlDatePickerProps>((props, ref) => {
  const { size, className, ...rest } = props;
  let finalSize = size;
  let finalClassName = className;
  if (size === 'medium' || size === 'smedium') {
    finalSize = undefined;
    finalClassName = `hlui-datepicker-${size} ${className || ''}`;
  }
  // eslint-disable-next-line react/jsx-props-no-spreading
  return (
    <DatePicker
      {...rest}
      showTime
      size={finalSize as AntdDatePickerProps['size']}
      className={finalClassName}
      // @ts-ignore
      ref={ref}
    />
  );
});

export * from 'antd4x/lib/date-picker';

const HlDatePickerAssign = Object.assign(HlDatePicker, {
  RangePicker: HlRangePicker,
});
export default HlDatePickerAssign;
