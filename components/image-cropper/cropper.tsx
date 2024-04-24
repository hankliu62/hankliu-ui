import * as React from 'react';
import Cropper from 'cropperjs';
import { ImgHTMLAttributes } from 'react';
import 'cropperjs/dist/cropper.css';

interface CropperState {}
export interface CropperProps {
  url?: string;
  cropperProps?: any;
  imgCrossOrigin?: ImgHTMLAttributes<HTMLImageElement>['crossOrigin'];
}

export default class ImageCropper extends React.Component<CropperProps, CropperState> {
  static defaultProps = {
    // aspectRatio: 1 / 1,
    onOk: () => {},
    onCancel: () => {},
  };

  cropper?: any;

  cropperView?: HTMLImageElement;

  constructor(props: CropperProps) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.renderCropper();
  }

  componentWillUnmount() {
    if (this.cropper) {
      // Destroy the cropper, this makes sure events such as resize are cleaned up and do not leak
      this.cropper.destroy();
      delete this.cropper;
      delete this.cropperView;
    }
  }

  componentDidUpdate(pp: CropperProps) {
    const { url, cropperProps } = this.props;
    if (!(this.cropper && url)) return;
    const _ratio = pp.cropperProps.aspectRatio;
    const { aspectRatio } = cropperProps;
    if (pp.url !== url) {
      this.cropper.reset().clear().replace(url);
    }
    if (_ratio !== aspectRatio) {
      if (aspectRatio === undefined) {
        this.cropper.destroy();
        this.renderCropper();
      } else {
        this.cropper.setAspectRatio(aspectRatio);
      }
    }
  }

  getCroppedCanvas = () => {
    return this.cropper && this.cropper.getCroppedCanvas();
  };

  renderCropper = () => {
    const { cropperProps } = this.props;
    const props: any = {
      guides: false,
      VIEWMODE: 1,
      DRAGMODE: 'move',
      ...cropperProps,
    };
    if (this.cropperView) {
      this.cropper = new Cropper(this.cropperView, {
        ...props,
      });
    }
  };

  render() {
    const { url, imgCrossOrigin } = this.props;
    return (
      <img
        alt="cropperView"
        style={{ display: 'none' }}
        src={url}
        crossOrigin={imgCrossOrigin}
        ref={(ref: HTMLImageElement) => {
          this.cropperView = ref;
        }}
      />
    );
  }
}
