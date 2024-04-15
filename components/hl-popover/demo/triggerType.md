---
order: 1
title:
  zh-CN: 三种触发方式
  en-US: Three ways to trigger
---

## zh-CN

鼠标移入、聚集、点击。

## en-US

Mouse to click, focus and move in.

```jsx
import { HlPopover, Button } from '@hankliu/hankliu-ui';

const content = (
  <div>
    <p>Content</p>
    <p>Content</p>
  </div>
);

ReactDOM.render(
  <div>
    <HlPopover content={content} title="Title" trigger="hover">
      <Button>Hover me</Button>
    </HlPopover>
    <HlPopover content={content} title="Title" trigger="focus">
      <Button>Focus me</Button>
    </HlPopover>
    <HlPopover content={content} title="Title" trigger="click">
      <Button>Click me</Button>
    </HlPopover>
  </div>,
  mountNode,
);
```
