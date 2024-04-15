---
order: 0
title: Popover 用法
---

Popover 用法，添加 onCancel onOk 事件回调

````jsx
import { ColorPicker, Button } from '@hankliu/hankliu-ui';

const GradientValue = {
  angle: 20,
  type: 'linear',
  current: 0,
  colors: [{
    r: 49, g: 32, b: 138, a: 0.67, stop: 0.35
  }, {
    r: 22, g: 55, b: 89, a: 0.9, stop: 0.8
  }]
}

const BasicValue = '#666'

class Panel extends React.Component {
  state = {
    gradientVisible: false,
    gradientValue: Object.assign({}, GradientValue),
    basicValue: BasicValue,
    basicVisible: false,
  };

  showBasicPicker = () => {
    this.setState({basicVisible: true})
  }

  hideBasicPicker = () => {
    this.setState({basicVisible: false})
  }

  handleBasicChange = (value) => {
    console.log('basic color change ', value)
    this.setState({ basicValue: value });
  }

  resetBasicValue = () => {
    this.setState({ basicValue: BasicValue, basicVisible: false })
  }

  showGradientPicker = () => {
    this.setState({gradientVisible: true})
  }

  hideGradientPicker = () => {
    this.setState({gradientVisible: false})
  }

  handleGradientChange = (value) => {
    console.log('gradient color change ', value)
    this.setState({ gradientValue: value });
  }

  resetGradientValue = () => {
    this.setState({ gradientValue: Object.assign({}, GradientValue), gradientVisible: false })
  }

  render() {
    const { basicValue, basicVisible, gradientValue, gradientVisible } = this.state;
    return (
      <div>
        <ColorPicker.Popover
          alpha={false}
          open={basicVisible}
          value={basicValue}
          onCancel={this.resetBasicValue}
          onOk={this.hideBasictPicker}
          onChange={this.handleBasicChange}
        >
          <Button type="primary" onClick={this.showBasicPicker}>show BasicPicker</Button>
        </ColorPicker.Popover>
        <br/>
        <br/>
        <ColorPicker.Popover
          alpha={false}
          open={gradientVisible}
          type="gradient"
          value={gradientValue}
          onCancel={this.resetGradientValue}
          onOk={this.hideGradientPicker}
          onChange={this.handleGradientChange}
        >
          <Button type="primary"  onClick={this.showGradientPicker}>show GradientPicker</Button>
      </ColorPicker.Popover>
      </div>
    );
  }
}

ReactDOM.render(<Panel />, mountNode);

````
