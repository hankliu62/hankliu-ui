import IconLoading from '@ant-design/icons/lib/icons/LoadingOutlined';
import cs from 'classnames';
import * as React from 'react';
import { Waypoint } from 'react-waypoint';

export interface LoadMoreProps extends Waypoint.WaypointProps {
  visible?: boolean;
  indicator?: React.ReactElement;
  disabled?: boolean;
  className?: string;
  style?: React.CSSProperties;
  onEnter?: (e: any) => void;
}

function DefaultLoadMoreIndicator() {
  return (
    <div className="hlui-load-more-spin">
      <IconLoading className="hlui-load-more-spin-icon" />
    </div>
  );
}

function LoadMore({
  className,
  style,
  visible = true,
  disabled = false,
  indicator = <DefaultLoadMoreIndicator />,
  onEnter,
  ...rest
}: LoadMoreProps) {
  const handleEnter = (e: any) => {
    if (disabled) return;
    if (onEnter) {
      onEnter(e);
    }
  };
  if (!visible) return null;
  return (
    <div className={cs('hlui-load-more', className)} style={style}>
      {!disabled ? <Waypoint {...rest} onEnter={handleEnter} /> : null}
      {indicator}
    </div>
  );
}

export default LoadMore;
