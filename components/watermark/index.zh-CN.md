---
category: Components
type: 反馈
title: Watermark
subtitle: 水印
cols: 1
cover: https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*wr1ISY50SyYAAAAAAAAAAAAADrJ8AQ/original
---

## 何时使用

- 页面需要添加水印标识版权时使用。
- 适用于防止信息盗用。

## API

通用属性参考：[通用属性](/docs/react/common-props)

> 自 `hankliu-ui@0.0.2` 版本开始提供该组件。

### Watermark

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| width | 水印的宽度，`content` 的默认值为自身的宽度 | number | 120 |  |
| height | 水印的高度，`content` 的默认值为自身的高度 | number | 64 |  |
| inherit | 是否将水印传导给弹出组件如 Modal、Drawer | boolean | true | 0.0.2 |
| rotate | 水印绘制时，旋转的角度，单位 `°` | number | -22 |  |
| zIndex | 追加的水印元素的 z-index | number | 9 |  |
| image | 图片源，建议导出 2 倍或 3 倍图，优先级高 (支持 base64 格式) | string | - |  |
| content | 水印文字内容 | string \| string[] | - |  |
| font | 文字样式 | [Font](#font) | [Font](#font) |  |
| gap | 水印之间的间距 | \[number, number\] | \[100, 100\] |  |
| offset | 水印距离容器左上角的偏移量，默认为 `gap/2` | \[number, number\] | \[gap\[0\]/2, gap\[1\]/2\] |  |

### Font

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| color | 字体颜色 | [CanvasFillStrokeStyles.fillStyle](https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D/fillStyle) | `rgba(0,0,0,.15)` |  |
| fontSize | 字体大小 | number | 16 |  |
| fontWeight | 字体粗细 | `normal` \| `light` \| `weight` \| number | normal |  |
| fontFamily | 字体类型 | string | sans-serif |  |
| fontStyle | 字体样式 | `none` \| `normal` \| `italic` \| `oblique` | normal |  |
| textAlign | 指定文本对齐方向 | [CanvasTextAlign](https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D/textAlign) | center | 0.0.2 |

## FAQ

### 处理异常图片水印

当使用图片水印且图片加载异常时，可以同时添加 `content` 防止水印失效（自 5.2.3 开始支持）。
