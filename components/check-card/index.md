---
category: Components
subtitle: 可选卡片
type: 数据录入
title: CheckCard
---

可选卡片，用于选中卡片内的操作

## API

### 属性

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| checked | 指定当前是否选中 | boolean | false |
| disabled | 失效状态 | boolean | false |
| usable | 是否启用选择功能，当设置为 `false` 时，卡片上不会显示选择状态 | boolean | true |
| onChange | 点击时的回调函数，参数为 `!checked` | Function(checked: boolean) | - |
| type | 控制 check card 的类型，可选值 `round` `circle` | string | circle |
| border | 边框大小 | number\|boolean | 0 |
| className | 添加 className | string | - |
| style | 添加 style | object | - |


