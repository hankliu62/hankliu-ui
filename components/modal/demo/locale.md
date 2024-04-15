---
order: 6
title:
  zh-CN: 国际化
  en-US: Internationalization
---

## zh-CN

设置 `okText` 与 `cancelText` 以自定义按钮文字。

## en-US

To customize the text of the buttons, you need to set `okText` and `cancelText` props.

```jsx
import { Modal, Button, Space } from '@hankliu/hankliu-ui';
import { ExclamationCircleOutlined } from '@ant-design/icons';

class LocalizedModal extends React.Component {
  state = { open: false };

  showModal = () => {
    this.setState({
      open: true,
    });
  };

  hideModal = () => {
    this.setState({
      open: false,
    });
  };

  render() {
    return (
      <>
        <Button type="primary" onClick={this.showModal}>
          Modal
        </Button>
        <Modal
          title="Modal"
          open={this.state.open}
          onOk={this.hideModal}
          onCancel={this.hideModal}
          okText="确认"
          cancelText="取消"
        >
          <p>Bla bla ...</p>
          <p>Bla bla ...</p>
          <p>Bla bla ...</p>
        </Modal>
      </>
    );
  }
}

function confirm() {
  Modal.confirm({
    title: 'Confirm',
    icon: <ExclamationCircleOutlined />,
    content: 'Bla bla ...',
    okText: '确认',
    cancelText: '取消',
  });
}

ReactDOM.render(
  <Space>
    <LocalizedModal />
    <Button onClick={confirm}>Confirm</Button>
  </Space>,
  mountNode,
);
```
