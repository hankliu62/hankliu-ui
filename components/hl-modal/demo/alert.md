---
order: 5
title:
  zh-CN: 信息提示
  en-US: Information modal dialog
---

## zh-CN

使用 `Modal.alert()` 可以进行各种类型的信息提示，只提供一个按钮用于关闭。

## en-US

In the various types of information modal dialog, only one button to close dialog is provided.

```jsx
import { HlModal as Modal, Button } from '@hankliu/hankliu-ui';

function dangerAlert() {
  Modal.alert({
    okButtonProps: {
      type: 'danger',
    },
    title: 'This is a danger alert',
    content: 'some messages...some messages...',
  });
}

function normalAlert() {
  Modal.alert({
    title: 'This is a normal alert',
    content: 'some messages...some messages...',
  });
}

ReactDOM.render(
  <div>
    <Button onClick={normalAlert}>normal alert</Button>
    <Button onClick={dangerAlert} type="danger">
      danger alert
    </Button>
  </div>,
  mountNode,
);
```
