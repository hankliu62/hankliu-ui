---
order: 7
title:
  zh-CN: 手动更新和移除
  en-US: Manual to update destroy
---

## zh-CN

手动更新和关闭 `Modal.method` 方式创建的对话框。

## en-US

Manually updateing and destroying a modal from `Modal.method`.

```jsx
import { HlModal as Modal, Button } from '@hankliu/hankliu-ui';

function countDown() {
  let secondsToGo = 5;
  const modal = Modal.alert({
    title: 'This is a notification message',
    content: `This modal will be destroyed after ${secondsToGo} second.`,
  });
  const timer = setInterval(() => {
    secondsToGo -= 1;
    modal.update({
      content: `This modal will be destroyed after ${secondsToGo} second.`,
    });
  }, 1000);
  setTimeout(() => {
    clearInterval(timer);
    modal.destroy();
  }, secondsToGo * 1000);
}

ReactDOM.render(<Button onClick={countDown}>Open modal to close in 5s</Button>, mountNode);
```
