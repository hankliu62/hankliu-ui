---
category: Components
cols: 1
type: 数据展示
title: HlTable
subtitle: 表格
cover: https://gw.alipayobjects.com/zos/alicdn/f-SbcX2Lx/Table.svg
---

基于 HankLiu 内部需求封装的 Table 组件，在 Antd Table 组件基础上添加了 onScrollEnd 和 bottomOffset 参数，其余参数与用法参考 [Table](/components/table/) 组件。

## API

### Table

| 参数         | 说明                                 | 类型       | 默认值 | 版本 |
| ------------ | ------------------------------------ | ---------- | ------ | ---- |
| onScrollEnd  | 滚动到底部时触发的方法               | () => void | -      |      |
| bottomOffset | onScrollEnd 触发时, 滚动到底部的偏移 | number     | 0      |      |
