---
order: 0
title: 默认用法
---

直接传递需要复制的文字

```jsx
import { Clipboard, Button, message } from '@hankliu/hankliu-ui';

function getText() {
  return '复制了个函数，哈哈哈~~~';
}

ReactDOM.render(
  <div>
    <Clipboard text={getText}>
      <div>点击复制</div>
    </Clipboard>
    <br />
    <br />
    <div>
      <Clipboard
        text="你点击了一下按钮，但是什么都没有得到，哈哈哈~~~"
        onSuccess={() => {
          message.success('复制成功');
        }}
      >
        <Button>点击复制</Button>
      </Clipboard>
    </div>
  </div>,
  mountNode,
);
```
