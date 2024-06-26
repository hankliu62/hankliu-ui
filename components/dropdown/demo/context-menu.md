---
order: 8
title:
  zh-CN: 右键菜单
  en-US: Context Menu
---

## zh-CN

默认是移入触发菜单，可以点击鼠标右键触发。

## en-US

The default trigger mode is `hover`, you can change it to `contextMenu`.

```jsx
import { Menu, Dropdown } from '@hankliu/hankliu-ui';

const items: MenuProps['items'] = [
  {
    label: '1st menu item',
    key: '1',
  },
  {
    label: '2nd menu item',
    key: '2',
  },
  {
    label: '3rd menu item',
    key: '3',
  },
];

ReactDOM.render(
  <Dropdown menu={{ items }} trigger={['contextMenu']}>
    <div
      className="site-dropdown-context-menu"
      style={{
        textAlign: 'center',
        height: 200,
        lineHeight: '200px',
      }}
    >
      Right Click on here
    </div>
  </Dropdown>,
  mountNode,
);
```

```css
.site-dropdown-context-menu {
  color: #777;
  background: #f7f7f7;
}
```

<style>
  [data-theme="dark"] .site-dropdown-context-menu {
    background: #141414;
    color: rgba(255,255,255,.65);
  }
</style>
