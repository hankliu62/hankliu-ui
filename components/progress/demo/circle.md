---
order: 1
title:
  zh-CN: 进度圈
  en-US: Circular progress bar
---

## zh-CN

圈形的进度。

## en-US

A circular progress bar.

```jsx
import { Progress } from '@hankliu/hankliu-ui';

ReactDOM.render(
  <>
    <Progress type="circle" percent={75} />
    <Progress type="circle" percent={70} status="exception" />
    <Progress type="circle" percent={100} />
  </>,
  mountNode,
);
```

<style>
.hlui-progress-circle-wrap,
.hlui-progress-line-wrap {
  margin-right: 8px;
  margin-bottom: 5px;
}
</style>
