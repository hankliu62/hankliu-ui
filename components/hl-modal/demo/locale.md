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

````jsx
import { HlModal as Modal, Button } from '@hankliu/hankliu-ui';

class LocalizedModal extends React.Component {
  state = { open: false }

  showModal = () => {
    this.setState({
      open: true,
    });
  }

  hideModal = () => {
    this.setState({
      open: false,
    });
  }

  render() {
    return (
      <div>
        <Button type="primary" onClick={this.showModal}>Modal</Button>
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
      </div>
    );
  }
}

function confirm() {
  Modal.confirm({
    title: 'Confirm',
    content: 'Bla bla ...',
    okText: '确认',
    cancelText: '取消',
  });
}

ReactDOM.render(
  <div>
    <LocalizedModal />
    <br />
    <Button onClick={confirm}>Confirm</Button>
  </div>,
  mountNode
);
````
