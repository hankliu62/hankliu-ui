---
order: 8
title:
  zh-CN: 受控的可编辑文本
  en-US: Editable Text
---

受控的可编辑文本

```jsx
import { EditableText, message, Tooltip } from '@hankliu/hankliu-ui';

function getFileExtension(filename) {
  return filename.slice(((filename.lastIndexOf('.') - 1) >>> 0) + 2);
}
function deleteFileExtension(filename) {
  return filename.slice(0, ((filename.lastIndexOf('.') - 1) >>> 0) + 1);
}
class InputTextDemo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: 'test.gif', cacheExtWhenFocus: '' };
  }

  onChange = (value) => {
    this.setState({ value });
  };

  handleInputBlur = (e) => {
    const { value } = e.target;
    const { cacheExtWhenFocus } = this.state;
    this.setState({
      value: `${value || '未命名'}.${cacheExtWhenFocus}`,
      cacheExtWhenFocus: '',
    });
    return true;
  };
  handleFocus = () => {
    const { value } = this.state;
    this.setState({
      cacheExtWhenFocus: getFileExtension(value),
      value: deleteFileExtension(value),
    });
  };

  render() {
    return (
      <div>
        <div>
          <EditableText
            controlled
            autoSelect={true}
            max={10}
            style={{ width: 160 }}
            value={this.state.value}
            onChange={this.onChange}
            onInputFocus={this.handleFocus}
            onInputBlur={this.handleInputBlur}
          />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<InputTextDemo />, mountNode);
```
