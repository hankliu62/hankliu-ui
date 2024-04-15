---
order: 2
title:
  zh-CN: 三元操作弹窗
  en-US: Ternary
---

## zh-CN

三元操作弹窗

## en-US

Ternary modal

````jsx
import { HlModal as Modal, Button, message } from '@hankliu/hankliu-ui';
import IconDelete from '@ant-design/icons/DeleteOutlined'

class App extends React.Component {
  state = { open: false }

  showModal = () => {
    this.setState({
      open: true
    });
  }

  handleOk = (e) => {
    console.log(e);
    this.setState({
      open: false,
    });
  }

  handleSecondly = (e) => {
    console.log('secondly clicked');
  }

  handleCancel = (e) => {
    console.log(e);
    this.setState({
      open: false,
    });
  }

  useModalShow = () => {
    const modal = Modal.show({
      ternary: true,
      secondText: '删 除',
      secondType: 'danger',
      title: '确认复制该项目到草稿？(show)',
      content: '一些描述文字一些描述文字一些描述文字一些描述文字一些描述文字',
      onOk: () => {
        console.log('ok clicked')
      },
      onSecondly: () => {
        console.log('secondly clicked')
      },
      onCancel: () => {
        console.log('cancel clicked')
        modal.destroy()
      }
    })
  }

  render() {
    return (
      <div>
        <Button type="primary" onClick={this.showModal}>
          Ternary Modal
        </Button>
        <Button type="neutral" onClick={this.useModalShow}>
          Use Modal.show
        </Button>
        <Modal
          ternary
          icon={<IconDelete style={{color: 'var(--color-danger)'}} />}
          secondText="删 除"
          title="确认复制该项目到草稿？(components)"
          open={this.state.open}
          onOk={this.handleOk}
          onSecondly={this.handleSecondly}
          onCancel={this.handleCancel}
        >
          一些描述文字一些描述文字一些描述文字一些描述文字一些描述文字
        </Modal>
      </div>
    );
  }
}

ReactDOM.render(<App />, mountNode);
````
