---
category: Components
subtitle: 标签输入框
type: 数据录入
title: TagInput
---

标签输入框，用于输入或编辑标签，通过粘贴智能生成标签
> 支持从表格复制数据粘贴后自动生成标签

## API

### TagInput props

| 参数                      | 说明                  | 类型 | 默认值 |
|-------------------------|---------------------| --- | --- |
| max                     | 设置最多选择几个值，不设置时不限制数量 | number | - |
| maxMessage              | value 超过 max 时的提示   | string | 最多选择 `max` 个 |
| maxTagTextLength        | 设置 tag 的字符限制        | number | - |
| maxTagTextLengthMessage | tag 的字符超过限制时的提示     | string | 自定义标签字符数量超出限制 |
| maxTagCount             | 最多显示多少个 tag         | number | - |
| maxTagPlaceholder       | 隐藏 tag 时显示的内容       | ReactNode/function(omittedValues) | - |
| style                   | 设置选择框的样式            | object | - |
| className               | 选择框的 className 属性   | string | - |
| placeholder             | 选择框默认文字             | string | - |
| autoFocus               | 默认获取焦点              | boolean | false |
| onBlur                  | 失去焦点的时回调            | function | - |
| onFocus                 | 获得焦点时回调             | function | - |
| onMouseEnter            | 鼠标移入时回调             | function | - |
| onMouseLeave            | 鼠标移出时回调             | function | - |
| tokenSeparators         | 自动分词的分隔符            | string[] | - |
| wrapClass               | 最外层类名               | string[] | - |
| wrapStyle               | 最外层样式               | CSSProperties | - |

封装自`Select`,更多参数可参考Select组件参数

### 静态方法

- TagInput.getHeight(rows, size)
  根据选项的列数和组件的 size 来计算高度
  - rows 设置选项的列数，默认为 1
  - size 可选值 `small` `default` `large` 默认为 `default`
