---
order: 0
title:
  zh-CN: 基本使用
  en-US: Basic Usage
---

用来输入自定义标签

````jsx
import { AngleInput } from '@hankliu/hankliu-ui';

class DemoApp extends React.Component {
  state = {
    value: undefined,
  }

  handleChange = (value) => {
    console.log('the select value is :', value);
    this.setState({ value });
  }

  render() {
    return (
      <AngleInput
        value={this.state.value}
        onChange={this.handleChange}
      />
    );
  }
}

ReactDOM.render(
  <DemoApp/>,
  mountNode
);
````
