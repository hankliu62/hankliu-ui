---
order: 8
title:
  zh-CN: 扩展菜单
  en-US: Context dropdown
---

## zh-CN

使用 `dropdownRender` 对下拉菜单进行自由扩展。如果你并不需要 Menu 内容，请直接使用 Popover 组件。

## en-US

Customize the dropdown menu via `dropdownRender`. If you don't need the Menu content, use the Popover component directly.

```jsx
import { Menu, Dropdown, Space, Divider, Button } from '@hankliu/hankliu-ui';
import type { MenuProps } from '@hankliu/hankliu-ui';
import { DownOutlined } from '@hankliu/icons';

const items: MenuProps['items'] = [
  {
    key: '1',
    label: (
      <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
        1st menu item
      </a>
    ),
  },
  {
    key: '2',
    label: (
      <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
        2nd menu item (disabled)
      </a>
    ),
    disabled: true,
  },
  {
    key: '3',
    label: (
      <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
        3rd menu item (disabled)
      </a>
    ),
    disabled: true,
  },
];

ReactDOM.render(
  <Dropdown
    menu={{ items }}
    dropdownRender={(menu) => (
      <div className="dropdown-content">
        {menu}
        <Divider style={{ margin: 0 }} />
        <Space style={{ padding: 8 }}>
          <Button type="primary">Click me!</Button>
        </Space>
      </div>
    )}
  >
    <a onClick={(e) => e.preventDefault()}>
      <Space>
        Hover me
        <DownOutlined />
      </Space>
    </a>
  </Dropdown>,
  mountNode,
);
```

```css
.dropdown-content {
  background: #fff;
  box-shadow: 0 3px 6px -4px rgb(0 0 0 / 12%), 0 6px 16px 0 rgb(0 0 0 / 8%),
    0 9px 28px 8px rgb(0 0 0 / 5%);
}
.dropdown-content .hlui-dropdown-menu {
  box-shadow: none;
}
```

<style>
  [data-theme="dark"] .head-example { background: #1f1f1f; }
</style>
