import React from 'react';
import BackTop, { BackTopProps } from 'antd4x/lib/back-top';
import IconBackToTop from '@ant-design/icons/VerticalAlignTopOutlined';
import appendDefaultProps from '../_util/appendDefaultProps';

appendDefaultProps();

export * from 'antd4x/lib/back-top';

export default function HlBackTop({ children = (<IconBackToTop className="hlui-backtop-btn" />), ...rest }:BackTopProps) {
  return (
    <BackTop {...rest}>{children}</BackTop>
  );
}
