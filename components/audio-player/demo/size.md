---
order: 1
title: 可配置宽高
---

可配置宽高

```jsx
import { AudioPlayer } from '@hankliu/hankliu-ui';
import audio from './audio/flower-dance.mp3';

class Card extends React.Component {
  state = {
    source: audio,
  };

  render() {
    let { source } = this.state;
    return (
      <div>
        <AudioPlayer source={source} width="250px" height="35px" />
      </div>
    );
  }
}

ReactDOM.render(<Card />, mountNode);
```
