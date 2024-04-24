---
order: 0
title:
  zh-CN: 基本
  en-US: Basic
---

## zh-CN

基本用法，可以定义布局模式，是否全屏。

## en-US

Basic modal.

```jsx
import { HlModal as Modal, Button, message } from '@hankliu/hankliu-ui';

class App extends React.Component {
  state = { open: false, layout: '', fullVisible: false, normalVisible: false };

  showModal = () => {
    this.setState({
      open: true,
      layout: '',
    });
  };

  showLayoutModal = () => {
    this.setState({
      open: true,
      layout: 'filled',
    });
  };

  showFullModal = () => {
    this.setState({
      fullVisible: true,
    });
  };

  showNormalModal = () => {
    this.setState({
      normalVisible: true,
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
      <div>
        <Button type="primary" onClick={this.showModal}>
          基本用法
        </Button>
        <Button type="primary" onClick={this.showLayoutModal}>
          设置 layout="filled"
        </Button>
        <Button type="primary" onClick={this.showFullModal}>
          全屏弹窗
        </Button>
        <Button type="primary" onClick={this.showNormalModal}>
          按钮不固定到弹窗外
        </Button>
        <Modal
          title="我是一个演示弹窗"
          open={this.state.open}
          layout={this.state.layout}
          full={this.state.full}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Modal>
        <Modal
          open={this.state.fullVisible}
          onCancel={() => this.setState({ fullVisible: false })}
          full={true}
        >
          <div className="text-center">
            <p>Some contents...</p>
            <p>Some contents...</p>
            <br />
            <Button
              ghost="solid"
              onClick={() => message.success('test message', { duration: 1000000 })}
            >
              Show Message
            </Button>
            <br />
            <br />
            <br />
            <Button type="primary" onClick={() => this.setState({ fullVisible: false })}>
              Close Modal
            </Button>
          </div>
        </Modal>
        <Modal
          title="按钮不固定到弹窗外"
          open={this.state.normalVisible}
          onOk={this.handleOk}
          fixedCloseBtn={false}
          onCancel={() => this.setState({ normalVisible: false })}
        >
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Modal>
      </div>
    );
  }
}

ReactDOM.render(<App />, mountNode);
```

<style>
.text-center {
  text-align: center;
}
</style>
