---
category: Components
type: 其他
cols: 1
title: CategoryTreeSelect
subtitle: 分类树选择器
---

分类树选择器

## 何时使用

类似 TreeSelect 的选择控件，但选中父节点不会联动选中子节点，选中子节点会取消父节点的选中。注意： `TreeOption` 的 value 必须为 `string` 类型

## API

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| options | treeNodes 数据 | [TreeOption](#TreeOption)\[] | \[] |
| value | 指定当前选中的条目 | string\[] | - |
| onChange | 勾选项改变时调用此函数 | function(value) | - |
| disabled | 是否禁用 | boolean | false |
| className | 选择框的 className 属性 | string | - |
| style | 选择框的 style 属性 | object | - |
| dropdownClassName | 下拉菜单的 className 属性 | string | - |
| dropdownStyle | 下拉菜单的 style 属性 | object | - |
| needAllChildren | 值设为 true 时，onChange 的第二个参数会带上选中节点和其下所有的子节点的值 | boolean | false |
| getPopupContainer | 菜单渲染父节点。默认渲染到 body 上，如果你遇到菜单滚动定位问题，试试修改为滚动的区域，并相对其定位。 | Function(triggerNode) | () => document.body |

### TreeOption

| 参数     | 说明     | 类型                         | 默认值 |
| -------- | -------- | ---------------------------- | ------ |
| value    | 选项值   | string                       | -      |
| title    | 选项标题 | string \| ReactNode          | -      |
| children | 子选项   | [TreeOption](#TreeOption)\[] | -      |

<style>
</style>
