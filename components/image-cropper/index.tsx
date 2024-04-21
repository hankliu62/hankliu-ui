// @ts-nocheck
import * as React from 'react';
import selectFile, { ERRORS as SelectFileErrors } from '../_util/selectFile';
import IconTips from '@hankliu/icons/MessageFilled';
import HlModal from '../hl-modal';
import Button, { ButtonProps } from '../button';
import Radio from '../radio';
import Cropper, { CropperProps } from './cropper';
import message from '../message';
import LocaleReceiver from '../locale-provider/LocaleReceiver';
import { getFileSizeStr } from '../file-select';
import { getLocale } from '../file-select/locale';

enum CROPPER_TYPE {
  avatar = 'avatar',
}

enum IMAGE_TYPE {
  JPEG = 'image/jpeg',
  PNG = 'image/png',
  // webp = "image/webp" todo
}
// interface ImageCropperState {}
export interface ImageCropperProps {
  maskClosable?: boolean; // 点击蒙层是否允许关闭
  imageType?: 'jpeg' | 'png';
  encoderOptions?: number;
  open?: boolean;
  url?: string;
  aspectRatio: number; // 裁剪比例
  aspectRatios?: any[];
  title: React.ReactNode | string; // 弹窗标题
  previewTitle?: React.ReactNode | string; // 预览标题
  type?: string; // 裁剪类型「avatar」为头像裁剪
  tip?: React.ReactNode | string; // 裁剪提示
  onOk?: (data: Blob) => void; // 裁剪成功时，返回图像数据
  onCancel?: () => void; // 取消裁剪
  onReupload?: () => void; // 重新上传回调
  // 弹窗样式相关
  className?: string;
  wrapClassName?: string;
  style?: React.CSSProperties;
  cropperProps?: any;
  imgCrossOrigin?: CropperProps['imgCrossOrigin'];
  okText?: React.ReactNode | string;
  okButtonProps?: ButtonProps;
  reuploadText?: React.ReactNode | string;
  locale?: {
    errors: {
      fileNumExceeded?: string;
      fileSizeExceeded?: string;
      acceptFailed?: string;
    };
  };
}

function selectImage(options: any = {}) {
  const { accept = '.png,.jpg', maxsize = 5 * 1024 * 1024 } = options;
  return selectFile({ accept, maxsize }).then(
    (file: any) => {
      // eslint-disable-next-line no-param-reassign
      file.url = URL.createObjectURL(file);
      return file;
    },
    (err: string) => {
      const locale = getLocale();
      const sizeStr: string = getFileSizeStr(maxsize);
      const {
        maxsizeTip = locale.maxsizeTip.replace('{maxsize}', sizeStr),
        acceptTip = locale.acceptTip,
      } = options;
      if (err === SelectFileErrors.EXCEED_MAXSIZE) {
        message.error(maxsizeTip);
      } else if (err === SelectFileErrors.ACCEPT_FAILED) {
        message.error(acceptTip);
      }
      return Promise.reject(err);
    },
  );
}

export default class ImageCropper extends React.Component<ImageCropperProps, any> {
  static defaultProps = {
    // aspectRatio: 1 / 1,
    onOk: () => {},
    onCancel: () => {},
    onReupload: () => {},
  };

  static selectImage = selectImage;

  cropper?: Cropper;

  constructor(props: ImageCropperProps) {
    super(props);
    this.state = { aspectRatio: props.aspectRatio };
  }

  componentDidMount() {
    this.handleCompatibleToBlob();
  }

  handleCompatibleToBlob = () => {
    if (!HTMLCanvasElement.prototype.toBlob) {
      Object.defineProperty(HTMLCanvasElement.prototype, 'toBlob', {
        value(callback: (arg0: Blob) => void, type: any, quality: any) {
          const dataURL = this.toDataURL(type, quality).split(',')[1];
          setTimeout(() => {
            const binStr = atob(dataURL);
            const len = binStr.length;
            const arr = new Uint8Array(len);

            for (let i = 0; i < len; i++) {
              arr[i] = binStr.charCodeAt(i);
            }

            callback(new Blob([arr], { type: type || 'image/png' }));
          });
        },
      });
    }
  };

  handleOk = () => {
    const { onOk, imageType = IMAGE_TYPE.PNG, encoderOptions = 0.9 } = this.props;
    if (!(onOk && this.cropper)) return;
    const result = this.cropper.getCroppedCanvas();
    if (!result) return;
    if (result.msToBlob) {
      onOk(result.msToBlob());
    } else {
      // 判断图片类型
      // HTMLCanvasElement.toBlob()
      // 相关API  canvas.toBlob(callback, type, encoderOptions);

      if (imageType !== IMAGE_TYPE.PNG) {
        // todo 优化，支持 IMAGE_TYPE.webp
        // if(imageType == IMAGE_TYPE.webp){
        //   result.toBlob((blob: Blob) => onOk(blob), IMAGE_TYPE.webp, encoderOptions)
        // }else{

        result.toBlob((blob: Blob) => onOk(blob), IMAGE_TYPE.JPEG, encoderOptions);
        return;

        // 下载保存到本地，查看本地下载图片的大小，开发调试时候使用
        // result.toBlob((blob: Blob) => {
        //   const anchor = document.createElement('a');
        //   anchor.download = 'my-file-name.jpg'; // optional, but you can give the file a name
        //   anchor.href = URL.createObjectURL(blob);
        //   anchor.click(); // ✨ magic!
        //   URL.revokeObjectURL(anchor.href); //
        // }, IMAGE_TYPE.JPEG, encoderOptions)
        // }
      }
      result.toBlob((blob: Blob) => onOk(blob));
    }
  };

  handleRatioChange = (e: any) => {
    this.setState({ aspectRatio: e.target.value });
  };

  renderPreview = () => {
    const { type } = this.props;
    if (type === CROPPER_TYPE.avatar) {
      return this.renderAvatarPreview();
    }
    return this.renderCropperPreview();
  };

  renderAvatarPreview = () => (
    <div className="avatar-preview">
      {this.renderAvatarItem(80)}
      {this.renderAvatarItem(40)}
      {this.renderAvatarItem(30)}
    </div>
  );

  renderAvatarItem = (size: number) => (
    <div className="avatar-item">
      <div className="item-preview" style={{ width: size, height: size }} />
      <br />
      <span className="avatar-item-size">
        {size}
        px
      </span>
    </div>
  );

  renderCropperPreview = () => {
    const { previewTitle } = this.props;
    const { aspectRatio = 1 } = this.state;
    return (
      <div className="cropper-preview">
        {previewTitle ? <div className="preview-title">{previewTitle}</div> : null}
        <div
          className="item-preview"
          style={{
            width: 208,
            height: 208 / aspectRatio,
          }}
        />
      </div>
    );
  };

  renderRatioControls() {
    const { aspectRatio, aspectRatios } = this.props;
    if (!aspectRatios) return null;
    return (
      <div className="cropper-ratio-controls">
        <Radio.Group onChange={this.handleRatioChange} defaultValue={aspectRatio} size="small">
          {aspectRatios.map((item: any, idx: number) => (
            // eslint-disable-next-line react/no-array-index-key
            <Radio.Button key={idx} value={item.value}>
              {item.title}
            </Radio.Button>
          ))}
        </Radio.Group>
      </div>
    );
  }

  renderFooter = (locale: any) => {
    const { onReupload, okText, okButtonProps = {}, reuploadText } = this.props;
    okButtonProps.width = okButtonProps.width || 100;
    return (
      <div className="hlui-image-cropper-btn">
        <Button ghost="text" onClick={onReupload}>
          {reuploadText || locale.reuploadText}
        </Button>
        <Button {...okButtonProps} onClick={this.handleOk}>
          {okText || locale.okText}
        </Button>
      </div>
    );
  };

  render() {
    const {
      title,
      onCancel,
      className,
      tip,
      // aspectRatio,
      type,
      wrapClassName,
      style,
      open,
      url,
      cropperProps,
      imgCrossOrigin,
      maskClosable,
    } = this.props;
    const width = type === CROPPER_TYPE.avatar ? 450 : 400;
    const { aspectRatio } = this.state;
    const props: any = {
      aspectRatio,
      guides: false,
      preview: '.hlui-image-cropper .item-preview',
      VIEWMODE: 1,
      DRAGMODE: 'move',
      ...cropperProps,
    };
    // 默认头像剪切的尺寸为 1/1
    if (type === CROPPER_TYPE.avatar && aspectRatio === undefined) {
      props.aspectRatio = 1;
    }
    return (
      <HlModal
        maskClosable={maskClosable}
        footer={null}
        open={open}
        scroll=""
        centered
        full={false}
        layout="filled"
        className={className}
        wrapClassName={wrapClassName}
        style={style}
        onCancel={onCancel}
      >
        <div className="hlui-image-cropper">
          <div className="hlui-image-cropper-header">{title}</div>
          <div className="hlui-image-cropper-content">
            <div
              className="hlui-cropper-wrap-box"
              style={{
                height: type === CROPPER_TYPE.avatar ? width : width * 0.75,
                width,
              }}
            >
              <Cropper
                ref={(ref: Cropper) => {
                  this.cropper = ref;
                }}
                url={url}
                imgCrossOrigin={imgCrossOrigin}
                cropperProps={props}
              />
            </div>
            <div className="hlui-cropper-preview">
              {this.renderPreview()}
              {this.renderRatioControls()}
            </div>
          </div>
          <div className="hlui-image-cropper-footer">
            <div className="hlui-image-cropper-tips-wrap">
              <IconTips />
              <div className="hlui-image-cropper-tips">{tip}</div>
            </div>
            <LocaleReceiver componentName="ImageCropper">{this.renderFooter}</LocaleReceiver>
          </div>
        </div>
      </HlModal>
    );
  }
}
