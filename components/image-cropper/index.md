---
category: Components
type: 数据录入
cols: 1
title: ImageCropper
subtitle: 图像裁剪器
---

图像裁剪器用于裁剪一个图片。

## 何时使用

当需要对图片进行裁剪编辑时，可以使用该组件。

## API

按钮的属性说明如下：

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| open | 裁剪弹窗是否可见 | boolean | - |
| url | 需要裁剪的图片 | string | - |
| type | 设置图像裁剪预览方式， `avatar` 为头像裁剪预览，可选值为 `avatar` 或者不设 | string | - |
| title | 裁剪弹窗的标题 | string/ReactNode | - |
| previewTitle | 设置预览的标题（头像预览时不显示） | string/ReactNode | - |
| tip | 裁剪弹窗 footer 上的提示 | string/ReactNode | - |
| aspectRatio | 裁剪的宽高比例，宽/高；值为 `undefined` 时为自由比例 | number | - |
| aspectRatios | 设置可选的裁剪比例列表 | [Ratio](#Ratio)[] | - |
| onOk | 完成裁剪时的回调 | `(v:Blob) => void` | - |
| onCancel | 取消选择文件或关闭弹窗时的回调 | `() => void` | - |
| onReupload | 点击重新上传的回调 | `() => void` | - |
| className | 给弹窗添加 className | string | - |
| wrapClassName | 给弹窗外层容器的添加 className | string | - |
| style | 给弹窗添加 style | object | - |
| cropperProps | 设置 Cropper 的 props，可以不设 | object | - |
| okText | 设置确认按钮的文案 | React.ReactNode | 确 认 |
| okButtonProps | 设置确认按钮的属性 | [Button](#Button) | - |
| reuploadText | 设置重新上传的文案 | React.ReactNode | 重新上传 |
| imageType | 设置上传的图片类型格式，,可选值为 `jpeg`,`png`，或者不设 | string | `png` |
| encoderOptions | 设置上传图片压缩的质量，可选值区间从 `0` 到 `1`,或者不设 | number | `0.9` |
| maskClosable | 点击弹窗蒙层是否允许关闭 | boolean | `true` |
| imgCrossOrigin | 为内部传入 Cropper 的 img 元素设置 crossOrigin 属性，以避免 Cropper 请求图片时在 url 上添加时间戳 <br/>相关文档 https://github.com/fengyuanchen/cropperjs#checkcrossorigin | boolean | `true` |

### Ratio

| 属性  | 说明                                                 | 类型   | 默认值 |
| ----- | ---------------------------------------------------- | ------ | ------ |
| title | 标题                                                 | string | -      |
| value | 裁剪的宽高比例，宽/高；值为 `undefined` 时为自由比例 | number | -      |

### ImageCropper.selectImage

静态方法，获取图片文件

| 属性       | 说明               | 类型   | 默认值            |
| ---------- | ------------------ | ------ | ----------------- |
| accept     | 文件格式           | string | '.png,.jpg'       |
| maxsize    | 文件大小           | number | 5 \* 1024 \* 1024 |
| maxsizeTip | 文件太大的提示     | string | 默认会随语言切换  |
| acceptTip  | 文件类型错误的提示 | string | 默认会随语言切换  |

```
ImageCropper.selectImage().then(img => {
  // 返回的 img 里附加 url 属性
  // img.url 用来作为 ImageCropper 的 url 参数
})
```
