/* eslint-disable prefer-const */
import React from 'react';
import type { CarouselProps as LibCarouselProps } from 'antd4x/lib/carousel';
import LibCarousel from 'antd4x/lib/carousel';
import appendDefaultProps from '../_util/appendDefaultProps';

import Scroll from './Scroll';

appendDefaultProps();

export * from 'antd4x/lib/carousel';

export interface HlCarouselProps extends LibCarouselProps {
  prevArrowStyle?: any;
  nextArrowStyle?: any;
}

function CustomArrow(props: any) {
  const { className, customStyle, style, onClick } = props;
  return <div className={className} style={{ ...style, ...customStyle }} onClick={onClick} />;
}

export default class HlCarousel extends React.Component<HlCarouselProps, any> {
  static Scroll = Scroll;

  static defaultProps = {
    infinite: false,
  };

  slick: any;

  saveSlick = (node: any) => {
    this.slick = node;
  };

  next() {
    this.slick.next();
  }

  prev() {
    this.slick.prev();
  }

  goTo(slide: number, dontAnimate = false) {
    this.slick.goTo(slide, dontAnimate);
  }

  render() {
    let {
      prevArrowStyle,
      nextArrowStyle,
      prevArrow,
      nextArrow,
      className = '',
      ...rest
    } = this.props;
    prevArrow = prevArrow || <CustomArrow customStyle={prevArrowStyle} />;
    nextArrow = nextArrow || <CustomArrow customStyle={nextArrowStyle} />;
    return (
      <LibCarousel
        ref={this.saveSlick}
        className={className}
        prevArrow={prevArrow}
        nextArrow={nextArrow}
        {...rest}
      />
    );
  }
}
