---
order: 2
title:
  zh-CN: 其他元素
  en-US: Other elements
---

## zh-CN

分割线和不可用菜单项。

## en-US

Divider and disabled menu item.

```jsx
import { Menu, Dropdown, Space } from '@hankliu/hankliu-ui';
import type { MenuProps } from '@hankliu/hankliu-ui';
import { DownOutlined } from '@ant-design/icons';

const items: MenuProps['items'] = [
  {
    label: (
      <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
        1st menu item
      </a>
    ),
    key: '0',
  },
  {
    label: (
      <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
        2nd menu item
      </a>
    ),
    key: '1',
  },
  {
    type: 'divider',
  },
  {
    label: '3rd menu item（disabled）',
    key: '3',
    disabled: true,
  },
];

ReactDOM.render(
  <Dropdown menu={{ items }}>
    <a onClick={e => e.preventDefault()}>
      <Space>
        Hover me
        <DownOutlined />
      </Space>
    </a>
  </Dropdown>,
  mountNode,
);
```
