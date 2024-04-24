---
order: 0
title:
  zh-CN: 基本
  en-US: Basic
---

## zh-CN

数字输入框。

## en-US

Numeric-only input box.

```jsx
import React, { useState } from 'react';
import { InputPhone } from '@hankliu/hankliu-ui';

function Demo() {
  const [areaCode, setaAeaCode] = useState('+86');
  const [phone, setPhone] = useState();
  return (
    <InputPhone
      phone={phone}
      onPhoneChange={setPhone}
      areaCode={areaCode}
      onAreaCodeChange={(code) => {
        console.log('code', code);
        setaAeaCode(code);
      }}
    />
  );
}

ReactDOM.render(<Demo />, mountNode);
```
