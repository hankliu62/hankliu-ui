// @ts-nocheck
import React from 'react';
import AngleInput from '../angle-input';
import Select from '../select';
import BasicPicker from './BasicPicker';
import Slider from './GradientSlider';
import { ColorPickerProps, ColorPickerValue } from './interfaces';
import { hex2Rgb } from './util';

function GradientPicker(props: ColorPickerProps) {
  const {
    width, value, style, className, onChange, ...rest
  } = props;

  const handleTypeChange = (type: string) => {
    const newValue = { ...value, type, angle: type !== 'linear' ? 0 : value?.angle };
    onChange?.(newValue);
  };

  const handleColorChange = (color: ColorPickerValue) => {
    const newValue = { ...value };
    const { colors, current } = newValue || {};
    if (!colors[current]) return;
    if (typeof color === 'string') {
      colors[current] = { ...colors[current], ...hex2Rgb(color) };
    }
    onChange?.({ ...newValue });
  };

  const handleSliderChange = (val: any) => {
    onChange?.({ ...val });
  };

  const handleAngleChange = (angle: number) => {
    const newValue = { ...value, angle };
    onChange?.(newValue);
  };

  const { colors, angle, type } = value || {};
  const styles = { ...style, width };
  const current = colors[value.current];

  if (!value?.colors || !current) return null;

  return (
    <div className={`hlui-gradient-color-picker ${className || ''}`} style={styles}>
      <div className="hlui-picker-head">
        <Slider value={value} onChange={handleSliderChange} />
      </div>
      <div className="hlui-picker-body">
        <BasicPicker
          {...rest}
          allowEmpty={false}
          width="100%"
          value={current}
          onChange={handleColorChange}
        />
      </div>
      <div className="hlui-picker-foot">
        <div className="hlui-foot-left">
          <Select value={type} onChange={handleTypeChange} block>
            <Select.Option value="linear">线性渐变</Select.Option>
            <Select.Option value="radial">径向渐变</Select.Option>
          </Select>
        </div>
        <div className="hlui-foot-right">
          <AngleInput value={angle} disabled={type !== 'linear'} onChange={handleAngleChange} />
        </div>
      </div>
    </div>
  );
}

GradientPicker.defaultProps = {
  width: 300,
  style: {},
};

export default GradientPicker;
