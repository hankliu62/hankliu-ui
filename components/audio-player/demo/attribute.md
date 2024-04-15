---
order: 2
title: 支持属性
---

支持属性

````jsx
import { AudioPlayer } from '@hankliu/hankliu-ui';

class Card  extends React.Component{

  state = {
    source: 'https://github.com/hankliu62/hankliu62.github.com/assets/8088864/d5612b11-1fec-49c1-b802-d5a5bf3a8de2',
  }

  render() {
    let { source } = this.state;
    return (
      <div>
        <AudioPlayer source={source} autoplay={false} loop={true} />
      </div>
    );
  }
}

ReactDOM.render(<Card />, mountNode);
````
