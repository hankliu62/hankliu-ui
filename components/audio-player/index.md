---
category: Components
subtitle: 音频播放器
type: 数据展示
cols: 1
title: AudioPlayer
---

## API

| 参数        | 说明               | 类型        | 默认值          |
| ----------- | ------------------ | ----------- | --------------- |
| source      | 音频地址           | string      | 无              |
| width       | 播放器宽度         | string      | '100%'          |
| height      | 播放器高度         | string      | 'auto'          |
| autoplay    | 自动播放           | boolean     | false           |
| loop        | 设置循环播放       | boolean     | false           |
| download    | 设置下载按钮       | boolean     | true            |
| downloadUrl | 下载链接           | string      | source 音频地址 |
| errorText   | 设置加载错误文字   | string      | 音频加载失败    |
| loadingNode | 设置 loading 样式  | any         | Spin            |
| onError     | 音频发生错误的事件 | (e) => void | -               |

#### 高宽度

- 最小高度为 `35px`
- 最小宽度为 `250px`
