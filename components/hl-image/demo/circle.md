---
order: 2
title:
  zh-CN: 圆形图片
  en-US: Circle
---

## zh-CN

圆形图片

## en-US

Circle

```jsx
import { HlImage as Image, Button } from '@hankliu/hankliu-ui';

class CircleImage extends React.Component {
  state = {
    imagesVisible: false,
  };

  showImages = () => {
    this.setState({ imagesVisible: true });
  };

  render() {
    return (
      <div>
        <Button onClick={this.showImages}>Show Images</Button>
        <br />
        <br />
        {this.renderImages()}
      </div>
    );
  }

  renderImages() {
    const { imagesVisible } = this.state;
    if (!imagesVisible) return null;
    return (
      <div>
        <Image
          shape="circle"
          size={100}
          src="https://www.apple.com/v/mac/home/af/images/overview/hero/imac__dlz2ciyr6hm6_large.jpg"
        />
        <Image
          shape="circle"
          size={200}
          src="https://xxx.apple.com/v/mac/home/af/images/overview/hero/imac__dlz2ciyr6hm6_large.jpg"
        />
        <Image
          shape="circle"
          size={300}
          src="https://www.apple.com/v/mac/home/af/images/overview/hero/imac__dlz2ciyr6hm6_large.jpg"
        />
      </div>
    );
  }
}

ReactDOM.render(<CircleImage />, mountNode);
```
