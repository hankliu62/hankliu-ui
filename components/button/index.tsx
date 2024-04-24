import * as React from 'react';
import Button from 'antd4x/lib/button';
import type { ButtonProps } from 'antd4x/lib/button';
import appendDefaultProps from '../_util/appendDefaultProps';

appendDefaultProps();

export * from 'antd4x/lib/button';
export type HlButtonType = Omit<ButtonProps['type'], 'default'> | 'secondary';
export type HlButtonSize = ButtonProps['size'] | 'medium' | 'smedium';
export interface HlButtonProps extends Omit<ButtonProps, 'size' | 'type'> {
  size?: HlButtonSize;
  type?: HlButtonType;
}
function HlButton(props: HlButtonProps) {
  const { size, className, type = 'primary', ...rest } = props;
  let finalSize = size;
  let finalClassName = className;
  if (size === 'medium' || size === 'smedium') {
    finalSize = undefined;
    finalClassName = `hlui-btn-${size} ${className || ''}`;
  }

  let finalType: ButtonProps['type'];
  if (type === 'secondary') {
    finalType = undefined;
  } else {
    finalType = type as ButtonProps['type'];
  }
  // eslint-disable-next-line react/jsx-props-no-spreading
  return (
    <Button
      {...rest}
      type={finalType}
      size={finalSize as ButtonProps['size']}
      className={finalClassName}
    />
  );
}
// Fix disabled HlButton doesn't work with HlTooltip
// https://github.com/ant-design/ant-design/blob/7e707661939e0843c9ac7f36be490ad359340123/components/button/button.tsx#L318
// https://github.com/ant-design/ant-design/blob/7e707661939e0843c9ac7f36be490ad359340123/components/tooltip/index.tsx#L128
// HlButton.__ANT_BUTTON = true;
const HlButtonAssign: typeof HlButton & typeof Button = Object.assign(HlButton, Button);
export default HlButtonAssign;
