import React from 'react';
import IconSetUp from '@ant-design/icons/SettingOutlined';
import DropSelect from '../drop-select';
import { getLocale } from './locale';

export interface RateButtonProps {
  rateValue: number;
  onRateChange: (value: any) => void;
}

const RateButton = ({ rateValue, onRateChange }: RateButtonProps) => {
  const setPlaybackRate = (value: any) => {
    onRateChange(value);
  }

  const options = [{
    title: '0.5 x',
    value: 0.5,
  }, {
    title: '1.0 x',
    value: 1,
  }, {
    title: '1.5 x',
    value: 1.5,
  }, {
    title: '2.0 x',
    value: 2,
  }];
  const locale = getLocale();

  return (
    <DropSelect
      title={locale.prText}
      value={rateValue}
      onChange={setPlaybackRate}
      options={options}
      overlayClassName="hlui-audio-control-pr"
      placement="top"
    >
      <div className="control-btn">
        <IconSetUp />
      </div>
    </DropSelect>
  );
}


export default RateButton;
