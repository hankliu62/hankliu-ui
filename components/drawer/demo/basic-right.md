---
order: 0
title:
  zh-CN: 基础抽屉
  en-US: Basic
---

## zh-CN

基础抽屉，点击触发按钮抽屉从右滑出，点击遮罩区关闭。

## en-US

Basic drawer.

```tsx
import React, { useState } from 'react';
import { Drawer, Button } from '@hankliu/hankliu-ui';

const App: React.FC = () => {
  const [open, setVisible] = useState(false);
  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };
  return (
    <>
      <Button type="primary" onClick={showDrawer}>
        Open
      </Button>
      <Drawer title="Basic Drawer" placement="right" onClose={onClose} open={open}>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
    </>
  );
};

ReactDOM.render(<App />, mountNode);
```

<style>
[data-theme='compact'] .hlui-drawer-body p {
  margin-bottom: 0;
}
</style>
