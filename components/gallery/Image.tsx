// @ts-nocheck
import * as React from 'react';
import loadImg from '../_util/loadImage';
import IconPictureEnlarge from '@hankliu/icons/PictureOutlined';
import IconPictureNarrow from '@hankliu/icons/PictureOutlined';
import IconPictureRotate from '@hankliu/icons/PictureOutlined';
import IconRefresh from '@hankliu/icons/PictureOutlined';
import { getLocale } from './locale';
import Tooltip from '../tooltip';
import LoadingOutlined from '@hankliu/icons/LoadingOutlined';
// import throttle from 'lodash/throttle'
// import debounce from 'lodash/debounce'

interface ImageStyle {
  scale: number;
  rotate: number;
  translateX: number;
  translateY: number;
}

export interface ImageProps {
  src: string;
  type: string;
  component?: any;
  title?: string;
  w?: number;
  h?: number;
  _index?: number;
  onStyleChange?: (style: ImageStyle) => void;
}

const SCALES = [0.25, 0.5, 0.75, 1, 1.5, 2];

export default class Image extends React.Component<ImageProps, any> {
  static defaultProps = {
    type: 'image',
  };

  state: any = { loading: true };

  private $wrap: any;

  private mouseEv: any;

  private wheeling: boolean = false;

  saveWrap = (ele: any) => {
    if (!ele) return;
    this.$wrap = ele;
  };

  loadImage(src: string) {
    this.setState({ loading: true });
    loadImg(src).then((img: any) => {
      this.initImage(img, src);
    });
  }

  initImage(img: any, _src?: string) {
    const w = img.width;
    const h = img.height;
    const width = this.$wrap.clientWidth;
    const height = this.$wrap.clientHeight;
    let scale = 1;
    if (w / h > width / height) {
      if (w > width) scale = width / w;
    } else if (h > height) scale = height / h;
    const { type, src } = this.props;
    // 如果 src 不是当前 src 则不渲染
    if (type === 'image' && _src !== src) return;
    const scales = SCALES.slice();
    if (scales.indexOf(scale) === -1) {
      const idx = scales.findIndex((value: number) => value > scale);
      scales.splice(idx, 0, scale);
    }
    this.setState({
      src: _src,
      img,
      scale,
      deaultScale: scale,
      scales,
      rotate: 0,
      translateX: 0,
      translateY: 0,
      // width: w,
      // height: h,
      loading: false,
    });
  }

  changeStyle(style: any) {
    this.setState(style);
    const { onStyleChange } = this.props;
    const { scale, rotate, translateX, translateY } = this.state;
    if (onStyleChange) {
      onStyleChange({
        scale,
        rotate,
        translateX,
        translateY,
        ...style,
      });
    }
  }

  reset = () => {
    const { deaultScale } = this.state;
    this.changeStyle({
      scale: deaultScale,
      rotate: 0,
      translateX: 0,
      translateY: 0,
    });
  };

  zoomIn = () => {
    const { scale, scales } = this.state;
    const idx = scales.findIndex((value: number) => value > scale);
    if (idx === -1) return;
    this.changeStyle({ scale: scales[idx], translateX: 0, translateY: 0 });
  };

  zoomOut = () => {
    const { scale, scales } = this.state;
    const idx = scales.findIndex((value: number) => value >= scale);
    if (idx <= 0) return;
    this.changeStyle({ scale: scales[idx - 1], translateX: 0, translateY: 0 });
  };

  rotate = () => {
    let { rotate } = this.state;
    rotate += 90;
    if (rotate === 360) rotate = 0;
    this.changeStyle({ rotate, translateX: 0, translateY: 0 });
  };

  handleMouseDown = (e: any) => {
    e.preventDefault();
    // console.log('mouse down')
    const { loading, translateX, translateY } = this.state;
    if (loading) return;
    const { clientX, clientY } = e;
    this.mouseEv = {
      x: clientX,
      y: clientY,
      translateX,
      translateY,
    };
  };

  handleMouseMove = (e: any) => {
    e.preventDefault();
    if (!this.mouseEv) return;
    const { clientX, clientY } = e;
    // console.log('this.mouseEv: ', this.mouseEv)
    // console.log(clientX, clientY)
    const { translateX, translateY, x, y } = this.mouseEv;
    this.changeStyle({
      translateX: translateX + clientX - x,
      translateY: translateY + clientY - y,
    });
  };

  handleMouseUp = (e: any) => {
    e.preventDefault();
    // console.log('mouse up ')
    this.mouseEv = undefined;
  };

  handleWheel = (e: any) => {
    e.preventDefault();
    e.stopPropagation();
    const { deltaY, deltaX } = e;
    this.setPosition(deltaX, deltaY);
    // if (Math.abs(deltaX) > Math.abs(deltaY)) return
    // console.log(e)
    // let { scale, scales } = this.state
    // scale -= deltaY / 100
    // if (scale < scales[0]) scale = scales[0]
    // const max = scales[scales.length - 1]
    // if (scale > max) scale = max
    // this.setState({ scale })
  };

  setPosition(deltaX: number, deltaY: number) {
    const { translateX, translateY, scale, rotate } = this.state;
    if (this.wheeling || this.state.loading) return;
    // this.wheeling = true
    // setTimeout(() => this.wheeling = false, 30)
    let { width, height } = this.state.img;
    // width * scale
    const { clientWidth, clientHeight } = this.$wrap;
    // 高宽互换
    if (rotate % 180 === 90) {
      const tmp = width;
      width = height;
      height = tmp;
    }
    let newX = translateX - deltaX;
    let newY = translateY - deltaY;
    const maxX = (width * scale - clientWidth) / (scale * 2);
    const maxY = (height * scale - clientHeight) / (scale * 2);
    if (maxX > 0) {
      if (Math.abs(newX) > maxX) {
        newX = newX > 0 ? maxX : -maxX;
      }
    } else {
      newX = translateX;
    }
    if (maxY > 0) {
      if (Math.abs(newY) > maxY) {
        newY = newY > 0 ? maxY : -maxY;
      }
    } else {
      newY = translateY;
    }
    this.changeStyle({
      translateX: newX,
      translateY: newY,
    });
  }

  componentDidMount() {
    const { type, src, w, h } = this.props;
    if (type === 'image') {
      this.loadImage(src);
    } else {
      this.initImage({ width: w, height: h });
    }
    this.$wrap.addEventListener('wheel', this.handleWheel, {
      passive: false,
    });
  }

  componentDidUpdate(prevProps: ImageProps) {
    const { type, src, w, h } = this.props;
    if (type === 'image') {
      if (prevProps.src !== src) {
        this.loadImage(src);
      }
    } else if (prevProps.w !== w || prevProps.h !== h) {
      this.initImage({ width: w, height: h });
    }
  }

  componentWillUnmount() {
    this.$wrap.removeEventListener('wheel', this.handleWheel);
  }

  renderImage() {
    const { type, component, w, h } = this.props;
    const { src, img, loading, scale, rotate, translateX, translateY } = this.state;
    if (loading)
      return (
        <div className="img-spin">
          <LoadingOutlined />
        </div>
      );
    const style: any = {
      left: -2 * img.width,
      right: -2 * img.width,
      top: -2 * img.height,
      bottom: -2 * img.height,
      transform: `scale(${scale}) translate3d(${translateX}px, ${translateY}px, 0) rotateZ(${rotate}deg)`,
    };
    if (type === 'image') {
      return <img src={src} className="img-element" style={style} />;
    }
    style.width = w;
    style.height = h;
    return (
      <div className="img-element" style={style}>
        {typeof component === 'function'
          ? component({
              scale,
              rotate,
              translateX,
              translateY,
            })
          : component}
      </div>
    );
  }

  renderBar() {
    const { loading, scale, scales } = this.state;
    if (loading) return null;
    const locale = getLocale();
    return (
      <div className="img-bar">
        <Tooltip title={locale.zoomIn}>
          <IconPictureEnlarge
            className={`bar-action ${scale >= scales[scales.length - 1] ? 'disabled' : ''}`}
            onClick={this.zoomIn}
          />
        </Tooltip>
        <span className="bar-text">{`${Math.round(scale * 100)}%`}</span>
        <Tooltip title={locale.zoomOut}>
          <IconPictureNarrow
            className={`bar-action ${scale <= scales[0] ? 'disabled' : ''}`}
            onClick={this.zoomOut}
          />
        </Tooltip>
        <Tooltip title={locale.rotate}>
          <IconPictureRotate className="bar-action with-gap" onClick={this.rotate} />
        </Tooltip>
        <Tooltip title={locale.reset}>
          <IconRefresh className="bar-action with-gap" onClick={this.reset} />
        </Tooltip>
      </div>
    );
  }

  render() {
    return (
      <div
        ref={this.saveWrap}
        className="img-wrap"
        onMouseUp={this.handleMouseUp}
        onMouseDown={this.handleMouseDown}
        onMouseMove={this.handleMouseMove}
      >
        {this.renderImage()}
        {this.renderBar()}
      </div>
    );
  }
}
