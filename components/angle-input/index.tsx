// @ts-nocheck
import * as React from 'react';
import cs from 'classnames';
import AimOutlined from '@ant-design/icons/AimOutlined';
import InputNumber from '../input-number';

export interface AngleInputProps {}

class AngleInput extends React.Component<any, any> {
  static defaultProps = {
    min: 0,
    max: 359,
  };

  $focused: boolean;

  $diskRef: any;

  saveDiskRef = (ref: any) => {
    if (ref) this.$diskRef = ref;
  };

  changeValue(e: React.MouseEvent) {
    const { disabled } = this.props;
    if (disabled) return;
    const rect = this.$diskRef.getBoundingClientRect();
    const {
      width, height, left, top,
    } = rect;
    const { clientX, clientY } = e;
    const value = Math.atan2(clientY - (top + height / 2), clientX - (left + width / 2));
    let ret = Math.round((value * 180) / Math.PI);
    if (ret < 0) ret = 360 + ret;
    // console.log(ret)
    const { onChange } = this.props;
    onChange(ret);
  }

  handleDiskMouseDown = () => {
    this.$focused = true;
  };

  handleDiskMouseMove = (e: React.MouseEvent) => {
    if (!this.$focused) return;
    this.changeValue(e);
  };

  handleDiskMouseMoveLeave = (_e: React.MouseEvent) => {
    this.$focused = false;
  };

  handleDiskMouseUp = (e: React.MouseEvent) => {
    this.$focused = false;
    this.changeValue(e);
  };

  render() {
    const {
      className, value, size, ...rest
    } = this.props;
    return (
      <div
        className={cs(className, {
          'hlui-angle-input': true,
          [`size-${size}`]: size,
          disabled: rest.disabled,
        })}
      >
        <InputNumber prefix={<AimOutlined />} value={value} size={size} {...rest} />
        <div
          ref={this.saveDiskRef}
          className="angle-disk"
          onMouseDown={this.handleDiskMouseDown}
          onMouseMove={this.handleDiskMouseMove}
          onMouseUp={this.handleDiskMouseUp}
          onMouseLeave={this.handleDiskMouseMoveLeave}
        >
          <div className="disk-point" style={{ transform: `rotateZ(${value}deg)` }} />
        </div>
      </div>
    );
  }
}
export default AngleInput;
