---
order: 2
title:
  zh-CN: itemData用法
  en-US: Basic
---

参考[FixedSizeList](https://react-window.vercel.app/#/api/FixedSizeList)

```jsx
import { VirtualList } from '@hankliu/hankliu-ui';
import times from 'lodash/times';

const itemData = times(3000, (idx) => ({ id: `id is ${idx + 1}`, val: `val is ${idx + 1}` }));

const Row = ({ index, style, data }) => (
  <div className={index % 2 ? 'ListItemOdd' : 'ListItemEven'} style={style}>
    Row {data[index].val}
  </div>
);

function itemKey(index, data) {
  const item = data[index];
  return item.id;
}

const Example = () => (
  <VirtualList
    className="List"
    height={150}
    itemData={itemData}
    itemCount={itemData.length}
    itemSize={35}
    itemKey={itemKey}
  >
    {Row}
  </VirtualList>
);
ReactDOM.render(<Example />, mountNode);
```

```css
.List {
  border: 1px solid #d9dddd;
}

.ListItemEven,
.ListItemOdd {
  display: flex;
  align-items: center;
  justify-content: center;
}

.ListItemEven {
  background-color: #f8f8f0;
}
```
