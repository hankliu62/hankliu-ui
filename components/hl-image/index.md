---
category: Components
type: 数据展示
cols: 1
title: HlImage
subtitle: 图片
cover: https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*FbOCS6aFMeUAAAAAAAAAAAAADrJ8AQ/original
---

用于图片展示。

## 何时使用

需要使用图片时。

## API

支持图片宽、高、样式、填充比例等常用属性

图片的属性说明如下：

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| shape | 图片形状，可选 circle | string\|number | - |
| className | 类名 | string | - |
| style | 行内样式 | object | - |
| fit | 图片填充，可选 fill, contain, cover, flex [参考说明](#fit) | string | - |
| src | 图片URL | string | - |
| alt | 图片alt | string | - |
| size | 给宽高设置相同的值，该属性覆盖 width 和 height | number | - |
| width | 图片宽度 | string\|number | auto |
| height | 图片高度 | string\|number | auto |
| block | 图片 display 是否为 block | boolean | false |
| delay | 延迟关闭加载效果的时间（防止闪烁） | number (毫秒) | 500 |
| showLoading | 是否显示 loading 效果 | boolean | true |
| errorImageUrl | 加载失败时显示的图片地址 | string |  |
| errorImageStyle | 加载失败时显示的图片样式 | Style | { width: 48 } |
| onError | 图片加载失败时的回调 | (error) => void | - |
| onClick | 图片的点击事件 | (e) => void | - |
| draggable | 设置图片的 draggable 属性 | boolean | - |

### fit

使用 `fit` 时，确保设置了 `width` `height` 或者 `size`

- `fill`：拉伸图片填满容器

- `contain`：保持原有尺寸比例进行缩放，保证替换内容尺寸一定可以在容器里面放得下。因此可能会在容器内留下空白

- `cover`：保持原有尺寸比例继续缩放，保证宽度和高度至少有一个和容器一致，图片部分区域不可见

- `flex`: 在图片尺寸小于容器大小的情况下，保持原有尺寸居中显示，如果尺寸超出容器大小则使用 contain 代替

