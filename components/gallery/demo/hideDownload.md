---
order: 2
title: 隐藏下载按钮
---

图片右上角隐藏下载按钮；另外当只有一个元素时，右上角的计数文字 和 左右切换按钮会自动隐藏

````jsx
import { Gallery, Button } from '@hankliu/hankliu-ui'

const items = [
  {
    "name": "图片一",
    "src": "https://github.com/hankliu62/hankliu62.github.com/assets/8088864/91a13d0f-4685-411e-90bf-d8ecbec2ab56",
    "title": "picture one"
  }
];

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
          download={false}
        />
      </div>

    )
  }
};

ReactDOM.render(<App />, mountNode);
````
