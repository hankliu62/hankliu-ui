---
order: 1
title:
  zh-CN: 响应式盒子
  en-US: Box
---

基础用法


````jsx
import { Responsive } from '@hankliu/hankliu-ui';

class App extends React.Component {
  state = { value: 2 }

  change = (value) => {
    this.setState({value});
  }

  render() {
    const { value } = this.state
    return (
      <Responsive.Box width={300} ratio={5/4}>
        <div style={{width: '100%', height: '100%', background: '#eee'}}></div>
      </Responsive.Box>
    )
  }
};

ReactDOM.render(<App />, mountNode);
````
