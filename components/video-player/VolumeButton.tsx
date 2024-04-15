import React, { useState } from 'react';
import IconMute from '@ant-design/icons/lib/icons/MutedOutlined';
import IconSound from '@ant-design/icons/lib/icons/SoundOutlined';
import { SliderSingleProps } from 'antd4x/es/slider';
import { DropDownProps } from 'antd4x/es/dropdown';
import Slider from '../slider';
import Dropdown from '../dropdown';

interface VolumeButtonProps {
  volume: number;
  muted: boolean;
  onVolumeChange: SliderSingleProps['onChange'];
  getPopupContainer: DropDownProps['getPopupContainer'];
  onToggleMuted: () => void;
}
export default function VolumeButton({
  volume,
  muted,
  onVolumeChange,
  getPopupContainer,
  onToggleMuted,
}: VolumeButtonProps) {
  const [open, setVisible] = useState(false);
  const value = Math.round(muted ? 0 : volume * 100);
  const overlay = (
    <div className="hlui-chapters-video-sound-slider">
      <div className="hlui-chapters-video-sound-value">{value}</div>
      <div className="hlui-chapters-video-slider-inner">
        <Slider
          vertical
          tooltipVisible={false}
          disabled={muted}
          value={value}
          onChange={onVolumeChange}
        />
      </div>
    </div>
  );
  return (
    <Dropdown
      overlay={overlay}
      onOpenChange={setVisible}
      open={open}
      placement="top"
      getPopupContainer={getPopupContainer}
    >
      <div className="hlui-chapters-video-control-btn">
        {muted ? (
          <IconMute className="hlui-chapters-video-play-btn" onClick={onToggleMuted} />
        ) : (
          <IconSound className="hlui-chapters-video-play-btn" onClick={onToggleMuted} />
        )}
      </div>
    </Dropdown>
  );
}
