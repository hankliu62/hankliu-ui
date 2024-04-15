import * as React from 'react';
import type { TooltipProps } from 'antd4x/lib/tooltip';
import Tooltip from 'antd4x/lib/tooltip';
import appendDefaultProps from '../_util/appendDefaultProps';

appendDefaultProps();

export * from 'antd4x/lib/tooltip';

export type HlTooltipProps = TooltipProps & {
  // eslint-disable-next-line react/require-default-props
  disabled?: boolean;
  // eslint-disable-next-line react/require-default-props
  ghosted?: boolean;
};

function HlTooltip(props: HlTooltipProps) {
  const { disabled, ghosted, overlayClassName = '', children, ...rest } = props;
  let finalOverlayClassName = overlayClassName;
  if (ghosted) {
    finalOverlayClassName += ' ghosted';
  }
  if (disabled) {
    return (
      // eslint-disable-next-line react/jsx-no-useless-fragment
      <>{children}</>
    );
  }
  return (
    <Tooltip {...rest} overlayClassName={finalOverlayClassName}>
      {children}
    </Tooltip>
  );
}

export default HlTooltip;
