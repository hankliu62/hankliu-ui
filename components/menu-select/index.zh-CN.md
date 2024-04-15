---
category: Components
type: 数据录入
title: MenuSelect
subtitle: 菜单选择
cover: https://gw.alipayobjects.com/zos/alicdn/fNUKzY1sk/MenuSelect.svg
---

## API

### MenuSelect props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| disabled | 是否禁用 | boolean | false |
| checkable | 节点前添加 Checkbox 复选框 | boolean | true |
| type | 选择器类型，可选值 `dropdown` `input`<br/>当有 `children` 时等同 type 为 `dropdown` | string | - |
| value | （受控）选中复选框的树节点 | string\[]\|number\[] | \[] |
| defaultActiveValue | 默认展开指定的树节点 | string\[]\|number\[] | \[] |
| onChange | 点击复选框触发 | (chkValue: string[]) => void | - |
| onSelect | 点击树节点触发 | (option: Option, menuIndex: number) => void | - |
| options | 树形结构数据 | [{label: any, value: any, children: []}] | [] |
| fieldNames | 定义 option 的字段名映射；注意不要修改 value 的定义 | object | {label: 'label', value: 'value', children: 'children' } |
| className | className | string | - |
| menuColumnStyle | 下拉列表的样式, 默认maxWidth:240 | object | { maxWidth: 240 } |
| showCheckedStrategy | 定义选中项回填的方式。 | [enum](#MenuSelect-showCheckedStrategy-配置项)| MenuSelect.SHOW_ALL |

> 当 type 为 `input` 时可以设置更多的 props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| showCheckedStrategy | 定义选中项回填的方式。 | [enum](#MenuSelect-showCheckedStrategy-配置项)| MenuSelect.SHOW_CHILD |
| width | 设置选择框的宽度 | string\|number | auto |
| height | 设置选择框的高度、最小高度、最大高度或者锁定高度，[使用规则](/components/select/#Height-设置规则)和[示例](/components/select/#components-select-demo-set-height) | string\|number | auto |
| lockHeight | 是否锁定输入框的高度 | boolean | false |
| size | 选择框大小，可选 `large` `small` | string | default |
| placeholder | 选择框默认文字 | string | - |
| addonAfter | 设置后置内容，当为 `string` 类型时会使用 `Icon`  | string\|ReactNode | - |
| addonAfterClick | 点击后置内容时，调用此函数 | () => {} | - |
| allowClear | 支持清除 | boolean | false |
| dropdownClassName | 下拉菜单的 className 属性 | string | - |
| dropdownMatchSelectWidth | 下拉菜单和选择器是否同宽 | boolean | false |
| dropdownStyle | 下拉菜单的 style 属性 | object | - |
| getPopupContainer | 菜单渲染父节点。默认渲染到 body 上，如果你遇到菜单滚动定位问题，试试修改为滚动的区域，并相对其定位。[示例](https://codesandbox.io/s/4j168r7jw0) | Function(triggerNode) | () => document.body |
| showArrow | 是否显示下拉小箭头 | boolean | true |
| suffixIcon | 自定义的选择框后缀图标 | ReactNode | - |
| removeIcon | 自定义的多选框清除图标 | ReactNode | - |
| clearIcon | 自定义的多选框清空图标 | ReactNode | - |
| onDropdownVisibleChange | 展开和收起下拉菜单的回调 | (open: boolean) => void | - |
| max |可以设置最多选择几个值，不设置时不限制数量 | number | - |
| maxMessage | value 超过 max 时的提示 | string | 最多选择 `max` 个 |
| maxTagTextLength | 设置 tag 的字符限制 | number | - |
| maxTagTextLengthMessage | tag 的字符超过限制时的提示 | string | 自定义标签字符数量超出限制 |
| maxTagCount | 最多显示多少个 tag，响应式模式会对性能产生损耗 | number \| `responsive` | - | responsive: 4.10 |
| maxTagPlaceholder | 隐藏 tag 时显示的内容 | ReactNode \| function(omittedValues) => ReactNode | - |
| allowSearch | 是否支持搜索 | boolean | false |
| onSearch | 文本框值变化时回调 | function(value: string) | - |

#### MenuSelect showCheckedStrategy 配置项

- `MenuSelect.SHOW_PARENT`: 只显示父节点(当父节点下所有子节点都选中时)
- `MenuSelect.SHOW_CHILD`: 只显示子节点
- `MenuSelect.SHOW_ALL`: 显示所有选中节点(包括父节点)

