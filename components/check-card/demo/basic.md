---
order: 0
title: 基础用法
---

有两种卡片类型

```tsx
import { CheckCard, Radio, Switch } from '@hankliu/hankliu-ui';
import { CheckCardProps } from '@hankliu/hankliu-ui/lib/check-card';
import { useState } from 'react';

const OPTIONS = {
  size: ['small', 'default', 'large'],
  type: ['round', 'circle'],
  border: [0, 1, 2],
};

const CheckCardDemo = () => {
  let [state, setState] = useState<CheckCardProps>({
    size: 'default',
    indicate: 'default',
    type: 'circle',
    border: 0,
    disabled: false,
    checked: false,
    usable: true,
  });
  const handleSizeChange = (e) => {
    setState((state) => ({ ...state, size: e.target.value }));
  };

  const handleTypeChange = (e) => {
    setState((state) => ({ ...state, type: e.target.value }));
  };

  const handleBorderChange = (e) => {
    setState((state) => ({ ...state, border: e.target.value }));
  };

  const { size, indicate, type, border, disabled, checked, usable } = state;
  return (
    <div>
      <div className="display-flex mb-12">
        <div style={{ width: 100 }}>type: </div>
        <div className="flex-1">
          <Radio.Group value={type} onChange={handleTypeChange}>
            {OPTIONS.type.map((item, idx) => (
              <Radio key={idx} value={item}>
                {item}
              </Radio>
            ))}
          </Radio.Group>
        </div>
      </div>
      <div className="display-flex mb-12">
        <div style={{ width: 100 }}>border: </div>
        <div className="flex-1">
          <Radio.Group value={border} onChange={handleBorderChange}>
            {OPTIONS.border.map((item, idx) => (
              <Radio key={idx} value={item}>
                {item}
              </Radio>
            ))}
          </Radio.Group>
        </div>
      </div>
      <div className="display-flex mb-12">
        <div style={{ width: 100 }}>disabled: </div>
        <div className="flex-1">
          <Switch
            checked={disabled}
            onChange={(disabled) => setState((state) => ({ ...state, disabled }))}
          />
        </div>
      </div>
      <div className="display-flex mb-12">
        <div style={{ width: 100 }}>checked: </div>
        <div className="flex-1">
          <Switch
            checked={checked}
            onChange={(checked) => setState((state) => ({ ...state, checked }))}
          />
        </div>
      </div>
      <div className="display-flex mb-12">
        <div style={{ width: 100 }}>usable: </div>
        <div className="flex-1">
          <Switch
            checked={usable}
            onChange={(usable) => setState((state) => ({ ...state, usable }))}
          />
        </div>
      </div>
      <div className="mb-12"></div>
      <CheckCard
        onChange={(checked) => setState((state) => ({ ...state, checked }))}
        usable={usable}
        checked={checked}
        border={border}
        disabled={disabled}
        type={type}
        style={{ width: 200, height: 120 }}
      ></CheckCard>
    </div>
  );
};

ReactDOM.render(<CheckCardDemo />, mountNode);
```

<style>
.display-flex{
  display:flex;
}
.flex-1{
  flex:1;
}
.mb-12{
  margin-bottom:12px;
}
</style>
