---
order: 7
title:
  zh-CN: 可编辑文本
  en-US: Editable Text
---

可编辑文本

组件中的样式 `font-size` `color` `line-height` 继承父级

```jsx
import { EditableText, message, Tooltip } from '@hankliu/hankliu-ui';

class NumericInputDemo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };
  }

  onChange = (value) => {
    this.setState({ value });
  };

  onInputBlur = (e) => {
    const { value } = e.target;
    if (value.length < 10) {
      message.error('length must >= 10');
      return false;
    } else {
      this.setState({ value });
      return true;
    }
  };

  onPromiseInputBlur = (e) => {
    const { value } = e.target;
    return new Promise((resolve, reject) => {
      if (value.length < 10) {
        message.error('length must >= 10');
        reject();
      } else {
        this.setState({ value });
        resolve();
      }
    });
  };

  render() {
    return (
      <div>
        <div>
          <EditableText style={{ width: 160 }} value={this.state.value} onChange={this.onChange} />
        </div>
        <br />
        <div>添加 onInputBlur 和 fixedValueWidth </div>
        <br />
        <div style={{ fontSize: 16 }}>
          <EditableText
            onInputBlur={this.onPromiseInputBlur}
            style={{ width: 160 }}
            fixedValueWidth
            value={this.state.value}
          />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<NumericInputDemo />, mountNode);
```
