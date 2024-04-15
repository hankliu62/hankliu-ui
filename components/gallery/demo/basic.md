---
order: 0
title: 基本
---

包含 4 种类型的媒体预览效果

````jsx
import { Gallery, Button } from '@hankliu/hankliu-ui';
import video from './video/2.mp4';

const items = [{
  src: "https://github.com/hankliu62/hankliu62.github.com/assets/8088864/91a13d0f-4685-411e-90bf-d8ecbec2ab56",
  title: "picture demo",
  onStyleChange(style) {
    console.log(style)
  }
}, {
  type: 'video',
  title: "video demo",
  src: video
}, {
  type: 'virtual-image',
  w: 960,
  h: 720,
  component: <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#f8f8f8', width: 960, height: 720 }}>会保留图片类型的交互功能，如放大、缩小等</div>,
  title: "virtual image demo",
}, {
  type: 'custom',
  title: "custom component",
  component: <div style={{ width: '100%', height: '100%', backgroundColor: '#3cc8b4' }}></div>
}];

class App extends React.Component {
  state = { open: false }

  showGallery = () => {
    this.setState({
      open: true
    });
  }

  hideGallery = () => {
    this.setState({
      open: false
    });
  }

  render() {
    return (
      <div>
        <Button theme="primary" onClick={this.showGallery}>点击预览</Button>
        <Gallery
          open={this.state.open}
          items={items}
          index={0}
          onClose={this.hideGallery}
        />
      </div>
    )
  }
};

ReactDOM.render(<App />, mountNode);
````
