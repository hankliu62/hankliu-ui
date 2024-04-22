---
order: 2
title: 支持属性
---

支持属性

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
        <AudioPlayer source={source} autoplay={false} loop={true} />
      </div>
    );
  }
}

ReactDOM.render(<Card />, mountNode);
```
