---
category: Components
type: 布局
cols: 1
title: ScrollContainer
subtitle: 滚动容器
---

用于需要垂直滚动条的地方。

## 何时使用

用于需要垂直滚动条的地方，滚动条不会占用空间

## API

属性说明如下：

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| width | 设置容器的宽度 | string\|number | 100% |
| height | 设置容器的高度 | string\|number | 100% |
| maxHeight | 设置容器的最大高度，当设置了 `maxHeight` 时会忽略 `height` | number | - |
| gap | 设置容器滚动条距离容器的距离 | number | 5 |
| onScroll | scroll 回调 | function | - |
| overflow | 设置滚动的方向，默认为 `y` 当前只支持 `y` | string | y |
| indicated | 是否显示滚动指示 | boolean | false |
| className | 添加 className | string | - |
| style | 添加 style | object | - |

### 静态方法

- `ScrollContainer.getScrollbarWidth(current?: HTMLElement)` 获取 current 的滚动条宽度
> current 默认为 document.body