---
order: 1
title: 渐变选择器
---

支持渐变颜色

````jsx
import { ColorPicker, Button } from '@hankliu/hankliu-ui';

class Panel extends React.Component {
  state = {
    value: {
      angle: 20,
      type: 'linear',
      current: 0,
      colors: [{
        r: 49, g: 32, b: 138, a: 0.67, stop: 0.35
      }, {
        r: 22, g: 55, b: 89, a: 0.9, stop: 0.8
      }]
    }
  };

  handleChange = (value) => {
    console.log('color change ', value)
    this.setState({ value });
  }

  render() {
    const { value } = this.state;
    return (
      <ColorPicker
        type="gradient"
        value={value}
        onChange={this.handleChange}
      />
    );
  }
}

ReactDOM.render(<Panel />, mountNode);

````
