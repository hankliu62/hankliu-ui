---
order: 0
title: 基本
---

基本用法。

```jsx
import { AudioPlayer } from '@hankliu/hankliu-ui';
import audio from './audio/youcaihong.mp3';

class Card extends React.Component {
  state = {
    source: audio,
  };

  render() {
    let { source } = this.state;
    return (
      <div>
        <AudioPlayer source={source} />
      </div>
    );
  }
}

ReactDOM.render(<Card />, mountNode);
```
