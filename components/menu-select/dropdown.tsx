import React, { useState, useContext } from 'react';
import { ConfigContext } from 'antd4x/lib/config-provider';
import Dropdown from '../dropdown';
import Panel from './panel';

export default function MenuDropSelect(props: any) {
  let { children, type, trigger = ['hover'], ...rest } = props;
  const [open, setVisible] = useState(false);
  const handleVisibleChange = (v: boolean) => {
    if (open === v) {
      return;
    }

    setVisible(v);
  };

  const context = useContext(ConfigContext);
  const prefixCls = context?.getPrefixCls();

  const overlay = (
    <div className={`${prefixCls}-menu-dropdown`}>
      <Panel {...rest} />
    </div>
  );

  return (
    <Dropdown open={open} onOpenChange={handleVisibleChange} overlay={overlay} trigger={trigger}>
      {children}
    </Dropdown>
  );
}
