import findIndex from 'lodash/findIndex';
import React, { useEffect, useRef, useState } from 'react';
import Item from './GradientSliderItem';
import { ColorPickerProps, GradientColorStop } from './interfaces';
import { formatGradientColor, getColorStop } from './util';

function GradientSlider(props: ColorPickerProps) {
  const { value, onChange } = props;

  const [, setState] = useState(0);

  const rootRef = useRef<HTMLDivElement | null>(null);
  const focused = useRef(false);

  const handleKeyUp = (e: KeyboardEvent) => {
    const { key } = e;
    const newValue = { ...value };
    const { current, colors } = newValue;
    if (!focused.current) return;
    if (key !== 'Backspace') return;
    if (colors.length === 1) return;
    colors.splice(current, 1);
    if (current >= colors.length) {
      newValue.current -= 1;
    }
    onChange?.(newValue);
  };

  useEffect(() => {
    window.addEventListener('keyup', handleKeyUp, false);
    return () => {
      window.removeEventListener('keyup', handleKeyUp, false);
    };
  }, []);

  const handleMouseEnter = () => {
    focused.current = true;
  };

  const handleMouseLeave = () => {
    focused.current = false;
  };

  const addItem: React.MouseEventHandler<HTMLDivElement> = (e) => {
    const { width, left } = getSliderRect();
    const { clientX } = e;
    let stop = (clientX - left) / width;
    if (stop < 0) stop = 0;
    if (stop > 1) stop = 1;
    const { colors } = value;
    const idx = findIndex(colors, (item: GradientColorStop) => item.stop > stop);
    let color: GradientColorStop, prev: GradientColorStop, next: GradientColorStop;
    if (idx === 0) {
      value.current = idx;
      next = colors[idx];
      color = { ...next, stop };
      colors.unshift(color);
    } else if (idx === -1) {
      value.current = colors.length;
      prev = colors[colors.length - 1];
      color = { ...prev, stop };
      colors.push(color);
    } else {
      value.current = idx;
      prev = colors[idx - 1];
      next = colors[idx];
      color = getColorStop(prev, next, stop);
      colors.splice(idx, 0, color);
    }
    onChange && onChange(value);
  };

  const getSliderRect = () => rootRef.current?.getBoundingClientRect() as DOMRect;

  const handleDragMove = (e: MouseEvent) => {
    const { clientX } = e;
    const { left, width } = getSliderRect();
    let stop = (clientX - left) / width;
    if (stop < 0) stop = 0;
    if (stop > 1) stop = 1;
    const { colors, current } = value || {};
    colors[current].stop = stop;
    setState((prev) => prev + 1);
  };

  const handleDragUp = () => {
    unbindDragEvents();
    const { colors, current } = value;
    const item = colors[current];
    // 注意这里拖动更换位置后，value 中的位置也需要改变。
    colors.sort((prev: GradientColorStop, next: GradientColorStop) => prev.stop - next.stop);
    value.current = colors.indexOf(item);
    onChange?.(value);
  };

  const bindDragEvents = () => {
    window.addEventListener('mousemove', handleDragMove);
    window.addEventListener('mouseup', handleDragUp);
  };

  const unbindDragEvents = () => {
    window.removeEventListener('mousemove', handleDragMove);
    window.removeEventListener('mouseup', handleDragUp);
  };

  const setCurrent = (idx: number) => {
    bindDragEvents();
    if (value.current === idx) return;
    value.current = idx;
    onChange?.(value);
  };

  const style = {
    backgroundImage: formatGradientColor({ ...value, angle: 90 }),
  };

  const { colors, current } = value;

  return (
    <div
      ref={rootRef}
      className="hlui-gradient-color-slider"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div onClick={addItem} className="hlui-gradient-color-slider-bg" style={style} />
      {colors.map((item: GradientColorStop, idx: number) => (
        <Item active={current === idx} idx={idx} onSelect={setCurrent} key={idx} color={item} />
      ))}
    </div>
  );
}

export default GradientSlider;
