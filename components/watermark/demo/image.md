---
order: 3
title: 水印图片
---

## zh-CN

通过 `image` 指定图片地址。为保证图片高清且不被拉伸，请设置 width 和 height, 并上传至少两倍的宽高的 logo 图片地址。

## en-US

Specify the image address via `image`. To ensure that the image is high definition and not stretched, set the width and height, and upload at least twice the width and height of the logo image address.

```jsx
import { Watermark } from '@hankliu/hankliu-ui';

ReactDOM.render(
  <Watermark height={30} width={30} image="https://hankliu62.github.io/frontend/favicon.ico">
    <div style={{ height: 500 }} />
  </Watermark>,
  mountNode,
);
```
