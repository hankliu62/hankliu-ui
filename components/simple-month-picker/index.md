---
category: Components
type: 数据录入
title: SimpleMonthPicker
subtitle: 基础月份选择器
---

基础的月份选择器

## 何时使用

当用户需要选择月份时

## API

| 参数           | 说明                           | 类型  | 默认值 |
|----------------|-------------------------------|------|--------|
| value       | 日期               | [value](#value)    | -  |
| placeholder   | 描述输入字段预期值的提示信息                | string    | 请选择日期  |
| disableYear   | 不可选择的年份，当返回 true 时，不可点击                    | function(year: number) => boolean | - |
| disableMonth  | 不可选择的月份，当返回 true 时，不可点击 | function(month: number, year: number) => boolean | - |
| hitherto      | 是否显示至今  | boolean | false |
| block         | 当值为 true 时，显示框占整行  | boolean | false |
| startYear     | 可以选择的最早的年份  | int | 1980 |
| getTooltipContainer | 菜单渲染父节点。默认渲染到 body 上，如果你遇到菜单滚动定位问题，试试修改为滚动的区域，并相对其定位。[示例](http://codepen.io/anon/pen/xVBOVQ?editors=001) | Function(triggerNode) | () => document.body |

### value
| 参数           | 说明                           | 类型  | 默认值 |
|----------------|-------------------------------|------|--------|
| year       | 年               | number    | -  |
| month   | 月                | number    | -  |
| hitherto      | 代表至今  | boolean | false |



