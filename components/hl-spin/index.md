---
category: Components
type: 反馈
title: HlSpin
subtitle: 加载中
cover: https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*5mC5TomY4B0AAAAAAAAAAAAADrJ8AQ/original
---

用于页面和区块的加载中状态。

## 何时使用

页面局部处于等待异步数据或正在渲染过程时，合适的加载动效会有效缓解用户的焦虑。

## API

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| indicator | 加载指示符 | ReactElement | - |
| size | 组件大小，可选值为 `small` `default` `large` | string | 'default' |
| loading | 是否为加载中状态 | boolean | true |
| delay | 延迟关闭加载效果的时间（防止闪烁） | number (毫秒) | 500 |
| title | 当作为包裹元素时，可以自定义描述文案 | string | - |
| block | Spin 元素为块状(heigh: 100%) | boolean | false |
| className | 包装器的类属性 | string | - |
| style | 设置包装器的内联样式 | {} | - |
| coverStyle | 设置 spin 覆盖层区域的内联样式，可以在这里修改覆盖层的背景等样式 | {} | - |

### 静态方法

- `Spin.setDefaultIndicator(indicator: ReactElement)` 同上 `indicator`，你可以自定义全局默认元素
