---
order: 5
title:
  zh-CN: 控制关闭状态
  en-US: Controlled
---

## zh-CN

通过 `visible` 属性控制关闭状态。

## en-US

By using the `visible` prop, you can control the close state of HlTag.

```jsx
import { HlTag, Button } from '@hankliu/hankliu-ui';

class Demo extends React.Component {
  state = {
    visible: true,
  };

  render() {
    return (
      <div>
        <HlTag visible={this.state.visible} onClose={() => this.setState({ visible: false })}>
          Movies
        </HlTag>
        <br />
        <Button
          size="small"
          onClick={() => this.setState({ visible: !this.state.visible })}
          className="mt-12"
        >
          Toggle
        </Button>
      </div>
    );
  }
}

ReactDOM.render(<Demo />, mountNode);
```
