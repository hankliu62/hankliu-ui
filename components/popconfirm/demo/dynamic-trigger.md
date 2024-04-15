---
order: 3
title:
  zh-CN: 条件触发
  en-US: Conditional trigger
---

## zh-CN

可以判断是否需要弹出。

## en-US

Make it pop up under some conditions.

```jsx
import { Popconfirm, Switch, message } from '@hankliu/hankliu-ui';

class App extends React.Component {
  state = {
    open: false,
    condition: true, // Whether meet the condition, if not show popconfirm.
  };

  changeCondition = value => {
    this.setState({ condition: value });
  };

  confirm = () => {
    this.setState({ open: false });
    message.success('Next step.');
  };

  cancel = () => {
    this.setState({ open: false });
    message.error('Click on cancel.');
  };

  handleVisibleChange = open => {
    if (!open) {
      this.setState({ open });
      return;
    }
    // Determining condition before show the popconfirm.
    console.log(this.state.condition);
    if (this.state.condition) {
      this.confirm(); // next step
    } else {
      this.setState({ open }); // show the popconfirm
    }
  };

  render() {
    return (
      <div>
        <Popconfirm
          title="Are you sure delete this task?"
          open={this.state.open}
          onOpenChange={this.handleVisibleChange}
          onConfirm={this.confirm}
          onCancel={this.cancel}
          okText="Yes"
          cancelText="No"
        >
          <a href="#">Delete a task</a>
        </Popconfirm>
        <br />
        <br />
        Whether directly execute：
        <Switch defaultChecked onChange={this.changeCondition} />
      </div>
    );
  }
}

ReactDOM.render(<App />, mountNode);
```
