---
order: 0
title: 基础用法
---

基础用法

```jsx
import { ColorPicker, Switch } from '@hankliu/hankliu-ui';
import { useState } from 'react';

function Panel() {
  const [alpha, setAlpha] = useState(false)
  const [allowEmpty, setAllowEmpty] = useState(false)
  const [value, setValue] = useState('#666')
  const [tempValue, setTempValue] = useState('#666')

  const toggleAlpha = () => setAlpha(pre => !pre)

  const toggleEmpty = () => setAllowEmpty(pre => !pre)

  const handleChange = (value) => {
    console.log('color change ', value)
    setValue(value);
  }

  return (
    <div>
      支持透明度: <Switch checked={alpha} onChange={toggleAlpha}></Switch>
      <br />
      <br />
      支持无颜色: <Switch checked={allowEmpty} onChange={toggleEmpty}></Switch>
      <br />
      <br />
      <ColorPicker
        allowEmpty={allowEmpty}
        alpha={alpha}
        value={value}
        onChange={handleChange}
      />
    </div>
  );
}

ReactDOM.render(<Panel />, mountNode);
```
