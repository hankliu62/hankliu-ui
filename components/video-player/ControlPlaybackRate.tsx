import React from 'react';
import SettingOutlined from '@ant-design/icons/lib/icons/SettingOutlined';
import { DropDownProps } from 'antd4x/es/dropdown';
import DropSelect, { DropSelectProps } from '../drop-select';
import { getLocale } from './locale';
import isIE from '../_util/isIE';

const PROptions = [
  {
    title: '0.5 x',
    value: 0.5,
  },
  {
    title: '1.0 x',
    value: 1,
  },
  {
    title: '1.5 x',
    value: 1.5,
  },
  {
    title: '2.0 x',
    value: 2,
  },
];

interface ControlPlaybackRateProps {
  playbackRate: number;
  getPopupContainer: DropDownProps['getPopupContainer'];
  onChange: DropSelectProps['onChange'];
}
function ControlPlaybackRate({
                               playbackRate,
  getPopupContainer,
  onChange,
}: ControlPlaybackRateProps) {
  const locale = getLocale();
  return (
    <DropSelect
      title={locale.prText}
      value={playbackRate}
      onChange={onChange}
      options={PROptions}
      overlayClassName="hlui-chapters-video-control-pr"
      placement="top"
      getPopupContainer={getPopupContainer}
      trigger={isIE() ? ['click'] : undefined}
    >
      <div className="hlui-chapters-video-control-btn">
        <SettingOutlined className="hlui-chapters-video-icon" />
      </div>
    </DropSelect>
  );
}

export default React.memo(ControlPlaybackRate)
