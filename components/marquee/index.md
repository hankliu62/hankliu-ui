---
category: Components
subtitle: 跑马灯
type: 数据展示
title: Marquee
---

跑马灯组件，循环滚动

## API

- 组件的 `children` 应当是静态的
- 组件的 `shouldComponentUpdate` 生命周期始终返回 `false`，当组件需要更新时，请重新渲染该组件

### Marquee props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| direction | 播放方向，可选值 `horizontal` `vertical` 默认为横向滚动 | string | horizontal |
| duration | 播放时长，单位 ms<br/>横向滚动时，播放时长指容器右边的内容滚动到左边的时间<br/>纵向滚动时，播放时长指容器每一行内容停留时长 | number | 3000 |
| width | 容器宽度 | number\|string | 100% |
| height | 容器高度，**如果内容为文本时，应当设置高度为行高** | number\|string | 100% |
| className | 输入框大小 | string |  |
| style | 容器样式 | object |  |

### Marquee 静态属性

- `Marquee.HORIZONTAL` horizontal
- `Marquee.VERTICAL` vertical
