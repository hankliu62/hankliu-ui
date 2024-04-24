---
order: 5
title:
  zh-CN: 函数式显示 modal
  en-US: function show modal
---

使用 `Modal.show()` 可以动态的控制显示弹窗

```jsx
import { HlModal as Modal, Button } from '@hankliu/hankliu-ui';

function show() {
  const mod = Modal.show({
    title: 'Modal show',
    children: (
      <div>
        <p>some messages...some messages...</p>
        <br />
        <br />
        <Button onClick={() => mod.destroy()}>我知道了</Button>
      </div>
    ),
  });
  console.log(mod);
}

ReactDOM.render(
  <div>
    <Button onClick={show}>Show Modal</Button>
  </div>,
  mountNode,
);
```
