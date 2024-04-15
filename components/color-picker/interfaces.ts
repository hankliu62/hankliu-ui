import { SketchPickerProps } from 'react-color';

export interface RgbColorValue {
  r: number;
  g: number;
  b: number;
  a?: number;
}

export interface GradientColorStop {
  r: number;
  g: number;
  b: number;
  a?: number;
  stop: number;
}

export interface GradientColorValue {
  angle?: number;
  type: string;
  current: number;
  colors: GradientColorStop[];
}

export type ColorPickerValue = string | RgbColorValue | GradientColorValue;

export interface ColorPickerProps {
  className?: string;
  style?: SketchPickerProps['styles'];
  type?: 'gradient' | 'basic';
  width?: number | string;
  value?: any;
  onChange: (value: ColorPickerValue) => void;
  colors?: string[];
  historyColors?: string[];
  alpha?: boolean;
  allowEmpty?: boolean;
}
