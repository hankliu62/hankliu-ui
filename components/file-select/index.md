---
category: Components
type: 数据录入
cols: 1
title: FileSelect
subtitle: 文件选择器
---

文件选择器，用于选择文件

## API

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| multiple | 是否支持多选 | boolean | `true` |
| drawable | 是否支持拖拽上传 | boolean | `true` |
| icon | 内部显示的 icon | string | - |
| title | 内部显示的 title | string | 上传文件 或 拖进来 |
| subtitle | 内部显示的 subtitle | string | 文件大小不超过 {maxsize} |
| maxsize | 文件的最大体积，单位 bit | number | `10 * 1024 * 1024` |
| maxsizeTip | 超过最大体积时的提示 | string | 文件大小不超过 {maxsize} |
| maximum | 文件最多可选数量，默认不限制 | number | - |
| maximumTip | 超过文件最多可选数量时的提示 | string | 最多选择 {maximum} 个文件 |
| accept | 文件类型检查 | string \| RegExp \| Function | - |
| acceptTip | 文件类型检查失败时的提示 | string | 文件格式不对 |
| disabled | 是否禁用 | boolean | `false` |
| onSelect | 选择文件后的回调 | (files) => void | - |
| onError | 错误的回调，回调的参数为 `FileSelect.ERRORS.xxx` | (error) => void | - |
| className | 添加 className | string | - |
| style | 添加 style | object | - |
| width | 设置容器的宽度 | string\|number | - |
| height | 设置容器的高度 | string\|number | - |

## 静态属性

- `FileSelect.SIZE_KB` = `1024`
- `FileSelect.SIZE_MB` = `1024 * 1024`
- `FileSelect.MAXSIZE` = `10 * 1024 * 1024`
- `FileSelect.ERRORS`
  - `FileSelect.ERRORS.EXCEED_MAXSIZE` 文件过大
  - `FileSelect.ERRORS.EXCEED_MAXIMUM` 选择的文件数量超过最大值
  - `FileSelect.ERRORS.ACCEPT_FAILED` 文件类型校验失败
  - `FileSelect.ERRORS.CANCELED` 用户取消选择

## ref 方法

- open 主动触发用户选择文件
