---
order: 13
title:
  zh-CN: 自定义模态的宽度
  en-US: To customize the width of modal
---

## zh-CN

使用 `width` 来设置模态对话框的宽度。

## en-US

Use `width` to set the width of the modal dialog.

```jsx
import React, { useState } from 'react';
import { HlModal as Modal, Button } from '@hankliu/hankliu-ui';

const App = () => {
  const [open, setVisible] = useState(false);
  return (
    <>
      <Button type="primary" onClick={() => setVisible(true)}>
        Open Modal of 1000px width
      </Button>
      <Modal
        title="Modal 1000px width"
        centered
        open={open}
        onOk={() => setVisible(false)}
        onCancel={() => setVisible(false)}
        width={1000}
      >
        <p>some contents...</p>
        <p>some contents...</p>
        <p>some contents...</p>
      </Modal>
    </>
  );
};

ReactDOM.render(<App />, mountNode);
```
