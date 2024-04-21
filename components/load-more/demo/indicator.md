---
order: 0
title: 自定义加载指示符
---

可以通过设置 indicator 属性来自定义加载指示符

```jsx
import { LoadMore, Icon } from '@hankliu/hankliu-ui';
import SyncOutlined from '@hankliu/icons/lib/icons/SyncOutlined';

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
      }, 8000);
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
          indicator={<SyncOutlined spin />}
        />
      </div>
    );
  }
}

ReactDOM.render(<Demo />, mountNode);
```

<style>
  #components-load-more-demo-indicator .scroll-wrap
  {
    height: 300px;
    overflow-y: auto;
  }
  #components-load-more-demo-indicator ul li
  {
    background-color: #eee;
    border-radius: 4px;
    height: 20px;
    margin-bottom: 10px;
  }
  #components-load-more-demo-indicator .icon {
    font-size: 40px;
    color: var(--color-primary-light);
    animation: fading 2s infinite;
    animation-fill-mode: both;
    animation-timing-function: ease-in-out;
    display:block;
  }
</style>
