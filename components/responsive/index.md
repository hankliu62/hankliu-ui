---
category: Components
subtitle: 响应式
type: 布局
title: Responsive
cols: 1
---

响应式组件

## 何时使用

页面需要响应式时

## API

提供了 3 个组件来支持响应式

### Responsive.Wrap

> 支持 React 标准的 DivElement 属性

容器包裹组件，用来设置左右留白；定义了左右 padding 以及最小 width

通常作为最外层组件使用，也可以用 `className="hlui-responsive-wrap"` 来代替

### Responsive.View

> 支持 React 标准的 DivElement 属性

响应式容器组件，相对页面居中显示，设置了最大宽度限制

用于 Router 级别组件，也可以用 `className="hlui-responsive-view"` 来代替

### Responsive.Box

可以通过高宽比例自适应高度的盒容器

> 更多支持参考 React 标准的 DivElement 属性

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| width | 设置宽度 | string\|number | '100%' |
| ratio | 宽高比，可通过 ratio 来自动设置高度 | number | - |
| className | 类名 | string | - |
| style | 样式 | Object | - |

> 更多支持参考 React 标准的 DivElement 属性