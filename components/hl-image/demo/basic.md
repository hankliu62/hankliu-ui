---
order: 0
title:
  zh-CN: 基础用法
  en-US: Basic
---

## zh-CN

图片展示

## en-US

```jsx
import { HlImage as Image, Tooltip, Button } from '@hankliu/hankliu-ui';

class BasicImage extends React.Component {
  state = {
    src: 'https://www.apple.com/v/macbook-pro/t/images/overview/display/display_hw_large.png',
  };
  changeImage = () => {
    this.setState({ src: 'http://127.0.0.1:5089/size-extension.svg' });
  };
  render() {
    return (
      <div>
        <Tooltip title="test tooltip for image">
          <Image
            width={200}
            onClick={(e) => console.log(e)}
            src={this.state.src}
            draggable={false}
          />
        </Tooltip>
        <br />
        <br />
        <Button onClick={this.changeImage}>Change Image</Button>
      </div>
    );
  }
}

ReactDOM.render(<BasicImage />, mountNode);
```
