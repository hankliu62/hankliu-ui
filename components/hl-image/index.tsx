// @ts-nocheck
/* eslint-disable no-const-assign */
import cs from 'classnames';
import React, { useEffect, useRef, useState } from 'react';
import isIE from '../_util/isIE';

export interface HlImageProps {
  shape?: number | string;
  type?: string; // todo：扩展用
  className?: string;
  src?: string;
  fit?: string;
  style?: any;
  size?: number | string;
  width?: number | string;
  height?: number | string;
  block?: boolean;
  delay?: number;
  showLoading?: boolean;
  errorImageUrl?: string;
  errorImageStyle?: any;
  onError?: (err?: any) => void;
  onClick?: (e?: React.MouseEvent<any>) => void;
  onMouseEnter?: (e?: React.MouseEvent<any>) => void;
  onMouseLeave?: (e?: React.MouseEvent<any>) => void;
  onFocus?: (e?: React.MouseEvent<any>) => void;
  alt?: string;
  draggable?: boolean;
  // type | 图片类型，待扩展后使用 | string | - |
  // lowQualitySrc | 图片未加载出来时的图片URL（可以是低质量的图片或默认的一张图） | string | - |
}

export interface ImageState {
  src?: string;
  w: number;
  h: number;
  loading?: boolean;
  error?: any;
  ready?: boolean;
  _img?: any;
}

const ImageDefaultStyle = {
  display: 'block',
  width: 'auto',
  height: 'auto',
};

const ImageFlexStyle = {
  position: 'absolute',
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  display: 'block',
  margin: 'auto',
};

const DEFUALT_ERROR_IMAGE =
  "data:image/svg+xml,%3Csvg width='39' height='37' viewBox='0 0 39 37' fill='none' xmlns='http://www.w3.org/2000/svg'%3E %3Cpath d='M24 1H23.5V1.5V13.415L20.0281 23.3348L19.9691 23.5032L20.0301 23.6709L20.4684 24.8761L19.5 23.3544V13.5V13.4286L19.48 13.36L15.98 1.36L15.875 1H15.5H2.06055C1.19749 1 0.51246 1.72651 0.563141 2.58808L2.4414 34.5185C2.49048 35.3528 3.21201 35.9861 4.04568 35.9266L23.9879 34.5021L35.3698 35.868C36.2365 35.972 37.0086 35.3168 37.047 34.4448L38.4535 2.56611C38.4911 1.71257 37.8093 1 36.9549 1H24Z' stroke='%23A8A8A8' stroke-linecap='square'/%3E %3Cpath d='M23.5 21L25 23.5L30 19L37 26' stroke='%23A8A8A8' stroke-linecap='round'/%3E %3Cpath d='M2 26.5L7.5 20L10.5 22.5L16 17' stroke='%23A8A8A8' stroke-linecap='round'/%3E %3Ccircle cx='30' cy='9' r='2.5' stroke='%23A8A8A8'/%3E %3C/svg%3E";

function HlImage(props: HlImageProps) {
  const {
    src = '',
    showLoading = true,
    delay = 500,
    errorImageUrl = DEFUALT_ERROR_IMAGE,
    errorImageStyle = { width: 48 },
    shape,
    style,
    block,
    onMouseEnter,
    onMouseLeave,
    onFocus,
    onError,
    size,
    width,
    height,
    draggable,
    alt,
  } = props;
  let { className = '', fit } = props;

  const [state, setState] = useState<ImageState>({
    w: 0,
    h: 0,
    loading: true,
    error: null,
    ready: false,
  });

  const onErrorTimeoutId = useRef<number>();
  const onLoadTimeoutId = useRef<number>();
  const $wrap = useRef<HTMLElement>();
  const img = useRef<HTMLImageElement>();
  const [isFirstRender, setIsFirstRender] = useState<Boolean>(true);

  const onErrorImage = (err: any) => {
    if (onError) onError(err);
    const currentDelay = showLoading ? delay : 0;
    onErrorTimeoutId.current = window.setTimeout(() => {
      onErrorTimeoutId.current = 0;
      setState((preState) => ({
        ...preState,
        loading: false,
        error: err,
      }));
    }, currentDelay);
  };

  const loadImage = (imageSrc?: string) => {
    if (onErrorTimeoutId.current) {
      window.clearTimeout(onErrorTimeoutId.current);
    }
    if (src) {
      setState({
        ...state,
        loading: true,
        error: null,
        ready: false,
      });
      if (!img.current || !imageSrc) return;
      img.current.src = imageSrc;
    } else {
      onErrorImage('src invalid');
    }
  };

  const onLoad = () => {
    if (!img.current) return;
    // eslint-disable-next-line no-shadow
    const { src, width, height } = img.current;
    setState({
      ...state,
      src,
      w: width,
      h: height,
      ready: true,
    });
    onLoadTimeoutId.current = window.setTimeout(() => {
      onLoadTimeoutId.current = 0;
      setState((prevState: ImageState) => ({
        ...prevState,
        loading: false,
        error: null,
      }));
    }, delay);
  };

  const handleClick = (e: React.MouseEvent<any>) => {
    const { onClick } = props;
    if (onClick) onClick(e);
  };

  const renderIndicator = () => {
    const { loading, error } = state;
    return (
      <div
        className={cs('hlui-img-indicator', {
          loading: loading && showLoading,
          error,
        })}
      >
        {error ? <img src={errorImageUrl} style={errorImageStyle} alt={alt} /> : null}
      </div>
    );
  };

  const renderRealImage = () => {
    let tempWidth = width;
    let tempHeight = height;
    if (!state.ready) return null;
    let imageStyle: any = { ...ImageDefaultStyle };
    if (size) {
      tempWidth = size;
      tempHeight = size;
    }
    if (tempWidth) imageStyle.width = tempWidth;
    if (tempHeight) imageStyle.height = tempHeight;
    if (fit === 'flex') {
      const rect = $wrap.current?.getBoundingClientRect();
      // 如果 宽 或者 高 大于容器，则用 contain 来实现
      if (state.w > rect.width || state.h > rect.height) {
        fit = 'contain';
      } else {
        imageStyle = { width: state.w, height: state.h, ...ImageFlexStyle };
        return <img style={imageStyle} src={state.src} alt={alt} draggable={draggable} />;
      }
    }
    if (isIE()) {
      if (fit) {
        imageStyle.backgroundImage = `url(${state.src})`;
        imageStyle.backgroundRepeat = 'no-repeat';
        imageStyle.backgroundPosition = 'center';
        // fill, contain, cover
        if (fit === 'fill') {
          imageStyle.backgroundSize = '100%';
        } else if (fit === 'contain' || fit === 'cover') {
          imageStyle.backgroundSize = fit;
        }
        return <div style={imageStyle} />;
      }
      // ie bug need reset width & height to auto
      return (
        <img
          width="auto"
          height="auto"
          style={imageStyle}
          src={state.src}
          alt={alt}
          draggable={draggable}
        />
      );
    }
    if (fit) imageStyle.objectFit = fit;
    return <img style={imageStyle} src={state.src} alt={alt} draggable={draggable} />;
  };

  useEffect(() => {
    setIsFirstRender(false);
    const tempImage = document.createElement('img');
    tempImage.addEventListener('load', onLoad, false);
    tempImage.addEventListener('error', onErrorImage, false);
    img.current = tempImage;
    loadImage(src);
  }, []);

  useEffect(
    () => () => {
      if (onLoadTimeoutId.current) {
        clearTimeout(onLoadTimeoutId.current);
      }
      if (onErrorTimeoutId.current) {
        clearTimeout(onErrorTimeoutId.current);
      }
      if (!img.current) return;
      img.current.removeEventListener('load', onLoad, false);
      img.current.removeEventListener('error', onErrorImage, false);
    },
    [],
  );

  useEffect(() => {
    if (!isFirstRender) {
      loadImage(src);
    }
  }, [src]);

  className += ' hlui-img-wrap';
  let tempWidth = width;
  let tempHeight = height;
  if (size) {
    tempWidth = size;
    tempHeight = size;
  }
  const wrapStyle = { ...style };
  if (block) wrapStyle.display = 'block';
  if (tempWidth) {
    wrapStyle.width = tempWidth;
    wrapStyle.minWidth = 'auto';
  } else {
    wrapStyle.minWidth = state.ready ? 'auto' : 48;
  }
  if (tempHeight) {
    wrapStyle.height = tempHeight;
    wrapStyle.minHeight = 'auto';
  } else {
    wrapStyle.minHeight = state.ready ? 'auto' : 48;
  }
  if (shape === 'circle') {
    wrapStyle.borderRadius = '50%';
  } else if (typeof shape === 'number') {
    wrapStyle.borderRadius = shape;
  }
  const wrapProps: any = {};
  if (onMouseEnter) wrapProps.onMouseEnter = onMouseEnter;
  if (onMouseLeave) wrapProps.onMouseLeave = onMouseLeave;
  if (onFocus) wrapProps.onFocus = onFocus;
  return (
    <div ref={$wrap} onClick={handleClick} className={className} style={wrapStyle} {...wrapProps}>
      {renderRealImage()}
      {renderIndicator()}
    </div>
  );
}

export default HlImage;
