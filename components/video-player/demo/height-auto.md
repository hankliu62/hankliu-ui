---
order: 1
title: auto height
---

自适应高度

````jsx
import { VideoPlayer, Button } from '@hankliu/hankliu-ui';
import video from './video/1.mp4';

class Card  extends React.Component{

  state = {
    source: video,
    poster: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'
  }

  changeSource = () => {
    this.setState({
      source: 'https://c.kuai.360.cn/kjji/activity/pc/kjj.mp4',
      poster: 'https://gw.alipayobjects.com/zos/antfincdn/LlvErxo8H9/photo-1503185912284-5271ff81b9a8.webp'
    })
  }

  render() {
    let { source, poster } = this.state;
    return (
      <div>
        <VideoPlayer
          source={source}
          poster={poster}
          height="auto"
        />
        <br/>
        <br/>
        <Button onClick={this.changeSource}>Change Video Source</Button>
      </div>
    );
  }
}

ReactDOM.render(<Card />, mountNode);

````
