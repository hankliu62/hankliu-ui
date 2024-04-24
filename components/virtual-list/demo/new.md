---
order: 1
title:
  zh-CN: 新版用法
  en-US: Basic
---

参考[FixedSizeList](https://react-window.vercel.app/#/api/FixedSizeList)

```jsx
import { VirtualList } from '@hankliu/hankliu-ui';
import times from 'lodash/times';

const Row = ({ index, style }) => (
  <div className={index % 2 ? 'ListItemOdd' : 'ListItemEven'} style={style}>
    Row {index}
  </div>
);

const Example = () => (
  <VirtualList className="List" height={150} itemCount={1000} itemSize={35}>
    {Row}
  </VirtualList>
);
ReactDOM.render(<Example />, mountNode);
```

````css
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

```_
````
