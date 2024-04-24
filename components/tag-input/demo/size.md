---
order: 1
title:
  zh-CN: 三种大小
  en-US: Sizes
---

## zh-CN

五种大小

## en-US

The height of the input field for the select defaults to 32px. If size is set to large, the height will be 40px, and if set to small, 24px.

```jsx
import { TagInput, Radio } from '@hankliu/hankliu-ui';

class SelectSizesDemo extends React.Component {
  state = {
    size: 'default',
    value: ['test'],
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
          <Radio.Button value="medium">Medium</Radio.Button>
          <Radio.Button value="default">Default</Radio.Button>
          <Radio.Button value="smedium">Smedium</Radio.Button>
          <Radio.Button value="small">Small</Radio.Button>
        </Radio.Group>
        <br />
        <br />
        <TagInput
          size={size}
          value={value}
          maxTagTextLength={10}
          max={3}
          onChange={this.handleChange}
        />
        <TagInput disabled size={size} value={['disabled']} />
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
