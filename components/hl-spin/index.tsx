// @ts-nocheck
import * as React from 'react';
import cs from 'classnames';
import SyncOutlined from '@ant-design/icons/SyncOutlined';

export interface HlSpinProps {
  size?: string,
  title?: string,
  className?: string,
  style?: any,
  coverStyle?: any,
  loading?: boolean,
  block?: boolean,
  delay?: number,
  indicator?: React.ReactNode
}

class HlSpin extends React.Component<HlSpinProps, any> {
  static defaultProps = {
    size: 'default',
    loading: true,
    block: false,
    delay: 500,
    indicator: <SyncOutlined className="hlui-custom-spin-icon" spin />,
  };

  static setDefaultIndicator = function (indicator: React.ReactNode) {
    HlSpin.defaultProps.indicator = indicator;
  };

  _tm: any = null;

  constructor(props: HlSpinProps) {
    super(props);
    this.state = { loading: props.loading };
  }

  componentDidUpdate() {
    const { loading, delay } = this.props;
    if (delay) {
      clearTimeout(this._tm);
      if (loading) {
        this.showLoading();
      } else {
        this._tm = setTimeout(this.hideLoading, delay);
      }
    }
  }

  showLoading = () => {
    const { loading } = this.state;
    if (!loading) this.setState({ loading: true });
  };

  hideLoading = () => {
    const { loading } = this.state;
    if (loading) this.setState({ loading: false });
  };

  render() {
    const {
      className, style, coverStyle, size, title, block, children, indicator,
    } = this.props;
    const { loading } = this.state;

    const cls = cs('hlui-custom-spin-wrap', className, {
      [`size-${size}`]: size,
      [`block`]: block,
      loading,
    });
    return (
      <div className={cls} style={style}>
        <div className="hlui-custom-spin-container">{children}</div>
        <div className="hlui-custom-spin-content" style={coverStyle}>
          {indicator}
          {title ? <div className="hlui-custom-spin-title">{title}</div> : null}
        </div>
      </div>
    );
  }
}

export default HlSpin;
