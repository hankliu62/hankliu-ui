---
order: 5
title:
  zh-CN: 悬停点击弹出窗口
  en-US: Hover with click HlPopover
---

## zh-CN

以下示例显示如何创建可悬停和单击的弹出窗口。

## en-US

The following example shows how to create a HlPopover which can be hovered and clicked.

```jsx
import { HlPopover, Button } from '@hankliu/hankliu-ui';

class App extends React.Component {
  state = {
    clicked: false,
    hovered: false,
  };

  hide = () => {
    this.setState({
      clicked: false,
      hovered: false,
    });
  };

  handleHoverChange = open => {
    this.setState({
      hovered: open,
      clicked: false,
    });
  };

  handleClickChange = open => {
    this.setState({
      clicked: open,
      hovered: false,
    });
  };

  render() {
    const hoverContent = <div>This is hover content.</div>;
    const clickContent = <div>This is click content.</div>;
    return (
      <HlPopover
        style={{ width: 500 }}
        content={hoverContent}
        title="Hover title"
        trigger="hover"
        open={this.state.hovered}
        onOpenChange={this.handleHoverChange}
      >
        <HlPopover
          content={
            <div>
              {clickContent}
              <a onClick={this.hide}>Close</a>
            </div>
          }
          title="Click title"
          trigger="click"
          open={this.state.clicked}
          onOpenChange={this.handleClickChange}
        >
          <Button>Hover and click / 悬停并单击</Button>
        </HlPopover>
      </HlPopover>
    );
  }
}

ReactDOM.render(<App />, mountNode);
```
