---
order: 10
title:
  zh-CN: Block 按钮
  en-US: Block Button
---

## zh-CN

`block` 属性将使按钮适合其父宽度。

## en-US

`block` property will make the button fit to its parent width.

```jsx
import { Button } from '@hankliu/hankliu-ui';

ReactDOM.render(
  <>
    <Button block>Primary</Button>
    <Button type="secondary" block>
      Secondary
    </Button>
    <Button type="dashed" block>
      Dashed
    </Button>
    <Button type="link" block>
      Link
    </Button>
  </>,
  mountNode,
);
```
