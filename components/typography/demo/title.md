---
order: 1
title:
  zh-CN: 标题组件
  en-US: Title Component
---

## zh-CN

展示不同级别的标题。

## en-US

Display title in different level.

```jsx
import { Typography } from '@hankliu/hankliu-ui';

const { Title, Paragraph, Text } = Typography;

ReactDOM.render(
  <>
    <Title>h1.  HankLiu </Title>
    <Title level={2}>h2.  HankLiu </Title>
    <Title level={3}>h3.  HankLiu </Title>
    <Title level={4}>h4.  HankLiu </Title>
    <Title level={5}>h5.  HankLiu </Title>
    <Paragraph strong>Paragraph.  HankLiu </Paragraph>
    <Paragraph>Paragraph.  HankLiu </Paragraph>
    <Text strong>Text.  HankLiu </Text>
    <Text>Text.  HankLiu </Text>
  </>,
  mountNode,
);
```
