---
order: 4
title: 多行文字水印
---

## zh-CN

通过 `content` 设置 字符串数组 指定多行文字水印内容。

## en-US

Use `content` to set a string array to specify multi-line text watermark content.

```jsx
import { Watermark } from '@hankliu/hankliu-ui';

ReactDOM.render(
  <Watermark content={['Hank Liu UI', 'Happy Working']}>
    <div style={{ height: 500 }} />
  </Watermark>,
  mountNode,
);
```
