---
order: 3
title:
  zh-CN: 自定义页头或者脚
  en-US: Customized Header or Footer
---

## zh-CN

自定义页头自定义了页脚的按钮，点击提交后进入 loading 状态，完成后关闭。不需要页头时，不传 title 即可不需要默认页脚时，你可以把 `footer` 设为 `null`。

## en-US

A more complex example which define a customized footer button bar, the dialog will change to loading state after clicking submit button, when the loading is over, the modal dialog will be closed.

You could set `footer` to `null` if you don't need default footer buttons.

```jsx
import { HlModal as Modal, Button } from '@hankliu/hankliu-ui';

class App extends React.Component {
  state = {
    loading: false,
    title: 'The Title',
    open: false,
  };

  showModalWithoutHeader = () => {
    this.setState({
      open: true,
      title: '',
    });
  };

  showModal = () => {
    this.setState({
      open: true,
    });
  };

  handleOk = () => {
    this.setState({ loading: true });
    setTimeout(() => {
      this.setState({ loading: false, open: false });
    }, 3000);
  };

  handleCancel = () => {
    this.setState({ open: false });
  };

  render() {
    const { open, title, loading } = this.state;
    return (
      <div>
        <Button type="primary" onClick={this.showModal}>
          自定义 footer
        </Button>
        <Button type="primary" onClick={this.showModalWithoutHeader}>
          不设置 title
        </Button>
        <Modal
          open={open}
          title={title}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          footer={[
            <span className="mr-8">文字说明：</span>,
            <Button key="submit" type="primary" loading={loading} onClick={this.handleOk}>
              Submit
            </Button>,
          ]}
        >
          <p>Some contents...</p>
          <p>Some contents...</p>
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
