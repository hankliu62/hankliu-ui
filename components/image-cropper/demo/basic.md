---
order: 0
title: 基础用法
---

图片裁剪有两种类型默认为正常裁剪 type 为 `avatar` 时 为头像裁剪

```jsx
import { Button, ImageCropper } from '@hankliu/hankliu-ui';

const AVATAR_PROPS = {
  type: 'avatar',
  // aspectRatio: 1 / 1,
  title: '头像裁剪',
  tip: (
    <div>
      <div>
        平台支持 JPG、PNG 图片格式;
        <br />
        每张图片文件请保持在 5Mb 以内
      </div>
    </div>
  ),
};
const DEFAULT_PROPS = {
  title: '图像裁剪',
  previewTitle: '此为预览图片',
  tip: (
    <div>
      <div>
        平台支持 JPG、PNG 图片格式;
        <br />
        每张图片文件请保持在 10Mb 以内
      </div>
    </div>
  ),
};
class ImageCropperDefault extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      url: 'https://github.com/hankliu62/hankliu62.github.com/assets/8088864/91a13d0f-4685-411e-90bf-d8ecbec2ab56',
    };
  }
  chooseImage = () => {
    ImageCropper.selectImage().then((img) => this.setState({ url: img.url }));
  };
  upload = (data) => {
    console.log(data);
    this.setState({
      okButtonProps: { loading: true },
    });
    setTimeout(() => {
      this.setState({
        cropperVisible: false,
        okButtonProps: { loading: false },
      });
    }, 3000);
  };
  render() {
    const { cropperProps, okButtonProps, cropperVisible, url } = this.state;
    return (
      <div>
        <ImageCropper
          {...cropperProps}
          maskClosable={false}
          url={url}
          open={cropperVisible}
          onCancel={() => this.setState({ cropperVisible: false })}
          onOk={this.upload}
          onReupload={this.chooseImage}
          okButtonProps={okButtonProps}
        />
        <Button
          className="mr-8"
          onClick={() =>
            ImageCropper.selectImage().then((img) => {
              this.setState({ url: img.url, cropperProps: DEFAULT_PROPS, cropperVisible: true });
            })
          }
        >
          裁剪图片
        </Button>
        <Button
          onClick={() =>
            ImageCropper.selectImage().then((img) => {
              this.setState({ url: img.url, cropperProps: AVATAR_PROPS, cropperVisible: true });
            })
          }
        >
          裁剪头像
        </Button>
      </div>
    );
  }
}

ReactDOM.render(<ImageCropperDefault />, mountNode);
```
