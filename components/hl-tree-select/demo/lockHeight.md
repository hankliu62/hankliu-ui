---
order: 3
title:
  zh-CN: lockHeight
---

## zh-CN

固定输入框高度。

```jsx
import { HlTreeSelect, Switch } from '@hankliu/hankliu-ui';
import { useState } from 'react';

const { SHOW_PARENT } = HlTreeSelect;

const treeData = [
  {
    title: 'Node1',
    value: '0-0',
    key: '0-0',
    children: [
      {
        title: 'Child Node1',
        value: '0-0-0',
        key: '0-0-0',
      },
    ],
  },
  {
    title: 'Node2',
    value: '0-1',
    key: '0-1',
    children: [
      {
        title: 'Child Node3',
        value: '0-1-0',
        key: '0-1-0',
      },
      {
        title: 'Child Node4',
        value: '0-1-1',
        key: '0-1-1',
      },
      {
        title: 'Child Node5',
        value: '0-1-2',
        key: '0-1-2',
      },
    ],
  },
  {
    title: 'Node3',
    value: '0-2',
    key: '0-2',
    children: [
      {
        title: 'Child Node0',
        value: '0-2-0',
        key: '0-2-0',
      },
      {
        title: 'Child Node0',
        value: '0-2-1',
        key: '0-2-1',
      },
      {
        title: 'Child Node2',
        value: '0-2-2',
        key: '0-2-2',
      },
      {
        title: 'Child Node3',
        value: '0-2-3',
        key: '0-2-3',
      },
      {
        title: 'Child Node4',
        value: '0-2-4',
        key: '0-2-4',
      },
      {
        title: 'Child Node5',
        value: '0-2-5',
        key: '0-2-5',
      },
    ],
  },
];

function Demo() {
  const [lockHeight, setLockHeight] = useState(true);
  const [value, setValue] = useState();
  console.log('HlTreeSelect', HlTreeSelect)
  return (
    <>
      <div style={{marginBottom: 20}}>
        lockHeight：
        <Switch checked={lockHeight} onChange={setLockHeight} />
      </div>
      <HlTreeSelect
        treeData={treeData}
        value={value}
        placeholder="Please select"
        showCheckedStrategy={SHOW_PARENT}
        treeCheckable
        onChange={setValue}
        style={{ width: '200px' }}
        lockHeight={lockHeight}
        allowClear
      />
    </>
  );
}

ReactDOM.render(<Demo />, mountNode);
```
