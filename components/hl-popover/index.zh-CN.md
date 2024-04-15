---
category: Components
subtitle: 气泡卡片
type: 数据展示
title: HlPopover
cover: https://gw.alipayobjects.com/zos/alicdn/1PNL1p_cO/Popover.svg
---

基于 HankLiu 内部需求封装的 Popover 组件，在 Antd Popover 组件基础上添加了 layout, disabled, size 和 ghosted 参数，其余参数与用法参考 [Popover](/components/popover/) 组件。

## API

### HlPopover

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| layout | 内容布局，可选值 `filled` ，当设置为 `filled` 时忽略 `title` 并且清除内 padding| string | - |  |
| size | 大小，可选值 `large` `default` `small`，当设置了 `title` 时默认为 `large`| string | `default` |  |
| disabled | 不渲染 popover | boolean | false |  |
| ghosted | 幽灵模式，鼠标移入 Popover 内不会响应交互 | boolean | false |  |

更多属性请参考 [Tooltip](/components/tooltip/#API)。
