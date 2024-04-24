---
order: 1
title:
  zh-CN: 根据文本判断是否显示
  en-US: Text
---

使用 `TooltipText` 可以根据文本内容自动判断是否显示 `Tooltip`

```jsx
import { TooltipText } from '@hankliu/hankliu-ui';

ReactDOM.render(
  <div>
    <TooltipText title="prompt text" style={{ width: 100 }}>
      自动显示 Tooltip 如果文本内容大于默认的宽度
    </TooltipText>
    <TooltipText title="prompt text">自动显示 Tooltip 如果文本内容大于默认的宽度</TooltipText>
  </div>,
  mountNode,
);
```
