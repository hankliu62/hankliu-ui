import { GradientColorStop, GradientColorValue, RgbColorValue } from './interfaces';

export function getRgbStr(rgb: RgbColorValue) {
  const { r, g, b, a = 1 } = rgb;
  return `rgba(${r},${g},${b},${a})`;
}

function getHexStr(hv: number) {
  const str = hv.toString(16);
  if (str.length === 2) return str;
  return `0${str}`;
}

export function rgb2hex(rgb: RgbColorValue) {
  return `#${getHexStr(rgb.r)}${getHexStr(rgb.g)}${getHexStr(rgb.b)}`;
}

export function hex2Rgb(hex: string) {
  const color = {
    a: 1,
    r: parseInt(`0x${hex.substring(1, 3)}`),
    g: parseInt(`0x${hex.substring(3, 5)}`),
    b: parseInt(`0x${hex.substring(5)}`),
  };
  return color;
}

export function formatGradientColor(value: GradientColorValue) {
  const { angle, colors } = value;
  let cls = '';
  colors.forEach((item: GradientColorStop) => {
    cls += `,${getRgbStr(item)} ${(item.stop * 100).toFixed(2)}%`;
  });
  return `linear-gradient(${angle}deg${cls})`;
}

export function parseRgbStr(str: string) {
  str = str.replace(/\s/g, '');
  if (str[0] === '#') return hex2Rgb(str);
  let idx = str.indexOf('rgba(');
  if (idx > -1) {
    str = str.substring(5, str.length - 1);
    let vs = str.split(',');
    return {
      r: parseInt(vs[0]),
      g: parseInt(vs[1]),
      b: parseInt(vs[2]),
      a: parseInt(vs[3]),
    };
  }
  idx = str.indexOf('rgb(');
  if (idx > -1) {
    str = str.substring(4, str.length - 1);
    let vs = str.split(',');
    return {
      r: parseInt(vs[0]),
      g: parseInt(vs[1]),
      b: parseInt(vs[2]),
      a: 1,
    };
  }
}

export function isWhiteColor(color: string) {
  color = color.toLowerCase();
  return color === '#ffffff' || color.replace(/\s/g, '').indexOf('255,255,255') > -1;
}

export const COLORS = [
  '#D0021B',
  '#F5A623',
  '#F8E71C',
  '#8B572A',
  '#7ED321',
  '#417505',
  '#BD10E0',
  '#9013FE',
  '#4A90E2',
  '#50E3C2',
  '#B8E986',
  '#000000',
  '#4A4A4A',
  '#9B9B9B',
  '#FFFFFF',
];
export const HISTORY_COLORS_MAX = 20;
export const EMPTY_COLOR = '';

export function getColorStop(prev: GradientColorStop, next: GradientColorStop, stop: number) {
  const ratio = (stop - prev.stop) / (next.stop - prev.stop);
  let color: GradientColorStop = {
    stop,
    r: Math.round(prev.r + (next.r - prev.r) * ratio),
    g: Math.round(prev.g + (next.g - prev.g) * ratio),
    b: Math.round(prev.b + (next.b - prev.b) * ratio),
  };
  if (prev.a && next.a) {
    color.a = prev.a + (next.a - prev.a) * ratio;
  }
  return color;
}
