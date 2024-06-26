---
order: 11
title:
  zh-CN: 自定义页脚按钮属性
  en-US: Customize footer buttons props
---

## zh-CN

传入 `okButtonProps` 和 `cancelButtonProps` 可分别自定义确定按钮和取消按钮的 props。

## en-US

Passing `okButtonProps` and `cancelButtonProps` will customize the OK button and cancel button props.

```jsx
import { Modal, Button } from '@hankliu/hankliu-ui';

class App extends React.Component {
  state = { open: false };

  showModal = () => {
    this.setState({
      open: true,
    });
  };

  handleOk = (e) => {
    console.log(e);
    this.setState({
      open: false,
    });
  };

  handleCancel = (e) => {
    console.log(e);
    this.setState({
      open: false,
    });
  };

  render() {
    return (
      <>
        <Button type="primary" onClick={this.showModal}>
          Open Modal with customized button props
        </Button>
        <Modal
          title="Basic Modal"
          open={this.state.open}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          okButtonProps={{ disabled: true }}
          cancelButtonProps={{ disabled: true }}
        >
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Modal>
      </>
    );
  }
}

ReactDOM.render(<App />, mountNode);
```
