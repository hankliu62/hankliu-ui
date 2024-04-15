---
order: 3
title:
  zh-CN: 不可用状态
  en-US: Disabled
---

## zh-CN

添加 `disabled` 属性即可让按钮处于不可用状态，同时按钮样式也会改变。

## en-US

To mark a button as disabled, add the `disabled` property to the `Button`.

```jsx
import { Button } from '@hankliu/hankliu-ui';

ReactDOM.render(
  <>
    <Button type="primary">Primary</Button>
    <Button type="primary" disabled>
      Primary(disabled)
    </Button>
    <br />
    <Button type="secondary">Secondary</Button>
    <Button type="secondary" disabled>Secondary(disabled)</Button>
    <br />
    <Button type="dashed">Dashed</Button>
    <Button type="dashed" disabled>
      Dashed(disabled)
    </Button>
    <br />
    <Button type="text">Text</Button>
    <Button type="text" disabled>
      Text(disabled)
    </Button>
    <br />
    <Button type="link">Link</Button>
    <Button type="link" disabled>
      Link(disabled)
    </Button>
    <br />
    <Button type="secondary" danger>Danger Secondary</Button>
    <Button type="secondary" danger disabled>
      Danger Secondary(disabled)
    </Button>
    <br />
    <Button danger type="text">
      Danger Text
    </Button>
    <Button danger type="text" disabled>
      Danger Text(disabled)
    </Button>
    <br />
    <Button type="link" danger>
      Danger Link
    </Button>
    <Button type="link" danger disabled>
      Danger Link(disabled)
    </Button>
    <div className="site-button-ghost-wrapper">
      <Button type="secondary" ghost>Ghost</Button>
      <Button type="secondary" ghost disabled>
        Ghost(disabled)
      </Button>
    </div>
  </>,
  mountNode,
);
```

```css
.site-button-ghost-wrapper {
  padding: 8px 8px 0 8px;
  background: rgb(190, 200, 200);
}
```
