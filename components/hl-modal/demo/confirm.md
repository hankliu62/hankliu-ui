---
order: 3
title:
  zh-CN: 确认对话框
  en-US: Confirmation modal dialog
---

## zh-CN

使用 `Modal.confirm()` 可以快捷地弹出确认框。

## en-US

To use `Modal.confirm()` to popup a confirmation modal dialog.

````jsx
import { HlModal as Modal, Button } from '@hankliu/hankliu-ui';
import IconDelete from '@ant-design/icons/lib/icons/DeleteOutlined';

const confirm = Modal.confirm;

function showConfirm() {
  confirm({
    title: 'Do you Want to delete these items?',
    onOk() {
      console.log('OK');
    },
    onCancel() {
      console.log('Cancel');
    },
  });
}

function showConfirmWithClose() {
  confirm({
    title: 'Do you Want to delete these items?',
    content: 'this is content',
    closable: true,
    onOk() {
      console.log('OK');
    },
    onCancel() {
      console.log('Cancel');
    },
  });
}

function showDeleteConfirm() {
  confirm({
    icon: <IconDelete />,
    title: 'Are you sure delete this task?',
    content: 'Some descriptions',
    okText: 'Yes',
    type: 'error',
    cancelText: 'No',
    onOk() {
      console.log('OK');
    },
    onCancel() {
      console.log('Cancel');
    },
  });
}

ReactDOM.render(
  <div>
    <Button onClick={showConfirm}>
      Confirm
    </Button>
    <Button onClick={showConfirmWithClose}>
      有关闭按钮的 Confirm
    </Button>
    <Button onClick={showDeleteConfirm} type="danger">
      Delete
    </Button>
  </div>,
  mountNode
);
````
