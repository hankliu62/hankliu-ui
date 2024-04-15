---
order: 16
title:
  zh-CN: 信息提示
  en-US: Information modal dialog
---

## zh-CN

各种类型的信息提示，只提供一个按钮用于关闭。

## en-US

In the various types of information modal dialog, only one button to close dialog is provided.

```jsx
import { HlModal as Modal, Button } from '@hankliu/hankliu-ui';

function info() {
  Modal.info({
    title: 'This is a notification message',
    content: (
      <div>
        <p>some messages...some messages...</p>
        <p>some messages...some messages...</p>
      </div>
    ),
    onOk() {},
  });
}

function success() {
  Modal.success({
    title: 'This is a success message',
    content: 'some messages...some messages...',
  });
}

function error() {
  Modal.error({
    title: 'This is an error message',
    content: 'some messages...some messages...',
  });
}

function warning() {
  Modal.warning({
    title: 'This is a warning message',
    content: 'some messages...some messages...',
  });
}
function confirm() {
  Modal.confirm({
    title: 'This is a confirm message',
    content: 'some messages...some messages...',
  });
}
function alert() {
  Modal.alert({
    title: 'This is a warning message',
    content: 'some messages...some messages...',
  });
}
function delete1() {
  Modal.delete({
    title: 'This is a delete message',
    content: 'some messages...some messages...',
  });
}
ReactDOM.render(
  <div>
    <Button onClick={info} type="neutral">Info</Button>
    <Button onClick={success} type="neutral">Success</Button>
    <Button onClick={error} type="neutral">Error</Button>
    <Button onClick={warning} type="neutral">Warning</Button>
    <Button onClick={confirm} type="neutral">confirm</Button>
    <Button onClick={alert} type="neutral">alert</Button>
    <Button onClick={delete1} type="neutral">delete</Button>
  </div>,
  mountNode,
);
```
