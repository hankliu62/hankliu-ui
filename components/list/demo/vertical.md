---
order: 3
title:
  zh-CN: 竖排列表样式
  en-US: Vertical
---

## zh-CN

通过设置 `itemLayout` 属性为 `vertical` 可实现竖排列表样式。

## en-US

Set the `itemLayout` property to `vertical` to create a vertical list.

```jsx
import { List, Avatar, Space } from '@hankliu/hankliu-ui';
import { MessageOutlined, LikeOutlined, StarOutlined } from '@hankliu/icons';

const listData = [];
for (let i = 0; i < 23; i++) {
  listData.push({
    href: 'https://ant.design',
    title: `ant design part ${i}`,
    avatar:
      'https://github.com/hankliu62/hankliu62.github.com/assets/8088864/3ca308ec-dc8c-449a-8f80-c55f6e1f448b',
    description:
      'HankLiu UI, a design language for background applications, is refined by Ant UED Team.',
    content:
      'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
  });
}

const IconText = ({ icon, text }) => (
  <Space>
    {React.createElement(icon)}
    {text}
  </Space>
);

ReactDOM.render(
  <List
    itemLayout="vertical"
    size="large"
    pagination={{
      onChange: (page) => {
        console.log(page);
      },
      pageSize: 3,
    }}
    dataSource={listData}
    footer={
      <div>
        <b>ant design</b> footer part
      </div>
    }
    renderItem={(item) => (
      <List.Item
        key={item.title}
        actions={[
          <IconText icon={StarOutlined} text="156" key="list-vertical-star-o" />,
          <IconText icon={LikeOutlined} text="156" key="list-vertical-like-o" />,
          <IconText icon={MessageOutlined} text="2" key="list-vertical-message" />,
        ]}
        extra={
          <img
            width={272}
            alt="logo"
            src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
          />
        }
      >
        <List.Item.Meta
          avatar={<Avatar src={item.avatar} />}
          title={<a href={item.href}>{item.title}</a>}
          description={item.description}
        />
        {item.content}
      </List.Item>
    )}
  />,
  mountNode,
);
```
