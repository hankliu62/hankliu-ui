---
order: 0
title:
  zh-CN: 基本
  en-US: Basic
---

## zh-CN

简单的展示。

## en-US

Simplest Usage.

```jsx
import { Empty, Radio, Select } from '@hankliu/hankliu-ui';
import React, { useState } from 'react';

const { IMAGES } = Empty;
function App() {
  const [imageKey, setImageKey] = useState(Object.keys(IMAGES)[0]);
  const [size, setSize] = useState('default');

  const handleImageKeyChange = (imageKey) => {
    setImageKey(imageKey);
  };

  const handleSizeChange = (e) => {
    setSize(e.target.value);
  };
  return (
    <div>
      Empty.IMAGES.
      <Select style={{ width: '300px' }} value={imageKey} onChange={handleImageKeyChange}>
        {Object.keys(IMAGES).map((key) => (
          <Select.Option key={key}>{key}</Select.Option>
        ))}
      </Select>
      <div className="float-right" style={{ float: 'right' }}>
        <Radio.Group value={size} onChange={handleSizeChange}>
          <Radio.Button value="large">Large</Radio.Button>
          <Radio.Button value="default">Default</Radio.Button>
          <Radio.Button value="small">Small</Radio.Button>
        </Radio.Group>
      </div>
      <br />
      <br />
      <Empty size={size} image={IMAGES[imageKey]} height={400} />
    </div>
  );
}

ReactDOM.render(<App />, mountNode);
```
