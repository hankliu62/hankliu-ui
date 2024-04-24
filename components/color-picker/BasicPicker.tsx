// @ts-nocheck
import classnames from 'classnames';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Color, ColorResult, SketchPicker, SketchPickerProps } from 'react-color';
import Select from '../select';
import Tooltip from '../tooltip';
import { ColorPickerProps, ColorPickerValue } from './interfaces';
import { getLocale } from './locale';
import {
  COLORS,
  EMPTY_COLOR,
  getRgbStr,
  HISTORY_COLORS_MAX,
  isWhiteColor,
  parseRgbStr,
  rgb2hex,
} from './util';

enum ColorType {
  default = 'default',
  history = 'history',
}

const resetStyles = {
  picker: {
    border: 'none',
    boxShadow: 'none',
    padding: 0,
  },
};

function BasicPicker(props: ColorPickerProps) {
  const {
    width,
    alpha,
    style,
    value,
    allowEmpty,
    onChange,
    historyColors,
    colors = COLORS,
  } = props;

  const [colorsType, setColorType] = useState(ColorType.default);
  const [historyColor, setHistoryColor] = useState<string[]>([]);
  const prevValue = useRef<ColorPickerValue | undefined>('');

  useEffect(() => {
    if (Array.isArray(historyColors)) {
      setHistoryColor(historyColors);
    }
  }, [historyColors]);

  const saveHistory = (color: string) => {
    // 颜色相同的不记录
    if (historyColor[0] === color) return;

    const curHistoryColor = [...historyColor];
    if (curHistoryColor.length >= HISTORY_COLORS_MAX) {
      curHistoryColor.pop();
    }
    curHistoryColor.unshift(color);
    setHistoryColor(curHistoryColor);
  };

  const handleChangeComplete = (color: ColorResult) => {
    const curColor = alpha ? getRgbStr(color.rgb) : color.hex;
    saveHistory(curColor);
    onChange?.(curColor);
  };

  const isEmptyChecked = () => allowEmpty && value === EMPTY_COLOR;

  const handleColorsTypeChange = (colorType: ColorType) => setColorType(colorType);

  const selectColor = (color: string) => {
    let res: any = parseRgbStr(color);
    if (!alpha) {
      res = rgb2hex(res);
    }
    if (colorsType === ColorType.default) {
      saveHistory(alpha ? rgb2hex(res) : res);
    }
    onChange?.(res);
  };

  const isActiveColor = (color: string) => {
    return alpha ? getRgbStr(value) === color : value === color.toLowerCase();
  };

  const selectEmptyColor = () => {
    if (value !== EMPTY_COLOR) {
      prevValue.current = value;
    }
    onChange?.(EMPTY_COLOR);
  };

  const renderColors = useCallback(() => {
    const locale = getLocale();
    const curColors = colorsType === ColorType.default ? colors : historyColor;
    return (
      <div className="hlui-colors-bar">
        <div className="hlui-bar-control">
          <div className="hlui-control-select">
            <Select size="small" value={colorsType} onChange={handleColorsTypeChange} block>
              <Select.Option value={ColorType.default}>{locale.defaultColor}</Select.Option>
              <Select.Option value={ColorType.history}>{locale.recentlyColor}</Select.Option>
            </Select>
          </div>
        </div>
        <div className="hlui-list-wrap">
          <div className="hlui-color-list">
            {allowEmpty && (
              <Tooltip title="无填充">
                <div
                  key="empty-color"
                  className="hlui-list-item hlui-type-empty"
                  onClick={selectEmptyColor}
                />
              </Tooltip>
            )}
            {curColors.map((color: string, idx: number) => (
              <div
                key={`${color}-${idx}`}
                onClick={() => selectColor(color)}
                className={classnames('hlui-list-item', {
                  active: isActiveColor(color),
                  bordered: isWhiteColor(color),
                })}
                style={{ background: color }}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }, [colorsType, allowEmpty, colors, historyColor]);

  const styles = { ...style, ...resetStyles };

  return (
    <div className={classnames('hlui-basic-color-picker')} style={{ width }}>
      <SketchPicker
        width="100%"
        color={(isEmptyChecked() ? prevValue.current : value) as Color}
        disableAlpha={!alpha}
        styles={styles as SketchPickerProps['styles']}
        onChangeComplete={handleChangeComplete}
      />
      {renderColors()}
    </div>
  );
}

BasicPicker.defaultProps = {
  width: 250,
  style: {},
};

export default BasicPicker;
