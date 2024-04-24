---
order: 2
title:
  zh-CN: 文本与超链接组件
  en-US: Text and Link Component
---

## zh-CN

内置不同样式的文本以及超链接组件。

## en-US

Provides multiple types of text and link.

```jsx
import { Typography, Space } from '@hankliu/hankliu-ui';

const { Text, Link } = Typography;

ReactDOM.render(
  <Space direction="vertical">
    <Text>HankLiu UI (default)</Text>
    <Text type="secondary">HankLiu UI (secondary)</Text>
    <Text type="success">HankLiu UI (success)</Text>
    <Text type="warning">HankLiu UI (warning)</Text>
    <Text type="danger">HankLiu UI (danger)</Text>
    <Text disabled>HankLiu UI (disabled)</Text>
    <Text mark>HankLiu UI (mark)</Text>
    <Text code>HankLiu UI (code)</Text>
    <Text keyboard>HankLiu UI (keyboard)</Text>
    <Text underline>HankLiu UI (underline)</Text>
    <Text delete>HankLiu UI (delete)</Text>
    <Text strong>HankLiu UI (strong)</Text>
    <Text italic>HankLiu UI (italic)</Text>
    <Link href="https://ant.design" target="_blank">
      HankLiu UI (Link)
    </Link>
  </Space>,
  mountNode,
);
```
