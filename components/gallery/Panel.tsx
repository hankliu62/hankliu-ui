// @ts-nocheck
import React from 'react';
import cs from 'classnames';
import IconLeft from '@hankliu/icons/LeftOutlined';
import IconRight from '@hankliu/icons/RightOutlined';
import IconDownload from '@hankliu/icons/DownloadOutlined';
import IconShut from '@hankliu/icons/ShrinkOutlined';
import getFileName from '../_util/getFileName';
import _downloadFile from '../_util/downloadFile';
import Image from './Image';
import Video from './Video';

export interface GalleryProps {
  open?: boolean;
  width?: number | string;
  height?: number | string;
  style?: any;
  className?: string;
  index?: number;
  items: any[];
  sidebar?: React.ReactNode;
  options?: any;
  download?: boolean;
  showCount?: boolean;
  downloadFile?: (src: string, name: string) => void;
  onClose?: () => void;
  onChange?: (index: number, des: string) => void;
}

const MAXIMUM = 5;

export default class Gallery extends React.Component<any, any> {
  static defaultProps = {
    closeable: false,
    index: 0,
    download: true,
    showCount: true,
  };

  constructor(props: any) {
    super(props);
    this.state = {
      current: props.index,
    };
  }

  componentDidUpdate(prevProps: any) {
    const { index } = this.props;
    const { current } = this.state;
    if (index !== prevProps.index && index !== current) {
      this.setState({ current: index });
    }
  }

  prev = () => {
    let { current } = this.state;
    const { items, onChange } = this.props;
    if (current > 0) {
      current--;
    } else {
      current = items.length - 1;
    }
    onChange && onChange(current, 'prev');
    this.setState({ current });
  };

  next = () => {
    let { current } = this.state;
    const { items, onChange } = this.props;
    if (current < items.length - 1) {
      current++;
    } else {
      current = 0;
    }
    onChange && onChange(current, 'next');
    this.setState({ current });
  };

  download = () => {
    const { current } = this.state;
    const { items, downloadFile } = this.props;
    const item = items[current];
    if (!item) return;
    if (downloadFile) {
      downloadFile(item.src, item.name || getFileName(item.src));
    } else {
      _downloadFile && _downloadFile(item.src, item.name || getFileName(item.src));
    }
  };

  renderItem = (item: any) => {
    const { current } = this.state;
    const { type, component } = item;
    let _item: any = null;
    if (type === 'custom') {
      _item = component;
    } else if (type === 'video') {
      _item = <Video {...item} />;
    } else {
      _item = <Image {...item} />;
    }
    return (
      <div key={item._index} className={`gallery-item ${current === item._index ? 'active' : ''}`}>
        {_item}
      </div>
    );
  };

  render() {
    const {
      width,
      height,
      style = {},
      className,
      items,
      showCount,
      onClose,
      download,
      closeable,
    } = this.props;
    const { current } = this.state;
    let _prev = null;
    if (current !== 0 && items.length > 1) {
      _prev = (
        <div className="gallery-prev-arrow" onClick={this.prev}>
          <IconLeft />
        </div>
      );
    }
    let _next = null;
    if (items.length > 1 && current < items.length - 1) {
      _next = (
        <div className="gallery-next-arrow" onClick={this.next}>
          <IconRight />
        </div>
      );
    }
    if (width) style.width = width;
    if (height) style.height = height;
    return (
      <div className={cs('hlui-gallery', className)} style={style}>
        <div className="gallery-head">
          {showCount && this.renderCount()}
          <div className="head-title">{items[current] && items[current].title}</div>
          {download ? (
            <div className="head-action" onClick={this.download}>
              <IconDownload />
            </div>
          ) : null}
          {closeable ? (
            <div onClick={onClose} className="head-action action-close">
              <IconShut />
            </div>
          ) : null}
        </div>
        {_prev}
        {getMaxItems(items, current, MAXIMUM).map(this.renderItem)}
        {_next}
      </div>
    );
  }

  renderCount() {
    const { items } = this.props;
    const { current } = this.state;
    if (items.length === 1) return null;
    return (
      <div className="head-count">
        <span className="head-text">{current + 1}</span>
        <span className="head-gap">/</span>
        <span className="">{items.length}</span>
      </div>
    );
  }
}

function getMaxItems(items: any[], current: number, maximum: number) {
  items.forEach((item: any, idx: number) => (item._index = idx));
  const num = Math.ceil((maximum - 1) / 2);
  let start = current - num;
  if (start < 0) start = 0;
  let end = current + num + 1;
  if (end > items.length) end = items.length;
  return items.slice(start, end);
}
