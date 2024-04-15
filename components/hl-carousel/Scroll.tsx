import * as React from 'react';

export interface CarouselScrollProps {
  slideWidth: number;
  slidesToScroll?: number;
  prevArrowStyle?: any;
  nextArrowStyle?: any;
  className?: string;
  style?: object;
  children: React.ReactNode;
}

export default class Carousel extends React.Component<CarouselScrollProps, any> {
  static defaultProps = {
    slidesToScroll: 1,
  };

  state = { current: 0, animate: true, clientWidth: 0 };

  overRef: any = React.createRef();

  getMaxOffset() {
    const { children, slideWidth } = this.props;
    const { clientWidth } = this.state;
    const contentWidth = React.Children.count(children) * slideWidth;
    if (contentWidth > clientWidth) {
      return contentWidth - clientWidth;
    }
    return 0;
  }

  next = () => {
    const { slidesToScroll = 1, slideWidth } = this.props;
    this.scroll(slidesToScroll * slideWidth);
  };

  prev = () => {
    const { slidesToScroll = 1, slideWidth } = this.props;
    this.scroll(-slidesToScroll * slideWidth);
  };

  scroll(offset: number, animate: boolean = true) {
    let { current } = this.state;
    const max = this.getMaxOffset();
    current += offset;
    if (current >= max) {
      current = max;
    } else if (current <= 0) {
      current = 0;
    }
    this.setState({ current, animate });
  }

  componentDidMount() {
    // 初始化
    const { current } = this.overRef;
    this.setState({ ready: true, clientWidth: current.clientWidth });
    window.addEventListener('resize', this.getClientWidth);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.getClientWidth);
  }

  getClientWidth = () => {
    const { current } = this.overRef;
    let clientWidth = 0;
    if (current) {
      clientWidth = current.clientWidth;
    }
    this.setState({
      clientWidth,
    });
  };

  checkNextDisabled() {
    // 如果 dom 还没有初始化
    if (!this.overRef.current) return true;
    const max = this.getMaxOffset();
    const { current } = this.state;
    return current >= max;
  }

  render() {
    const { current, animate } = this.state;
    let {
      prevArrowStyle,
      nextArrowStyle,
      className = '',
      style,
      slideWidth,
      children,
    } = this.props;
    className += ' hlui-carousel-scroll';
    return (
      <div className={className} style={style}>
        <div
          className={`scroll-prev ${current <= 0 ? 'scroll-disabled' : ''}`}
          onClick={this.prev}
          style={prevArrowStyle}
        />
        <div ref={this.overRef} className="hlui-carousel-scroll-over">
          <div
            className={`hlui-carousel-scroll-inner ${animate ? 'animate' : ''}`}
            style={{
              width: slideWidth * React.Children.count(children),
              transform: `translate3d(-${current}px, 0px, 0px)`,
            }}
          >
            {React.Children.map(children, (child: any, idx: number) => (
              <div key={idx} style={{ width: slideWidth }} className="hlui-carousel-item">
                {child}
              </div>
            ))}
          </div>
        </div>
        <div
          className={`scroll-next ${this.checkNextDisabled() ? 'scroll-disabled' : ''}`}
          onClick={this.next}
          style={nextArrowStyle}
        />
      </div>
    );
  }
}
