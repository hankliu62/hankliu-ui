import * as React from 'react';
import Breadcrumb from 'antd4x/lib/breadcrumb';
import RightOutlined from '@ant-design/icons/RightOutlined';
import appendDefaultProps from '../_util/appendDefaultProps';

appendDefaultProps();

export * from 'antd4x/lib/breadcrumb';

if (Breadcrumb.defaultProps) {
  Breadcrumb.defaultProps.separator = <RightOutlined />;
} else {
  Breadcrumb.defaultProps = {
    separator: <RightOutlined />,
  };
}
export default Breadcrumb;
