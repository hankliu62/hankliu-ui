---
order: 0
title: 基本
---

最简单的用法。

````jsx
import { PullToRefresh } from '@hankliu/hankliu-ui';

class Demo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: [] };
  }

  render() {
    return (
      <PullToRefresh onRefresh={handleRefresh}>
        <div style={{height: 200, backgroundColor: '#ddd',display: 'flex', justifyContent: 'center',alignItems: 'center'}}>
          下拉刷新
        </div>
      </PullToRefresh>
    )
  }
}

function handleRefresh(resolve, reject) {
  // console.log('refresh');
  setTimeout(resolve, 3000);
}

ReactDOM.render(
  <Demo />
  , mountNode);

````
