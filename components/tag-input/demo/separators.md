---
order: 3
title:
  zh-CN: 设置分隔符
  en-US: use separators
---

设置分隔符进行自动分词，试下粘贴```露西;杰克```到输入框，或者输入一段信息后按下```;```键

````jsx
import { TagInput } from '@hankliu/hankliu-ui';

class DemoApp extends React.Component {
  state = {
    value: [],
  }

  handleChange = (value) => {
    console.log('the select value is :', value);
    this.setState({ value });
  }

  render() {
    return (
      <TagInput
        allowClear
        value={this.state.value}
        onChange={this.handleChange}
        tokenSeparators={[';']}
      />
    );
  }
}

ReactDOM.render(
  <DemoApp/>,
  mountNode
);
````
