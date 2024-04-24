import * as React from 'react';
import cs from 'classnames';
import AimOutlined from '@hankliu/icons/AimOutlined';
import InputNumber, { InputNumberProps } from '../input-number';

export interface AngleInputProps extends InputNumberProps {
  min?: number;
  max?: number;
}

const AngleInput = ({
  min = 0,
  max = 359,
  disabled,
  className,
  size,
  value,
  onChange,
  ...rest
}: AngleInputProps) => {
  const focused = React.useRef<boolean>(false);
  const diskRef = React.useRef<HTMLDivElement>(null);

  const changeValue = React.useCallback(
    (e: React.MouseEvent) => {
      if (disabled || !diskRef.current || !onChange) {
        return;
      }

      const rect = diskRef.current.getBoundingClientRect();
      const { width, height, left, top } = rect;
      const { clientX, clientY } = e;
      const value = Math.atan2(clientY - (top + height / 2), clientX - (left + width / 2));
      let ret = Math.round((value * 180) / Math.PI);
      if (ret < 0) ret = 360 + ret;
      onChange(ret);
    },
    [disabled, onChange],
  );

  const handleDiskMouseDown = () => {
    focused.current = true;
  };

  const handleDiskMouseMove = (e: React.MouseEvent) => {
    if (!focused.current) return;
    changeValue(e);
  };

  const handleDiskMouseMoveLeave = (_e: React.MouseEvent) => {
    focused.current = false;
  };

  const handleDiskMouseUp = (e: React.MouseEvent) => {
    focused.current = false;
    changeValue(e);
  };

  return (
    <div
      className={cs(className, {
        'hlui-angle-input': true,
        [`size-${size}`]: size,
        disabled: disabled,
      })}
    >
      <InputNumber
        prefix={<AimOutlined />}
        min={min}
        max={max}
        disabled={disabled}
        onChange={onChange}
        value={value}
        size={size}
        {...rest}
      />
      <div
        ref={diskRef}
        className="angle-disk"
        onMouseDown={handleDiskMouseDown}
        onMouseMove={handleDiskMouseMove}
        onMouseUp={handleDiskMouseUp}
        onMouseLeave={handleDiskMouseMoveLeave}
      >
        <div className="disk-point" style={{ transform: `rotateZ(${value}deg)` }} />
      </div>
    </div>
  );
};

export default AngleInput;
