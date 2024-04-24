---
order: 5
title: 直接渲染图片组件
---

通过 `Gallery.ImagePanel` 直接渲染图片组件, [API 参考](#Gallery.ImagePanel)

```jsx
import { Gallery, Button } from '@hankliu/hankliu-ui';

const img = {
  name: '图片一',
  src: 'https://github.com/hankliu62/hankliu62.github.com/assets/8088864/91a13d0f-4685-411e-90bf-d8ecbec2ab56',
  title: 'picture one',
};

class App extends React.Component {
  render() {
    return <Gallery.ImagePanel style={{ width: 400, height: 400 }} {...img} />;
  }
}

ReactDOM.render(<App />, mountNode);
```
