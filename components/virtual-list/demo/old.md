---
order: 0
title:
  zh-CN: 旧版用法
  en-US: Basic
---

需要定义容器的高度 `height` 和列表元素的高度 `itemHeight`

```jsx
import { VirtualList } from '@hankliu/hankliu-ui';
import times from 'lodash/times';

class Demo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      items: times(3000, (idx) => idx + 1),
    };
  }

  render() {
    let { items, loading } = this.state;
    return (
      <div className="demo-scroll-wrap">
        <VirtualList height={500} itemHeight={60} gap={10} items={items} renderItem={renderItem} />
      </div>
    );
  }
}

function renderItem(item, idx) {
  return (
    <div
      className="hlui-list-item"
      key={idx}
      style={{ height: 60, lineHeight: '60px', border: '1px solid black' }}
    >
      {item}
    </div>
  );
}

ReactDOM.render(<Demo />, mountNode);
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
