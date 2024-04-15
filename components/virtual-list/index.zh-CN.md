---
category: Components
type: 布局
title: VirtualList
subtitle: 虚拟列表
---

用于大批量的列表数据展示

升级至 antd4 后改为封装`react-window`的`FixedSizeList`

需要可变高或网格类型的虚拟列表可使用[react-window](https://react-window.vercel.app/#/examples/list/fixed-size)中的其他组件

## API

属性说明如下：

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- | --- |
| itemHeight | 列表元素的高度 （作为兼容性属性存在，将于下个版本被弃用, itemSize 会覆盖此属性） | number | - |
| gap | 设置容器滚动条距离容器的距离 （作为兼容性属性存在，将于下个版本被弃用, itemSize 会覆盖此属性） | number | 5 |
| items | 列表数据 （作为兼容性属性存在，将于下个版本被弃用） | T[] | - |
| renderItem | 列表元素的渲染函数 （作为兼容性属性存在，将于下个版本被弃用， children 会覆盖此属性） | (item: T, index: number, isScrolling?: boolean) => ReactNode | - |
| width | 设置容器的宽度 | number\  | string | '100%' |
| height | 设置容器的高度 | number | - |
| onScroll | scroll 回调 | function | - |
| className | 添加 className | string | - |
| style | 添加 style | CSSProperties | - |

更多属性参考[FixedSizeList](https://react-window.vercel.app/#/api/FixedSizeList)
