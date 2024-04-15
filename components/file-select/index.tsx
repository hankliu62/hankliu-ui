// @ts-nocheck
import * as React from 'react';
import cs from 'classnames';
import IconUpload from '@ant-design/icons/UploadOutlined';
import selectFiles, { ERRORS, validFiles } from '../_util/selectFiles';
import message from '../message';
import { getLocale } from './locale';

const SIZE_KB = 1024; // 1KB
const SIZE_MB = 1024 * 1024; // 1MB
const MAXSIZE = 10 * SIZE_MB;

export interface FileSelectProps {
  multiple?: boolean,
  drawable?: boolean,
  onSelect?: (files: any[]) => void,
  onError?: (error: string) => void,
  icon?: React.ReactNode,
  title?: string,
  subtitle?: string,
  maxsize?: number,
  maxsizeTip?: string,
  maximum?: number,
  maximumTip?: string,
  accept?: string | RegExp | Function,
  acceptTip?: string,
  className?: string,
  style?: any,
  width?: string | number,
  height?: string | number,
  disabled?: boolean,
  children?: React.ReactNode,
}

export function getFileSizeStr(size: number) {
  let sizeStr: string = '';
  if (size > SIZE_MB) {
    sizeStr = `${(size / SIZE_MB).toFixed(0)} M`;
  } else {
    sizeStr = `${(size / SIZE_KB).toFixed(0)} kb`;
  }
  return sizeStr;
}

export default class FileSelect extends React.Component<FileSelectProps, {}> {
  static SIZE_KB = SIZE_KB;

  static SIZE_MB = SIZE_MB;

  static MAXSIZE = MAXSIZE;

  static ERRORS = ERRORS;

  public static defaultProps = {
    maxsize: MAXSIZE,
    multiple: true,
    drawable: true,
  };

  constructor(props: FileSelectProps) {
    super(props);
    this.state = {};
  }

  open = () => {
    const {
      accept, maxsize, maximum, multiple, onSelect,
    } = this.props;
    selectFiles({
      accept, maxsize, maximum, multiple,
    }).then((files: any[]) => {
      if (onSelect) onSelect(files);
    }, (err: string) => this.handleError(err));
  };

  onDrop = (event: any) => {
    event.preventDefault();
    // console.log(event.dataTransfer.files);
    const files = Array.from(event.dataTransfer.files);
    // console.log(files);
    const {
      onSelect, accept, maxsize, multiple,
    } = this.props;
    let { maximum } = this.props;
    if (!multiple) maximum = 1;
    const error = validFiles(files, { accept, maxsize, maximum });
    if (error) {
      this.handleError(error);
    } else if (onSelect) onSelect(files);
  };

  onDragOver(event: any) {
    event.preventDefault();
  }

  render() {
    const {
      style = {},
      width,
      height,
      className,
      children,
      disabled,
      drawable,
    } = this.props;
    const cls: string = cs('hlui-file-select', className, {
      disabled,
    });
    if (width) style.width = width;
    if (height) style.height = height;
    let rest: any = {};
    if (!drawable) rest = { onClick: this.open };
    return (
      <div className={cls} style={style} {...rest}>
        {this.renderInner(children)}
        {this.renderInput()}
      </div>
    );
  }

  renderInput() {
    const { disabled, drawable } = this.props;
    if (disabled || !drawable) return null;
    // const inputAccept = typeof accept === 'string' ? accept : '*'
    return (
      <div className="input-wrap" onClick={this.open} onDrop={this.onDrop} onDragOver={this.onDragOver}>
        {/* <input type="file" accept={inputAccept} multiple={multiple} onChange={this.handleInput}/> */}
      </div>
    );
  }

  renderInner(children: React.ReactNode) {
    if (children) return children;
    const locale = getLocale();
    const {
      maxsize = MAXSIZE,
      icon,
      title = locale.title,
      height,
    } = this.props;
    const sizeStr: string = getFileSizeStr(maxsize);
    let iconE;
    if (icon === undefined) {
      iconE = <IconUpload />;
    } else {
      iconE = icon;
    }
    const { subtitle = locale.subtitle.replace('{maxsize}', sizeStr) } = this.props;
    return (
      <div className={cs({ 'select-box': true, 'fix-height': height })}>
        <div className="box-icon">
          {iconE}
        </div>
        <div className="box-title">
          {title}
        </div>
        <div className="box-subtitle">
          {subtitle}
        </div>
      </div>
    );
  }

  handleError(error: string) {
    const { maxsize = MAXSIZE, maximum } = this.props;
    const locale = getLocale();
    const sizeStr: string = getFileSizeStr(maxsize);
    const {
      onError,
      maxsizeTip = locale.maxsizeTip.replace('{maxsize}', sizeStr),
      maximumTip = locale.maximumTip.replace('{maximum}', maximum),
      acceptTip = locale.acceptTip,
    } = this.props;
    if (error === ERRORS.EXCEED_MAXSIZE) {
      message.error(maxsizeTip);
    } else if (error === ERRORS.EXCEED_MAXIMUM) {
      message.error(maximumTip);
    } else if (error === ERRORS.ACCEPT_FAILED) {
      message.error(acceptTip);
    }
    if (onError) onError(error);
  }
}
