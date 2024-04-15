---
order: 0
title: 基本
---

一般用于列表加载更多，配合 disabled 属性控制触发的频次

```jsx
import { LoadMore } from '@hankliu/hankliu-ui';

class Demo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      count: [1, 2],
      hasMore: true,
    };
  }

  loadMore = () => {
    let { count } = this.state;
    console.log(count.length);
    if (count.length < 80) {
      console.log('---will load more data');
      this.setState({ loading: true });
      let l = 4;
      while (l > 0) {
        count.push(l);
        l--;
      }
      setTimeout(() => {
        this.setState({ count, loading: false });
      }, 20000);
    } else {
      this.setState({ hasMore: false });
    }
  };

  render() {
    let { count, loading, hasMore } = this.state;
    return (
      <div className="scroll-wrap">
        <ul>
          {count.map((value, idx) => (
            <li key={idx} />
          ))}
        </ul>
        <LoadMore
          disabled={loading}
          onEnter={this.loadMore}
          visible={hasMore}
        />
      </div>
    );
  }
}

ReactDOM.render(<Demo />, mountNode);
```

<style>
  #components-load-more-demo-basic .scroll-wrap
  {
    height: 300px;
    overflow-y: auto;
  }
  #components-load-more-demo-basic ul li
  {
    background-color: #eee;
    border-radius: 4px;
    height: 20px;
    margin-bottom: 10px;
  }
</style>
