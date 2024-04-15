import * as React from 'react';
import { ConfigContext } from 'antd4x/lib/config-provider';
import type { BadgeProps } from 'antd4x/lib/badge';
import LibBadge from 'antd4x/lib/badge';
import Ribbon from 'antd4x/lib/badge/Ribbon';
import cs from 'classnames';
import appendDefaultProps from '../_util/appendDefaultProps';

appendDefaultProps();
export * from 'antd4x/lib/badge';

function Badge(props: BadgeProps) {
  const { getPrefixCls } = React.useContext(ConfigContext);

  const { dot, children, count, ...rest } = props;
  let { status, className } = props;
  if (!dot && status && count && !children) {
    className = cs(className, {
      [`${getPrefixCls() || 'hlui'}-badge-count-status-${status}`]: !!status,
    });
    status = undefined;
  }

  return (
    <LibBadge {...rest} className={className} dot={dot} count={count} status={status}>
      {children}
    </LibBadge>
  );
}
Badge.Ribbon = Ribbon;
export default Badge;
