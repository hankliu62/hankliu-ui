import React from 'react';
import Tooltip from '../tooltip';

interface PhoneOptionProps {
  name: string;
  code: string;
}

export default function PhoneOption({ name, code }: PhoneOptionProps) {
  return (
    <p className="hlui-input-phone-option-wrap">
      <Tooltip title={name}>
        <span className="hlui-input-phone-option-name">{name}</span>
      </Tooltip>
      <span className="hlui-input-phone-option-code">{code}</span>
    </p>
  );
}
