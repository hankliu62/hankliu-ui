---
order: 20
title:
  en-US: Fixed Columns and Header
  zh-CN: onScrollEnd、bottomOffset
---

## zh-CN

onScrollEnd、bottomOffset 用法示例

```jsx
import { HlTable as Table, message, InputNumber } from '@hankliu/hankliu-ui';
import { useState } from 'react';

const columns = [
  {
    title: 'Full Name',
    width: 100,
    dataIndex: 'name',
    key: 'name',
    fixed: 'left',
  },
  {
    title: 'Age',
    width: 100,
    dataIndex: 'age',
    key: 'age',
    fixed: 'left',
  },
  {
    title: 'Column 1',
    dataIndex: 'address',
    key: '1',
    width: 150,
  },
  {
    title: 'Column 2',
    dataIndex: 'address',
    key: '2',
    width: 150,
  },
  {
    title: 'Column 3',
    dataIndex: 'address',
    key: '3',
    width: 150,
  },
  {
    title: 'Column 4',
    dataIndex: 'address',
    key: '4',
    width: 150,
  },
  {
    title: 'Column 5',
    dataIndex: 'address',
    key: '5',
    width: 150,
  },
  {
    title: 'Column 6',
    dataIndex: 'address',
    key: '6',
    width: 150,
  },
  {
    title: 'Column 7',
    dataIndex: 'address',
    key: '7',
    width: 150,
  },
  { title: 'Column 8', dataIndex: 'address', key: '8' },
  {
    title: 'Action',
    key: 'operation',
    fixed: 'right',
    width: 100,
    render: () => <a>action</a>,
  },
];

const data = [];
for (let i = 0; i < 100; i++) {
  data.push({
    key: i,
    name: `Edrward ${i}`,
    age: 32,
    address: `London Park no. ${i}`,
  });
}

function Demo() {
  const [bottomOffset, setBottomOffset] = useState(0)
  return (
    <>
      <div style={{
          marginBottom: 20
      }}>
        <span>bottomOffset：</span>
        <InputNumber value={bottomOffset} onChange={setBottomOffset}/>
      </div>
      <Table
        bottomOffset={bottomOffset}
        columns={columns}
        dataSource={data}
        scroll={{ x: 1500, y: 300 }}
        onScrollEnd={() => {
          message.info('已滚动到底部');
        }}
      />
    </>
  )
};

ReactDOM.render(<Demo/>, mountNode);
```
