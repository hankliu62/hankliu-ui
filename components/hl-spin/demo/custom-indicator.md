---
order: 6
title:
  zh-CN: 自定义指示符
  en-US: Custom spinning indicator
---

## zh-CN

使用自定义指示符。

## en-US

Use custom loading indicator.

```jsx
import { HlSpin as Spin } from '@hankliu/hankliu-ui';
import IconLoading from '@hankliu/icons/LoadingOutlined';

const antIcon = <IconLoading style={{ fontSize: 24 }} spin />;

ReactDOM.render(
  <Spin coverStyle={{ backgroundColor: 'rgba(240,251,249,0.9)' }} indicator={antIcon} />,
  mountNode,
);
```
