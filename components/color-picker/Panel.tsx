import React from 'react';
import GradientPicker from './GradientPicker';
import BasicPicker from './BasicPicker';
import { ColorPickerProps } from './interfaces';

function Panel(props: ColorPickerProps) {
  const { type, ...rest } = props;
  if (typeof type === 'string' && type === 'gradient') {
    return <GradientPicker {...rest} />;
  }
  return <BasicPicker {...rest} />;
}

export default Panel;
