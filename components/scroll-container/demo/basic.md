---
order: 0
title:
  zh-CN: 基本
  en-US: Basic
---

## zh-CN

用于需要滚动条的容器，滚动条不会占用内容宽度

## en-US

The simplest usage.

```jsx
import { ScrollContainer } from '@hankliu/hankliu-ui';

class Demo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      count: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
    };
  }

  handleScroll(e) {
    console.log(e);
  }

  render() {
    let { count, loading } = this.state;
    return (
      <div className="demo-scroll-wrap">
        <ScrollContainer maxHeight={200} indicated={true} onScroll={this.handleScroll}>
          <ul>
            {count.map((value, idx) => (
              <li key={idx} />
            ))}
          </ul>
        </ScrollContainer>
      </div>
    );
  }
}

ReactDOM.render(<Demo />, mountNode);
```

<style>
  #components-scroll-container-demo-basic .demo-scroll-wrap
  {
    /* width: 300px; */
    /* padding-right: 30px; */
    background-color: #f0fbf9;
  }
  #components-scroll-container-demo-basic li
  {
    background-color: #eee;
    border-radius: 4px;
    height: 20px;
    margin-bottom: 10px;
  }
</style>
