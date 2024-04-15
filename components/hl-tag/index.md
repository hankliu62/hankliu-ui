---
category: Components
subtitle: 标签
type: 数据展示
cols: 1
title: HlTag
---

进行标记和分类的小标签。

## 何时使用

- 用于标记事物的属性和维度。
- 进行分类。

## API

### Tag

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| className | 给标签增加类名 | string | - |
| style | 直接更改最外层标签的样式 | React.CSSProperties | - |
| type | 标签类型, 可选值：`default` `simple` `heavy` | string | default |
| size | 标签大小, 可选值：`default` `middle` `small` | string | default |
| ellipsis | 超出最大长度的文字显示为省略号 | boolean | `false` |
| ellipsisPopoverProps | 设置超出最大长度的文字的 Popover 属性 | Popover |  |
| maxWidth | 标签的最大宽度 | string | 无, ellipsis 为 true 时默认为 100% |
| closable | 标签是否可以关闭 | boolean | `false` |
| onClose | 关闭时的回调 | (e) => void | 无 |
| visible | 是否显示标签 | boolean | 无 |

### Tag.CheckableTag

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| className | 给标签增加类名 | string | `undefined`|
| size | 标签大小, 可选值：`default` `middle` `small` | string | default |
| checked | 设置标签的选中状态 | boolean | false |
| maxWidth | 标签的最大宽度 | string | 无, ellipsis 为 true 时默认为 100% |
| ellipsis | 超出最大长度的文字显示为省略号 | boolean | `false` |
| onChange | 点击标签时触发的回调 | (checked) => void | 无 |

### Tag.StatusTag

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| className | 给标签增加类名 | string | - |
| status | 标签的状态，可选值 `error` `fail` `warn` `progress` `success` | string | `success` |
| size | 标签大小，可选值：`default` `middle` `small` | string | `small` |
| ghost | 设置标签背景样式，可选值：`default` `true` `half` | string | `default` |
| style | 标签的样式 | React.CSSProperties | - |
