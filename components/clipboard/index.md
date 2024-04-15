---
category: Components
type: 通用
title: Clipboard
subtitle: 剪切板
---

点击复制文本

## API

按钮的属性说明如下：

属性 | 说明 | 类型 | 默认值
-----|-----|-----|------
text | 需要复制的文字 | string / function | -
onSuccess | 复制成功后的回调 | function | -
options | 复制参数配置 | Options | -
tag | 渲染后的 dom tagName | string | span


### Options
属性 | 说明 | 类型 | 默认值
-----|-----|-----|------
debug | 是否输出 console | boolean | false
message | Prompt 信息(不建议使用) |  string | -
format | 复制的格式类型 | string | "text/html"


### 方法式调用
`Clipboard.copy(text, options)`

在 JS 方法中直接调用复制方法。

属性 | 说明 | 类型 | 默认值
-----|-----|-----|------
text | 复制的文案 | string | -
options | 复制参数配置 | Options | -
