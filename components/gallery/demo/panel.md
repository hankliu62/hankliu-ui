---
order: 5
title: 直接渲染面板
---

通过 `Gallery.Panel` 直接渲染面板

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
  state = { index: 1 };

  handleGalleryChange = (index, direction) => {
    console.log('direction: ', direction);
    this.setState({ index });
  };

  render() {
    const { index } = this.state;
    return (
      <Gallery.Panel
        style={{ width: 600, height: 400 }}
        items={items}
        index={index}
        onChange={this.handleGalleryChange}
      />
    );
  }
}

ReactDOM.render(<App />, mountNode);
```
