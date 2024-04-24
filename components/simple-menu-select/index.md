---
category: Components
type: 其他
cols: 1
title: SimpleMenuSelect
subtitle: 基础菜单树选择器
cover: https://gw.alipayobjects.com/zos/alicdn/Ax4DA0njr/TreeSelect.svg
---

基础菜单树选择器

## 何时使用

类似 SimpleTreeSelect 的选择控件，可选择的数据结构是一个树形结构时，可以使用 SimpleMenuSelect，例如公司层级、学科系统、分类目录等等。

## API

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| options | treeNodes 数据 | [TreeOption](#TreeOption)\[] | \[] |
| value | 指定当前选中的条目 | string\[]\|number\[] | - |
| onChange | 勾选项改变时调用此函数 | function(value, title) | - |
| defaultUnfoldAll | 是否默认展开全部层级 | boolean | false |
| dropdownMatchSelectWidth | 下拉菜单和选择器同宽 | boolean | true |
| className | 选择框的 className 属性 | string | - |
| style | 选择框的 style 属性 | object | - |
| dropdownClassName | 下拉菜单的 className 属性 | string | - |
| dropdownStyle | 下拉菜单的 style 属性 | object | - |
| dropdownContentClassName | 下拉菜单内部内容的 className 属性 | string | - |
| dropdownContentStyle | 下拉菜单内部内容的 style 属性 | object | - |
| getPopupContainer | 菜单渲染父节点。默认渲染到 body 上，如果你遇到菜单滚动定位问题，试试修改为滚动的区域，并相对其定位。 | Function(triggerNode) | () => document.body |
| onAlphabetClick | 点击字母筛选列中的字母时触发, 需要返回要滚动到的第几项(0 为第一项)，不配置此项时不显示字母筛选列 | (alphabet: string) => number | - |
| showChildSelectedCount | 是否显示选中的子节点的数量 | boolean | false |
| placeholder |  | boolean | false |

### TreeOption

| 参数      | 说明               | 类型                         | 默认值 |
| --------- | ------------------ | ---------------------------- | ------ |
| value     | 选项值             | string \| number             | -      |
| title     | 选项标题           | string \| ReactNode          | -      |
| children  | 子选项             | [TreeOption](#TreeOption)\[] | -      |
| disabled  | 是否禁用该选项     | boolean                      | false  |
| checkable | 设置选项是否可勾选 | boolean                      | true   |

<style>
</style>
