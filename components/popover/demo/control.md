---
order: 3
title:
  zh-CN: 从浮层内关闭
  en-US: Controlling the close of the dialog
---

## zh-CN

使用 `open` 属性控制浮层显示。

## en-US

Use `open` prop to control the display of the card.

```jsx
import { Popover, Button } from '@hankliu/hankliu-ui';

class App extends React.Component {
  state = {
    open: false,
  };

  hide = () => {
    this.setState({
      open: false,
    });
  };

  handleVisibleChange = (open) => {
    this.setState({ open });
  };

  render() {
    return (
      <Popover
        content={<a onClick={this.hide}>Close</a>}
        title="Title"
        trigger="click"
        open={this.state.open}
        onOpenChange={this.handleVisibleChange}
      >
        <Button type="primary">Click me</Button>
      </Popover>
    );
  }
}

ReactDOM.render(<App />, mountNode);
```
