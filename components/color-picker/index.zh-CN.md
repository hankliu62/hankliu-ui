---
category: Components
subtitle: 颜色选择器
type: 数据录入
title: ColorPicker
---

用于选择颜色

## API

### 基础属性

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| alpha | 是否支持透明度 | boolean | false |
| allowEmpty | 是否可以选择无颜色，当开启此项时 `value` 的值为空字符代表无颜色 | boolean | false |
| type | 设置颜色选择器的类型，可选值 `gradient` `basic` | string | basic |
| onChange | 颜色发生改变时的回调 | Function(value) | - |
| value | 设置颜色值，当 `alpha` 设置为 true 时；颜色值类型为对象 | string<br/>[AlphaColorValue](#AlphaColorValue)<br/>[GradientColorValue](#GradientColorValue) | - |
| width | 设置选择器的宽度 | number | 250 |
| colors | 设置选择器的快捷选择色 | string[] | [Colors](#Colors) |
| historyColors | 设置选择器的历史颜色 | string[] | - |

#### AlphaColorValue

| 属性 | 说明 | 类型 |
| --- | --- | --- |
| r | 颜色 r 通道值，取值范围 0 - 255 | number |
| g | 颜色 g 通道值，取值范围 0 - 255 | number |
| b | 颜色 b 通道值，取值范围 0 - 255 | number |
| a | 颜色透明度，取值范围 0 - 1 | number |


#### GradientColorValue

| 属性 | 说明 | 类型 |
| --- | --- | --- |
| type | 渐变类型 | string |
| colors | 色块 | [GradientColorStopValue](#GradientColorStopValue)[] |
| angle | 渐变角度，取值范围 0 - 359 | number |

#### GradientColorStopValue

| 属性 | 说明 | 类型 |
| --- | --- | --- |
| r | 颜色 r 通道值，取值范围 0 - 255 | number |
| g | 颜色 g 通道值，取值范围 0 - 255 | number |
| b | 颜色 b 通道值，取值范围 0 - 255 | number |
| a | 颜色透明度，取值范围 0 - 1 | number |
| stop | 颜色断点，取值范围 0 - 1 | number |

#### Colors
```
['#D0021B', '#F5A623', '#F8E71C', '#8B572A', '#7ED321', '#417505', '#BD10E0', '#9013FE', '#4A90E2', '#50E3C2', '#B8E986', '#000000', '#4A4A4A', '#9B9B9B', '#FFFFFF']
```

### ColorPicker.Popover

在 [基础属性](#基础属性) 的基础上添加了以下属性

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| open | Popover 显示状态 | boolean | false |
| placement | Popover 的显示位置，可选值 top left right bottom topLeft topRight bottomLeft bottomRight leftTop leftBottom rightTop rightBottom | string | - |
| footer | 设置面板的 footer，设置为 `null` 时不显示 | ReactNode | - |
| onCancel | 点击取消按钮的回调函数，点击超出 Popover 的屏幕其他区域也会触发 | () => void | - |
| onOk | 点击确认按钮的回调函数 | () => void | - |
| cancelText | 设置取消按钮的文案 | string | 取消 |
| okText | 设置确认按钮的文案 | string | 确认 |


### 静态方法

- `ColorPicker.clearHistoryColors()` 清除历史选择的颜色
