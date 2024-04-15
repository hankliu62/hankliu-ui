---
order: 1
title: 设置可选的裁剪比例
---

通过 `aspectRatios` 设置可选的裁剪比例

```jsx
import { Button, ImageCropper } from "@hankliu/hankliu-ui";

const DEFAULT_PROPS = {
  // aspectRatio: 2 / 1,
  aspectRatios: [{
    title: 'free'
  }, {
    value: 1/1,
    title: '1:1'
  }, {
    value: 2/1,
    title: '2:1'
  }, {
    value: 4/3,
    title: '4:3'
  }],
  title: "图像裁剪",
  previewTitle: "此为预览图片",
  tip: (
    <div>
      <div>
        平台支持 JPG、PNG 图片格式;
        <br />
        每张图片文件请保持在 10Mb 以内
      </div>
    </div>
  )
};
class ImageCropperDefault extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      url: "https://github.com/hankliu62/hankliu62.github.com/assets/8088864/91a13d0f-4685-411e-90bf-d8ecbec2ab56"
    };
  }
  chooseImage = () => {
    ImageCropper.selectImage().then(img => this.setState({url: img.url}))
  }
  upload = (data) => {
    console.log(data)
    this.setState({
      okButtonProps: { loading: true }
    })
    setTimeout(() => {
      this.setState({
        cropperVisible: false,
        okButtonProps: { loading: false }
      })
    }, 3000)
  }
  render() {
    const { cropperProps, okButtonProps, cropperVisible, url } = this.state;
    return (
      <div>
        {cropperVisible ? (
          <ImageCropper
            {...cropperProps}
            url={url}
            open={cropperVisible}
            onCancel={() => this.setState({ cropperVisible: false })}
            onOk={this.upload}
            onReupload={this.chooseImage}
            okButtonProps={okButtonProps}
          />
        ) : null}
        <Button
        className="mr-8"
          onClick={() =>
            ImageCropper.selectImage().then(img => {
              this.setState({ url: img.url, cropperProps: DEFAULT_PROPS, cropperVisible: true })
            })
          }
        >
          裁剪图片
        </Button>
      </div>
    );
  }
}

ReactDOM.render(<ImageCropperDefault />, mountNode);
```
