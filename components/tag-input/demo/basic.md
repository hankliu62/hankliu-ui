---
order: 0
title:
  zh-CN: 基本使用
  en-US: Basic Usage
---

用来输入自定义标签

````jsx
import { TagInput } from '@hankliu/hankliu-ui';

class DemoApp extends React.Component {
  state = {
    value: [],
  }

  handleChange = (value, option) => {
    console.log('the select value is :', value, option);
    this.setState({ value });
  }

  render() {
    return (
      <TagInput
        allowClear
        value={this.state.value}
        onChange={this.handleChange}
        maxTagTextLength={10}
        max={3}
      />
    );
  }
}

ReactDOM.render(
  <DemoApp/>,
  mountNode
);
````
