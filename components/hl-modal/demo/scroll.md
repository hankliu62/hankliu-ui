---
order: 2
title:
  zh-CN: 设置滚动内容
  en-US: set scroll body
---

## zh-CN

当内容为可滚动元素时，可以通过配置 `scroll` 来定制

```jsx
import { HlModal as Modal, Input, Slider, ScrollContainer, Button } from '@hankliu/hankliu-ui';

class App extends React.Component {
  state = {
    open: false,
    open2: false,
    confirmLoading: false,
    innerHeight: 500,
  };

  showModal = () => {
    this.setState({
      open: true,
    });
  };

  showModal2 = () => {
    this.setState({
      open2: true,
      // 另外添加了 input （36px 还要算上 margin + 12px ）
      // 所以内容高度的计算公式如下
      scrollMaxHeight: Modal.getMaxHeight(true, true, true) - 36 - 12,
    });
  };

  handleOk = () => {
    this.setState({
      open: false,
      confirmLoading: false,
    });
  };

  handleCancel = () => {
    this.setState({
      open: false,
    });
  };

  changeInnerHeight = (value) => {
    this.setState({ innerHeight: value });
  };

  render() {
    const { open, open2, innerHeight, scrollMaxHeight } = this.state;
    return (
      <div>
        <Button type="primary" onClick={this.showModal}>
          内容可滚动
        </Button>
        <Button type="primary" ghost="solid" onClick={this.showModal2}>
          自定义滚动内容
        </Button>
        <Modal
          title="内容可滚动"
          centered={true}
          scroll={true}
          open={open}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <div style={{ height: innerHeight, background: '#ccc' }}>
            <div
              style={{
                position: 'fixed',
                width: 400,
                left: 0,
                right: 0,
                top: '50%',
                margin: '-30px auto',
                textAlign: 'center',
                color: '#3cc8b4',
              }}
            >
              可以调节内容高度: {innerHeight} px
              <br />
              <Slider
                step={100}
                min={100}
                max={3000}
                value={innerHeight}
                onChange={this.changeInnerHeight}
              />
            </div>
          </div>
        </Modal>
        <Modal
          title="自定义滚动内容"
          centered={true}
          scroll="custom"
          open={open2}
          onOk={() => this.setState({ open2: false })}
          onCancel={() => this.setState({ open2: false })}
        >
          <Input style={{ marginBottom: 12 }} />
          <ScrollContainer maxHeight={scrollMaxHeight}>
            <div style={{ height: innerHeight, background: '#ccc' }}>
              <div
                style={{
                  position: 'fixed',
                  width: 400,
                  left: 0,
                  right: 0,
                  top: '50%',
                  margin: '-30px auto',
                  textAlign: 'center',
                  color: '#3cc8b4',
                }}
              >
                可以调节内容高度: {innerHeight} px
                <br />
                <Slider
                  step={100}
                  min={100}
                  max={3000}
                  value={innerHeight}
                  onChange={this.changeInnerHeight}
                />
              </div>
            </div>
          </ScrollContainer>
        </Modal>
      </div>
    );
  }
}

ReactDOM.render(<App />, mountNode);
```
