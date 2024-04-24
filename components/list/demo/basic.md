---
order: 1
title:
  zh-CN: 基础列表
  en-US: Basic list
---

## zh-CN

基础列表。

## en-US

Basic list.

```jsx
import { List, Avatar } from '@hankliu/hankliu-ui';

const data = [
  {
    title: 'HankLiu UI Title 1',
  },
  {
    title: 'HankLiu UI Title 2',
  },
  {
    title: 'HankLiu UI Title 3',
  },
  {
    title: 'HankLiu UI Title 4',
  },
];

ReactDOM.render(
  <List
    itemLayout="horizontal"
    dataSource={data}
    renderItem={(item) => (
      <List.Item>
        <List.Item.Meta
          avatar={
            <Avatar src="https://github.com/hankliu62/hankliu62.github.com/assets/8088864/3ca308ec-dc8c-449a-8f80-c55f6e1f448b" />
          }
          title={<a href="https://ant.design">{item.title}</a>}
          description="HankLiu UI, a design language for background applications, is refined by Ant UED Team"
        />
      </List.Item>
    )}
  />,
  mountNode,
);
```
