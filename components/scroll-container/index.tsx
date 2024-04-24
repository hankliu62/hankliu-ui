// @ts-nocheck
import * as React from 'react';
import cs from 'classnames';
import getScrollbarWidth from '../_util/getScrollbarWidth';

export interface Props {
  overflow?: string;
  style?: any;
  gap?: number;
  width?: number | string;
  height?: number | string;
  maxHeight?: number | string;
  className?: string;
  onScroll?: (e: any) => void;
  indicated?: boolean;
  children: React.ReactNode;
}

export interface State {
  innerWidth?: number;
  indication?: string;
}

export default class ScrollContainer extends React.Component<Props, State> {
  static defaultProps = {
    overflow: 'y',
    style: {},
    width: '100%',
    height: '100%',
    onScroll() {},
  };

  // scrollBar 的宽度
  static ScrollBarSize = 3;

  static getScrollbarWidth = getScrollbarWidth;

  $root: HTMLDivElement;

  $scroll: HTMLDivElement;

  constructor(props: Props) {
    super(props);
    this.state = { innerWidth: undefined, indication: '' };
  }

  componentDidMount() {
    window.addEventListener('resize', this.resize, false);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.resize, false);
  }

  render() {
    let { className, style, width, height, maxHeight, indicated } = this.props;
    const { indication } = this.state;
    style = { ...style, width, height };
    if (maxHeight) {
      style.height = 'auto';
    }
    return (
      <div ref={this.setSize} className={`hlui-scroll-container ${className}`} style={style}>
        <div
          className={cs('scroll-top-shadow', { visible: indicated && indication === 'top' })}
        ></div>
        {this.renderInner()}
        <div
          className={cs('scroll-bottom-shadow', { visible: indicated && indication === 'bottom' })}
        ></div>
      </div>
    );
  }

  renderInner() {
    const { innerWidth } = this.state;
    if (!innerWidth) return null;
    let { gap = 5, maxHeight } = this.props;
    const marginRight = -(gap + getScrollbarWidth(this.$root));
    return (
      <div
        ref={this.saveScroll}
        className="hlui-scroll-body"
        onScroll={this.handleScroll}
        style={{ marginRight, maxHeight }}
      >
        <div className="hlui-scroll-inner" style={{ width: innerWidth }}>
          {this.props.children}
        </div>
      </div>
    );
  }

  saveScroll = (ref: any) => {
    console.log('render scroll');
    if (!ref) return;
    this.$scroll = ref;
    this.indicate();
  };

  setSize = (ref: HTMLDivElement) => {
    console.log('render root');
    if (!ref) return;
    this.$root = ref;
    const { offsetWidth } = ref;
    this.setState({ innerWidth: offsetWidth });
  };

  resize = () => {
    if (!this.$root) return;
    const { offsetWidth } = this.$root;
    this.setState({ innerWidth: offsetWidth });
  };

  handleScroll = (e: any) => {
    const { onScroll } = this.props;
    this.indicate();
    if (onScroll) onScroll(e);
  };

  indicate() {
    const { indicated } = this.props;
    if (!indicated) return;
    let indication = '';
    const { scrollHeight, scrollTop, clientHeight } = this.$scroll;
    if (scrollHeight > clientHeight) {
      indication = 'bottom';
      if (scrollTop + clientHeight === scrollHeight) {
        indication = 'top';
      }
    }
    if (indication === this.state.indication) return;
    this.setState({ indication });
  }
}
