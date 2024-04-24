---
order: 1
title: 从指定索引开始预览
---

从 index+1 张开始预览。

```jsx
import { Gallery, Button } from '@hankliu/hankliu-ui';

const items = [
  {
    name: '图片一',
    src: 'https://github.com/hankliu62/hankliu62.github.com/assets/8088864/91a13d0f-4685-411e-90bf-d8ecbec2ab56',
    title: 'picture one',
  },
  {
    name: '图片二',
    src: 'https://github.com/hankliu62/hankliu62.github.com/assets/8088864/32f9b096-6044-4b1c-a1d2-000ab8dc5c96',
    title: 'picture two',
  },
  {
    name: '图片三',
    src: 'https://github.com/hankliu62/hankliu62.github.com/assets/8088864/a226af97-f076-4c82-82d7-3a38e1438c56',
    title: 'picture three',
  },
  {
    name: '图片四',
    src: 'https://github.com/hankliu62/hankliu62.github.com/assets/8088864/c307e07b-cdea-42f8-9111-946443a98a23',
    title: 'picture four',
  },
];

class App extends React.Component {
  state = { open: false };

  showGallery = () => {
    this.setState({
      open: true,
    });
  };

  hideGallery = () => {
    this.setState({
      open: false,
    });
  };

  render() {
    return (
      <div>
        <Button theme="primary" onClick={this.showGallery}>
          点击预览第二张
        </Button>
        <Gallery open={this.state.open} items={items} index={1} onClose={this.hideGallery} />
      </div>
    );
  }
}

ReactDOM.render(<App />, mountNode);
```
