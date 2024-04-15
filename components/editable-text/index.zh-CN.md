---
category: Components
subtitle: 可编辑文本
type: 数据录入
title: EditableText
---
使一段文本具有可编辑模式

## 何时使用

需要使一段文本具有可编辑模式

## API

可编辑文本，参考[示例](#components-input-demo-text)

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| controlled | 是否受控, 受控模式 onChange 会在输入框值变化时调用；非受控模式下 onChange 仅在输入框失去焦点或按下 Enter 键时触发，如果设置了 onInputBlur，则 onChange 不会触发，通过 onInputBlur 来获取输入框的值。(推荐使用受控模式)| boolean | false |
| value | 值 | string | - |
| autoSelect | 点击编辑按钮后，是否自动选择输入框的内容 | boolean | true |
| onChange | 值变化时的回调，输入模式下鼠标失去焦点或按下 `Enter` 键时触发 | function(value) | - |
| onInputBlur | 输入模式下鼠标失去焦点或按下 `Enter` 键时的回调，如果定义了该回调函数，非受控模式下 onChange 不会触发，另外在失去焦点时会根据该返回结果来切换编辑状态 [案例参考](#components-editable-text-demo-text) | function(e) => boolean \| Promise | - |
| onInputFocus | 失去焦点时触发| function(e) => void | - |
| max | 最多输入的字符长度 | number | - |
| fixedValueWidth | 值的长度是否和组件的长度一致，默认长度为 auto | boolean | false |
| placeholder | 设置 placeholder | string | '请输入' |
| style | 样式 | object | - |
| className | className | string | - |
