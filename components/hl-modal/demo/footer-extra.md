---
order: 1
title:
  zh-CN: 添加底部额外内容
  en-US: add extra footer content
---

## zh-CN

添加底部额外内容

```jsx
import { HlModal as Modal, Button, HlTag as Tag } from '@hankliu/hankliu-ui';

class App extends React.Component {
  state = {
    loading: false,
    title: 'The Title',
    open: false,
    footerExtraContent: '提示内容：这里的默认行高为 36px',
  };

  showCustomExtra = () => {
    this.setState({
      open: true,
      footerExtraContent: (
        <div style={{ display: 'flex', alignItems: 'center' }}>
          提示：<Tag.StatusTag status="error">未通过</Tag.StatusTag>
        </div>
      ),
    });
  };

  showModal = () => {
    this.setState({
      open: true,
      footerExtraContent: '提示内容：这里的默认行高为 36px',
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
    const { open, title, loading, footerExtraContent } = this.state;
    return (
      <div>
        <Button type="primary" onClick={this.showModal}>
          添加普通文本内容
        </Button>
        <Button type="primary" onClick={this.showCustomExtra}>
          添加自定义的内容
        </Button>
        <Modal
          open={open}
          width={960}
          title={title}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          footerExtraContent={footerExtraContent}
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
