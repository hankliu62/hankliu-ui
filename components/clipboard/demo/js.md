---
order: 2
title:
  zh-CN: JS 语法
  en-US: JS
---

JS 直接复制内容

```jsx
import { Clipboard, Button } from '@hankliu/hankliu-ui';

const App = () => {
  return (
    <Button
      onClick={() => {
        Clipboard.copy('复制内容');
      }}
    >
      点击复制
    </Button>
  );
};

ReactDOM.render(<App />, mountNode);
```
