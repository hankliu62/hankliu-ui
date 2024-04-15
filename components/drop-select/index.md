---
category: Components
subtitle: 下拉选择
type: 数据录入
title: DropSelect
---

可弹出选择的下拉列表。

## 何时使用

需要组合 Dropdown 和 Select 时

## API

属性如下

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| value | 指定当前选中的条目 | string\|number | - |
| options | 配置选项，参考 [Option](#Option-props) | Option[] | - |
| title | 菜单标题 | string\|ReactNode | - |
| disabled | 菜单是否禁用 | boolean | - |
| getPopupContainer | 菜单渲染父节点。默认渲染到 body 上，如果你遇到菜单滚动定位问题，试试修改为滚动的区域，并相对其定位。[示例](https://codepen.io/afc163/pen/zEjNOy?editors=0010) | Function(triggerNode) | `() => document.body` |
| overlayClassName | 下拉根元素的类名称 | string | - |
| overlayStyle | 下拉根元素的样式 | object | - |
| placement | 菜单弹出位置：`bottomLeft` `bottom` `bottomRight` `topLeft` `top` `topRight` | String | `bottomLeft` |
| trigger | 触发下拉的行为, 移动端不支持 hover | Array&lt;`click`\|`hover`\|`contextMenu`> | `['hover']` |
| open | 菜单是否显示 | boolean | - |
| onOpenChange | 菜单显示状态改变时调用，参数为 open | Function(open) | - |

### Option props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| disabled | 是否禁用 | boolean | false |
| title | 选中该 Option 后，Select 的 title | string | - |
| value | 默认根据此属性值进行筛选 | string\|number | - |
| className | Option 器类名 | string | - |
