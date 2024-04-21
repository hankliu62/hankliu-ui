---
order: 1
title:
  zh-CN: 类型
  en-US: Type
---

## zh-CN

支持三种类型：图片、Icon 以及字符，其中 Icon 和字符型可以自定义图标颜色及背景色。

## en-US

Image, Icon and letter are supported, and the latter two kinds of avatar can have custom colors and background colors.

```tsx
import { Avatar } from '@hankliu/hankliu-ui';
import { UserOutlined } from '@hankliu/icons';

ReactDOM.render(
  <>
    <Avatar icon={<UserOutlined />} />
    <Avatar>U</Avatar>
    <Avatar size={40}>USER</Avatar>
    <Avatar src="https://github.com/hankliu62/hankliu62.github.com/assets/8088864/3ca308ec-dc8c-449a-8f80-c55f6e1f448b" />
    <Avatar style={{ color: '#f56a00', backgroundColor: '#fde3cf' }}>U</Avatar>
    <Avatar style={{ backgroundColor: '#87d068' }} icon={<UserOutlined />} />
  </>,
  mountNode,
);
```

<style>
#components-avatar-demo-type .hlui-avatar {
  margin-top: 16px;
  margin-right: 16px;
}
.hlui-row-rtl #components-avatar-demo-type .hlui-avatar {
  margin-right: 0;
  margin-left: 16px;
}
</style>
