---
order: 2
title:
  zh-CN: 自定义内容布局
  en-US: Layout
---

## zh-CN

设置内容布局，支持 `filled` 清除内 padding

## en-US

```jsx
import { HlPopover, Button } from '@hankliu/hankliu-ui';

const content = <div>由自己控制 padding</div>;

ReactDOM.render(
  <div>
    <HlPopover content={content} overlayClassName="test-ss" layout="filled">
      <Button type="primary">Layout=filled</Button>
    </HlPopover>
  </div>,
  mountNode,
);
```
