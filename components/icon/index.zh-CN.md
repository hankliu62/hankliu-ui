---
category: Components
subtitle: 图标
type: 通用
title: Icon
toc: false
cover: https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*PdAYS7anRpoAAAAAAAAAAAAADrJ8AQ/original
---

```__react
import NewIconDisplay from 'site/theme/template/NewIconDisplay';
ReactDOM.render(<NewIconDisplay />, mountNode);
```

## API

| 参数      | 说明                                       | 类型          | 默认值 |
| --------- | ------------------------------------------ | ------------- | ------ |
| type      | 图标类型。遵循图标的命名规范               | string        | -      |
| className | 计算后的 `svg` 类名                        | string        | -      |
| style     | 设置图标的样式，例如 `fontSize` 和 `color` | CSSProperties | -      |
| spin      | 是否有旋转动画                             | boolean       | false  |
| rotate    | 图标旋转角度（IE9 无效）                   | number        | -      |
