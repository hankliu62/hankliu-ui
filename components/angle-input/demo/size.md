---
order: 3
title:
  zh-CN: 三种大小
  en-US: Sizes
---

三种大小的选择框，当 size 分别为 `large` 和 `small` 时，输入框高度为 `48px` 和 `28px` ，默认高度为 `36px`。

```jsx
import { AngleInput, Radio } from '@hankliu/hankliu-ui';

class SelectSizesDemo extends React.Component {
  state = {
    size: 'default',
    value: 0,
  };

  handleSizeChange = (e) => {
    this.setState({ size: e.target.value });
  };

  handleChange = (value) => {
    this.setState({ value });
  };

  render() {
    const { size, value } = this.state;
    return (
      <div>
        <Radio.Group value={size} onChange={this.handleSizeChange}>
          <Radio.Button value="large">Large</Radio.Button>
          <Radio.Button value="default">Default</Radio.Button>
          <Radio.Button value="small">Small</Radio.Button>
        </Radio.Group>
        <br />
        <br />
        <AngleInput size={size} value={value} onChange={this.handleChange} />
      </div>
    );
  }
}

ReactDOM.render(<SelectSizesDemo />, mountNode);
```

```css
.code-box-demo .hlui-select {
  margin: 0 8px 10px 0;
}

#components-select-demo-search-box .code-box-demo .hlui-select {
  margin: 0;
}
```
