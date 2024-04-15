---
order: 8
title:
  zh-CN: 状态点
  en-US: Status
---

## zh-CN

用于表示状态的小圆点。

## en-US

Standalone badge with status.

```jsx
import { Badge } from '@hankliu/hankliu-ui';

ReactDOM.render(
  <>
    <Badge count={33} status="success" />
    <Badge count={2} status="error" />
    <Badge count={5} status="default" />
    <Badge count={7} status="processing" />
    <Badge count={18} status="warning" />
    <br/>
    <Badge status="success" />
    <Badge status="error" />
    <Badge status="default" />
    <Badge status="processing" />
    <Badge status="warning" />
    <br />
    <Badge status="success" text="Success" />
    <br />
    <Badge status="error" text="Error" />
    <br />
    <Badge status="default" text="Default" />
    <br />
    <Badge status="processing" text="Processing" />
    <br />
    <Badge status="warning" text="Warning" />
  </>,
  mountNode,
);
```
