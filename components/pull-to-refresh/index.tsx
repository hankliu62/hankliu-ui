import React from 'react';
import IconLoading from '@ant-design/icons/lib/icons/LoadingOutlined';
import IconDescend from '@ant-design/icons/SortDescendingOutlined';
import classnames from 'classnames';

let PTR: any;

if (typeof window === 'object') {
  // eslint-disable-next-line global-require
  PTR = require('react-pull-to-refresh');
}

export interface PullToRefreshProps {
  icon?: React.ReactNode;
  loading?: React.ReactNode;
  style?: any;
  className?: string;
  onRefresh?: any;
  children?: React.ReactNode;
  disabled?: boolean;
  distance?: number;
  resistance?: number;
  hammerOptions?: any;
}

export default class PullToRefresh extends React.Component<PullToRefreshProps, any> {
  static defaultProps = {
    distance: 60,
    icon: <IconDescend className="ptr-icon" />,
    loading: (
      <div className="loading">
        <div className="refresh-loading-img">
          <IconLoading className="refresh-loading-icon" />
        </div>
      </div>
    ),
  };

  handleRefresh = (resolve: any, reject: any) => {
    const { onRefresh } = this.props;
    if (!onRefresh) return;
    const res = onRefresh(resolve, reject);
    if (res === true) resolve();
    if (res === false) reject();
    if (res && res.then) res.then(resolve, reject);
  };

  render() {
    if (!PTR) {
      const { children } = this.props;
      return children;
    }
    const { className, distance, ...rest } = this.props;
    return (
      <PTR className={classnames('hlui-ptr', className )} distanceToRefresh={distance} onRefresh={this.handleRefresh} {...rest} />
    );
  }
}
