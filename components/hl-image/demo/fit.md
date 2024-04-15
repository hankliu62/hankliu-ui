---
order: 1
title:
  zh-CN: 图片填充比例
  en-US: object-fit
---

## zh-CN

支持四种图片填充效果

## en-US

object-fit

```jsx
import { HlImage as Image, Button } from '@hankliu/hankliu-ui';

class FitImage extends React.Component {
  state = {
    clear: false,
  };
  clear = () => {
    this.setState({ clear: true });
  };
  render() {
    const { clear } = this.state;
    if (clear) return null;
    return (
      <div>
        <Image
          size={160}
          fit="fill"
          src="https://www.apple.com/v/mac/home/af/images/overview/hero/imac__dlz2ciyr6hm6_large.jpg"
        />
        <Image
          size={160}
          fit="contain"
          src="https://www.apple.com/v/mac/home/af/images/overview/hero/imac__dlz2ciyr6hm6_large.jpg"
        />
        <Image
          showLoading={false}
          size={160}
          fit="cover"
          src="https://www.apple.com/v/mac/home/af/images/overview/hero/imac__dlz2ciyr6hm6_large.jpg"
        />
        <Image size={160} fit="flex" src="https://hankliu62.github.io/img/favicon.ico" />
      </div>
    );
  }
}

ReactDOM.render(<FitImage />, mountNode);
```
