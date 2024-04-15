---
order: 2
title:
  zh-CN: lockHeight
---

## zh-CN

设置lockHeight将固定输入框高度


```jsx
import { HlSelect, Switch } from '@hankliu/hankliu-ui';
import { useState } from 'react';

const { Option } = HlSelect;

const children = [];
for (let i = 10; i < 36; i++) {
  children.push(<Option key={i.toString(36) + i}>{'----------------------------' + i.toString(36) + i}</Option>);
}

function handleChange(value) {
  console.log(`selected ${value}`);
}

function Demo() {
  const [lockHeight, setLockHeight] = useState(true);
  return (
    <>
      <div style={{marginBottom: 20}}>
        lockHeight：
        <Switch checked={lockHeight} onChange={setLockHeight} />
      </div>
      <HlSelect
        mode="tags"
        style={{ width: 200 }}
        allowClear
        placeholder="Please select"
        defaultValue={['a10', 'c12']}
        onChange={handleChange}
        lockHeight={lockHeight}
        size="large"
      >
        {children}
      </HlSelect>
    </>
  );
}

ReactDOM.render(<Demo />, mountNode);
```
