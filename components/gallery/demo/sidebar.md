---
order: 3
title: 添加侧边栏
---

可以添加添加侧边栏

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
  state = {
    open: false,
    index: 1,
    sidebarPosition: 'right',
  };

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

  handleToggleSide = () => {
    this.setState({
      sidebarPosition: this.state.sidebarPosition === 'right' ? 'left' : 'right',
    });
  };

  handleGalleryChange = (index, direction) => {
    console.log('direction: ', direction);
    this.setState({ index });
  };

  render() {
    const { index, sidebarPosition } = this.state;
    return (
      <div>
        <Button onClick={this.showGallery}>打开预览窗口</Button>
        <Button className="ml-8" onClick={this.handleToggleSide}>
          切换侧边栏
        </Button>
        <Gallery
          open={this.state.open}
          items={items}
          index={index}
          sidebarPosition={sidebarPosition}
          onChange={this.handleGalleryChange}
          onClose={this.hideGallery}
          sidebar={this.renderSideBar()}
        />
      </div>
    );
  }
  renderSideBar() {
    const { index } = this.state;

    return (
      <div style={{ width: 300, height: '100%', padding: 24, background: '#fff' }}>
        <div>{items[index].name}</div>
        <br />
        <Button ghost="solid" onClick={() => this.setState({ index: 3 })}>
          显示图片四
        </Button>
      </div>
    );
  }
}

ReactDOM.render(<App />, mountNode);
```
