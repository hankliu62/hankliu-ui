---
category: Components
subtitle: 多选框列表
type: 数据录入
title: CheckList
---

多选框列表


## API

### CheckList

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| value | 选中的值 | (string\|number)[] | - |
| options | 选项 | [Option](#Option)[] | - |
| max | 最多显示多少条 options，不设置代表全显示 | number | - |
| onChange | 变化时回调函数 | Function(value: any[], isAllChecked: boolean) | - |
| locale | 文案 | [locale](#locale) | - |
| className | 添加 className | string | - |
| style | 添加 style | object | - |
| disabled | 失效状态 | boolean | false |
| moreSelect | 设定更多选项的交互类型为 `select` | boolean | false |
| moreSelectProps | 当 `moreSelect` 为 true 时，设置更多选项 select 的属性 | object | - |

### CheckList.Group

包含👆的基础属性之外

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| title | 选项组的 title | string | - |
| subtitle | 选项组的副 title | string | - |
| defaultExpanded | 选项组是否默认展开 | boolean | true |

### CheckList.Groups
| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| value | 选中的值 | [CheckListGroupsValue](#CheckListGroupsValue) | - |
| onChange | 变化时回调函数 | Function(value: [CheckListGroupsValue](#CheckListGroupsValue)) | - |
| groups | 选项组的配置列 | [Group](#Group)[] | - |
| max | 最多显示多少条 options，不设置代表全显示 | number | - |
| locale | 文案 | [locale](#locale) | - |
| className | 添加 className | string | - |
| style | 添加 style | object | - |
| disabled | 失效状态 | boolean | false |
| defaultActiveKey | 初始化展开的选项组 key[] | string\[]\|string | 无 |
| activeKey | 当前展开的选项组的 key[] | string\[]\|string | 默认无，accordion模式下默认第一个元素 |
| accordion | 手风琴模式 | boolean | `false` |
| onCollapseChange | 选项组展开或收起触发的回调 | Function | 无 |

### CheckList.Rows
| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| value | 选中的值 | [CheckListGroupsValue](#CheckListGroupsValue) | - |
| onChange | 变化时回调函数 | Function(value: [CheckListGroupsValue](#CheckListGroupsValue)) | - |
| rows | 选项组的配置列 | [Row](#Row)[] | - |
| itemStyle | 设置全局的一级选项 style | object | - |
| subItemStyle | 设置全局的二级选项 style | object | - |
| className | 添加 className | string | - |
| style | 添加 style | object | - |
| disabled | 失效状态 | boolean | false |
| useDropdown | 是否启用 Dropdown | boolean | true |
| dropdownProps | 给下拉菜单添加属性 | [Dropdown](/components/dropdown) | - |

#### Group
| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| key | 选项组的 key | string | - |
| title | 选项组的标题 | React.Component | - |
| subtitle | 选项组的副标题 | React.Component | - |
| disabled | 失效状态 | boolean | false |
| options | 选项 | [Option](#Option)[] | - |
| max | 最多显示多少条 options，不设置代表全显示 | number | - |
| locale | 文案 | [locale](#locale) | - |
| className | 添加 className | string | - |
| style | 添加 style | object | - |
| disabled | 失效状态 | boolean | false |
| moreSelect | 设定更多选项的交互类型为 `select` | boolean | false |
| moreSelectProps | 当 `moreSelect` 为 true 时，设置更多选项 select 的属性 | object | - |

#### Row
| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| key | 选项组的 key | string | - |
| title | 选项组的标题 | React.Component | - |
| disabled | 失效状态 | boolean | false |
| options | 选项 | [Option](#Option)[] | - |
| disabled | 失效状态 | boolean | false |
| itemStyle | 选项的 style | object | - |
| subItemStyle | 二级选项的 style | object | - |

#### CheckListGroupsValue
二纬数组；一维顺序对应 `groups` 的顺序，值为此项 Group 的 value

#### Option
| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| value | 选项值 | string\|number | - |
| title | 选项标题 | React.Component | - |
| subtitle | 选项副标题 | React.Component | - |
| className | 添加 className | string | - |
| style | 添加 style | object | - |
| disabled | 失效状态 | boolean | false |

#### locale
| 参数 | 说明 | 类型 | 中文 | English |
| --- | --- | --- | --- |
| showMore | 显示更多的文案 | React.Component | 更 多 | Show More |
| hideMore | 隐藏更多的文案 | React.Component | 收 起 | Hide More |


