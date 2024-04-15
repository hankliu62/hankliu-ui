// @ts-nocheck
import * as React from 'react';
import type {
  InputProps, TextAreaProps, GroupProps, InputRef,
} from 'antd4x/lib/input';
import Input from 'antd4x/lib/input';
import appendDefaultProps from '../_util/appendDefaultProps';

appendDefaultProps();

export * from 'antd4x/lib/input';
export interface HlInputProps extends Omit<InputProps, 'size'> {
  size?: InputProps['size'] | 'medium' | 'smedium';
}

const HlInput = React.forwardRef<InputRef, HlInputProps>((props, ref) => {
  const { size, className, ...rest } = props;
  let finalSize = size;
  let finalClassName = className;
  if (size === 'medium' || size === 'smedium') {
    finalSize = undefined;
    finalClassName = `hlui-input-${size} ${className || ''}    `;
  }
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Input {...rest} size={finalSize as InputProps['size']} className={finalClassName} ref={ref} />;
});

export interface HlGroupProps extends Omit<GroupProps, 'size'> {
  size?: GroupProps['size'] | 'medium' | 'smedium';
}

function HlGroup(props: HlGroupProps) {
  const { size, className, ...rest } = props;
  let finalSize = size;
  let finalClassName = className;
  if (size === 'medium' || size === 'smedium') {
    finalSize = undefined;
    finalClassName = `hlui-input-group-${size} ${className || ''}    `;
  }
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Input.Group {...rest} size={finalSize as GroupProps['size']} className={finalClassName} />;
}

export interface HlTextAreaProps extends Omit<TextAreaProps, 'size'> {
  size?: InputProps['size'] | 'medium' | 'smedium';
  className?: string;
}

const HlTextArea = React.forwardRef<InputRef, HlTextAreaProps>((props, ref) => {
  const { size, className, ...rest } = props;
  let finalSize = size;
  let finalClassName = className;
  if (size === 'medium' || size === 'smedium') {
    finalSize = undefined;
    finalClassName = `hlui-input-${size} ${className || ''}    `;
  }
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Input.TextArea {...rest} size={finalSize as TextAreaProps['size']} className={finalClassName} ref={ref} />;
});

export default Object.assign(HlInput, {
  Group: HlGroup,
  Search: Input.Search,
  TextArea: HlTextArea,
  Password: Input.Password,
});
