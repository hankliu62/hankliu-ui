---
category: Components
type: 导航
subtitle: 加载更多
title: LoadMore
---

加载更多：屏幕滚动到该组件时，会触发回调函数

## API

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| onEnter | 加载更多回调 | Function | - |
| visible | 是否可见 | boolean | true |
| disabled | 是否可用，为 `true` 时不会触发 onEnter | boolean | false |
| className | className | string | - |
| style | style | React.CSSProperties | - |
| indicator | 加载指示符 | React.ReactElement | DefaultLoadMoreIndicator |

> 更多属性请参考 [react-waypoint](https://github.com/brigade/react-waypoint)
