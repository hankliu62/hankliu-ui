---
order: 3
title:
  zh-CN: 可选择
  en-US: Checkable
---

## zh-CN

可通过 `CheckableTag` 实现类似 Checkbox 的效果，点击切换选中效果。

> 该组件为完全受控组件，不支持非受控用法。

## en-US

`CheckableTag` works like Checkbox, click it to toggle checked state.

> it is an absolute controlled component and has no uncontrolled mode.

```jsx
import { HlTag } from '@hankliu/hankliu-ui';

const { CheckableTag } = HlTag;

class MyTag extends React.Component {
  state = { checked: true };

  handleChange = (checked) => {
    this.setState({ checked });
  };

  render() {
    return (
      <CheckableTag {...this.props} checked={this.state.checked} onChange={this.handleChange} />
    );
  }
}

ReactDOM.render(
  <div>
    <MyTag>Checkable HlTag</MyTag>
  </div>,
  mountNode,
);
```
