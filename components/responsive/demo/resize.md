---
order: 2
title:
  zh-CN: 响应式盒子
  en-US: Box
---

基础用法

```jsx
import { Responsive, HlImage as Image } from '@hankliu/hankliu-ui';

class App extends React.Component {
  state = { width: '100%' };

  change = (value) => {
    this.setState({ width: value.width });
  };

  render() {
    const { width } = this.state;
    return (
      <Responsive.ResizeBox width={width} onChange={this.change}>
        <Image
          block
          width="100%"
          src="https://www.apple.com/v/mac/home/af/images/overview/hero/imac__dlz2ciyr6hm6_large.jpg"
        />
      </Responsive.ResizeBox>
    );
  }
}

ReactDOM.render(<App />, mountNode);
```
