import React from 'react';
import { GradientColorStop } from './interfaces';
import { getRgbStr } from './util';

interface IProps {
  color: GradientColorStop;
  active: boolean;
  onSelect: (idx: number, e: any) => void;
  idx: number;
}

function GradientSliderItem(props: IProps) {
  const { color, active, onSelect, idx } = props;

  const handleClick: React.MouseEventHandler<HTMLDivElement> = (e) => {
    onSelect(idx, e);
  };

  const style = {
    left: `${(color.stop * 100).toFixed(2)}%`,
    backgroundColor: getRgbStr(color),
  };
  return (
    <div
      className={`hlui-gradient-color-slider-item ${active ? 'hlui-active' : ''}`}
      style={style}
      onMouseDown={handleClick}
    />
  );
}

export default GradientSliderItem;
