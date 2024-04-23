import * as React from 'react';
import Breadcrumb from 'antd4x/lib/breadcrumb';
import IconRight from '@hankliu/icons/IconRight';
import appendDefaultProps from '../_util/appendDefaultProps';

appendDefaultProps();

export * from 'antd4x/lib/breadcrumb';

if (Breadcrumb.defaultProps) {
  Breadcrumb.defaultProps.separator = <IconRight />;
} else {
  Breadcrumb.defaultProps = {
    separator: <IconRight />,
  };
}
export default Breadcrumb;
