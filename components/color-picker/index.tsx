import React from 'react';
import Panel from './Panel';
import Popover from './Popover'
import { rgb2hex } from './util';
import { ColorPickerProps } from './interfaces';

function ColorPicker(props: ColorPickerProps) {
  return <Panel {...props} />;
}

ColorPicker.Popover = Popover
ColorPicker.rgb2hex = rgb2hex

export default ColorPicker;
