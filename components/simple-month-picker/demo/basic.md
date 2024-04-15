---
order: 0
title:
  zh-CN: 基础用法
  en-US: Basic
---

基础用法

````jsx
import { SimpleMonthPicker } from '@hankliu/hankliu-ui';

class Demo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: {}
    };
  }

  handleChange = (value) => {
    console.log('change', value)
    this.setState({value})
  }

  render() {
    let { value } = this.state;
    return (
      <SimpleMonthPicker
        value={value}
        onChange={this.handleChange}
      />
    )
  }
}

ReactDOM.render(<Demo />, mountNode);

````
