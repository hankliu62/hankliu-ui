---
order: 3
title: 视频章节
---

视频章节功能。

```jsx
import { VideoPlayer, Button } from '@hankliu/hankliu-ui';
import video from './video/pys-2.25.6.mp4';


const spriteData = {
  mode: 'percentage',
  interval: 0.1,
  gridSize: [5, 5],
  blockSize: [160, 90],
  fillColor: [0, 0, 0],
  groups: [
    {
      startTime: 0,
      endTime: 360,
      url:
        'https://c.kuai.360.cn/kjji/activity/pc/kjj.mp4',
    },
    {
      startTime: 360,
      endTime: 720,
      url:
        'https://c.kuai.360.cn/kjji/activity/pc/kjj.mp4',
    },
    {
      startTime: 720,
      endTime: 1120,
      url:
        'https://c.kuai.360.cn/kjji/activity/pc/kjj.mp4',
    },
    {
      startTime: 1120,
      endTime: 1480,
      url:
        'https://c.kuai.360.cn/kjji/activity/pc/kjj.mp4',
    },
    {
      startTime: 1480,
      endTime: 1840,
      url:
        'https://c.kuai.360.cn/kjji/activity/pc/kjj.mp4',
    },
    {
      startTime: 1840,
      endTime: 2240,
      url:
        'https://c.kuai.360.cn/kjji/activity/pc/kjj.mp4',
    },
    {
      startTime: 2240,
      endTime: 2600,
      url:
        'https://c.kuai.360.cn/kjji/activity/pc/kjj.mp4',
    },
    {
      startTime: 2600,
      endTime: 2960,
      url:
        'https://c.kuai.360.cn/kjji/activity/pc/kjj.mp4',
    },
    {
      startTime: 2960,
      endTime: 3360,
      url:
        'https://c.kuai.360.cn/kjji/activity/pc/kjj.mp4',
    },
    {
      startTime: 3360,
      endTime: 3720,
      url:
        'https://c.kuai.360.cn/kjji/activity/pc/kjj.mp4',
    },
    {
      startTime: 3720,
      endTime: 4080,
      url:
        'https://c.kuai.360.cn/kjji/activity/pc/kjj.mp4',
    },
    {
      startTime: 4080,
      endTime: 4480,
      url:
        'https://c.kuai.360.cn/kjji/activity/pc/kjj.mp4',
    },
    {
      startTime: 4480,
      endTime: 4840,
      url:
        'https://c.kuai.360.cn/kjji/activity/pc/kjj.mp4',
    },
    {
      startTime: 4840,
      endTime: 5240,
      url:
        'https://c.kuai.360.cn/kjji/activity/pc/kjj.mp4',
    },
    {
      startTime: 5240,
      endTime: 5600,
      url:
        'https://c.kuai.360.cn/kjji/activity/pc/kjj.mp4',
    },
    {
      startTime: 5600,
      endTime: 5960,
      url:
        'https://c.kuai.360.cn/kjji/activity/pc/kjj.mp4',
    },
    {
      startTime: 5960,
      endTime: 6360,
      url:
        'https://c.kuai.360.cn/kjji/activity/pc/kjj.mp4',
    },
    {
      startTime: 6360,
      endTime: 6720,
      url:
        'https://c.kuai.360.cn/kjji/activity/pc/kjj.mp4',
    },
    {
      startTime: 6720,
      endTime: 7080,
      url:
        'https://c.kuai.360.cn/kjji/activity/pc/kjj.mp4',
    },
    {
      startTime: 7080,
      endTime: 7480,
      url:
        'https://c.kuai.360.cn/kjji/activity/pc/kjj.mp4',
    },
    {
      startTime: 7480,
      endTime: 7840,
      url:
        'https://c.kuai.360.cn/kjji/activity/pc/kjj.mp4',
    },
    {
      startTime: 7840,
      endTime: 8200,
      url:
        'https://c.kuai.360.cn/kjji/activity/pc/kjj.mp4',
    },
    {
      startTime: 8200,
      endTime: 8600,
      url:
        'https://c.kuai.360.cn/kjji/activity/pc/kjj.mp4',
    },
    {
      startTime: 8600,
      endTime: 8960,
      url:
        'https://c.kuai.360.cn/kjji/activity/pc/kjj.mp4',
    },
    {
      startTime: 8960,
      endTime: 9320,
      url:
        'https://c.kuai.360.cn/kjji/activity/pc/kjj.mp4',
    },
    {
      startTime: 9320,
      endTime: 9720,
      url:
        'https://c.kuai.360.cn/kjji/activity/pc/kjj.mp4',
    },
    {
      startTime: 9720,
      endTime: 10080,
      url:
        'https://c.kuai.360.cn/kjji/activity/pc/kjj.mp4',
    },
    {
      startTime: 10080,
      endTime: 10480,
      url:
        'https://c.kuai.360.cn/kjji/activity/pc/kjj.mp4',
    },
    {
      startTime: 10480,
      endTime: 10840,
      url:
        'https://c.kuai.360.cn/kjji/activity/pc/kjj.mp4',
    },
    {
      startTime: 10840,
      endTime: 11200,
      url:
        'https://c.kuai.360.cn/kjji/activity/pc/kjj.mp4',
    },
    {
      startTime: 11200,
      endTime: 11560,
      url:
        'https://c.kuai.360.cn/kjji/activity/pc/kjj.mp4',
    },
    {
      startTime: 11560,
      endTime: 11920,
      url:
        'https://c.kuai.360.cn/kjji/activity/pc/kjj.mp4',
    },
    {
      startTime: 11920,
      endTime: 12280,
      url:
        'https://c.kuai.360.cn/kjji/activity/pc/kjj.mp4',
    },
  ],
};
class Card extends React.Component {
  state = {
    source: video,
    poster:
      'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    videoChapterList: [
      {
        startTime: 0,
        endTime: 2200,
        sceneNumber: '1',
      },
      {
        startTime: 2200,
        endTime: 6960,
        sceneNumber: '2',
      },
      {
        startTime: 6960,
        endTime: 9000,
        sceneNumber: '3',
      },
      {
        startTime: 9000,
        endTime: 10480,
        sceneNumber: '4',
      },
      {
        startTime: 10480,
        endTime: 11480,
        sceneNumber: '5',
      },
      {
        startTime: 11480,
        endTime: 12240,
        sceneNumber: '6',
      },
      {
        startTime: 12240,
        endTime: 13640,
        sceneNumber: '7',
      },
      {
        startTime: 13640,
        endTime: 15070,
        sceneNumber: '8',
      },
    ].map(item => {
      const { startTime, endTime } = item;
      return {
        startTime: startTime / 1000,
        endTime: endTime / 1000,
      };
    }),
    previewFrameData: {
      horizontalPreviewFrameCount: spriteData.gridSize[0],
      verticalPreviewFrameCount: spriteData.gridSize[1],
      previewFrameWidth: spriteData.blockSize[0],
      previewFrameHeight: spriteData.blockSize[1],
      previewFrameGroup: spriteData.groups.map(item => {
        const { startTime, endTime, url } = item;
        return {
          startTime: startTime / 1000,
          endTime: endTime / 1000,
          url,
        };
      }),
    },
  };

  changeSource = () => {
    this.setState({
      source:
        'https://c.kuai.360.cn/kjji/activity/pc/kjj.mp4',
      poster:
        'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    });
  };

  render() {
    let { source, poster, videoChapterList, previewFrameData } = this.state;
    return (
      <div>
        <VideoPlayer
          source={source}
          poster={poster}
          fit="flex"
          autoplay
          loop
          videoChapterList={videoChapterList}
          previewFrameData={previewFrameData}
        />
        <br />
        <br />
        <Button onClick={this.changeSource}>Change Video Source</Button>
      </div>
    );
  }
}

ReactDOM.render(<Card />, mountNode);
```
