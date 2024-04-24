---
order: 0
title: 基础用法
---

基本用法

```jsx
import { FileSelect } from '@hankliu/hankliu-ui';

class BasiceDemo extends React.Component {
  state = {};

  handleSelect = (files) => {
    console.log(files);
  };

  render() {
    return <FileSelect maxsize={5 * FileSelect.SIZE_MB} onSelect={this.handleSelect} />;
  }
}

ReactDOM.render(<BasiceDemo />, mountNode);
```
