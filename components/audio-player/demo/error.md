---
order: 3
title: 加载错误事件
---

加载错误事件

````jsx
import { AudioPlayer } from '@hankliu/hankliu-ui';

class Card  extends React.Component{

  state = {
    source: 'https://ws.stream.qqmusic.qq.com/C400001RZl5x2xQw6C.m4a?guid=2220211&vkey=17C7398CCC576748859419CFDD13EAC8DB04A64DAF2DAE7262F2E4399B0719DC1D68AFC2479DF983D7FD06D3C2FE4B5EA3E89335C65A6F3D&uin=626567678&fromtag=103032'
  }

  handleError = (e) => {
    console.log(e);
  }

  render() {
    let { source } = this.state;
    return (
      <div>
        <AudioPlayer source={source} onError={this.handleError} />
      </div>
    );
  }
}

ReactDOM.render(<Card />, mountNode);
````
