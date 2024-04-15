---
category: Components
subtitle: 视频播放器
type: 数据展示
cols: 1
title: VideoPlayer
---

## API

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| source | 视频地址 | string | 无 |
| ratio | 播放器宽高比，可通过 ratio 来自动设置播放器高度 | number | 16 / 9 |
| width | 播放器宽度 | number\|string | '100%' |
| height | 播放器高度 | number\|string | - |
| fit | 设置视频的布局方式，可选 `flex` [参考说明](#fit) | string | 'auto' |
| autoplay | 自动播放 | boolean | false |
| loop | 设置循环播放 | boolean | false |
| download | 支持下载，基于 a 标签的 download 来实现 | boolean | false |
| poster | 默认（第一帧）图片| string | 无 |
| muted | 是否静音 | boolean | false |
| size | 大小配置，可选值 `small` | string | - |
| onEnded | 视频播放完的事件 | (e) => void | - |
| onError | 视频发生错误的事件 | (e) => void | - |
| customToggleFS | 自定义切换全屏 | (isFullScreen: boolean) => void | - |
| onTimeUpdate | 视频播放时间更新事件 | (time: number) => void | - |
| videoChapterList | 视频章节数据 | VideoChapterItem[] | - |
| previewFrameData | 视频预览帧数据 | PreviewFrameData | - |


### VideoChapterItem
| 参数 | 说明 | 类型 |
| --- | --- | --- |
| startTime | 章节开始时间（毫秒） | number |
| endTime | 章节开始时间（毫秒） | number |

### previewFrameData
| 参数 | 说明 | 类型 |
| --- | --- | --- |
| horizontalPreviewFrameCount |水平方向预览帧的数量 | number |
| verticalPreviewFrameCount | 竖直方向预览帧的数量 | number |
| previewFrameWidth | 预览帧宽度 | number |
| previewFrameHeight | 预览帧高度 | number |
| previewFrameGroup | 预览帧组 | PreviewFrameItem[] |


### PreviewFrameItem
| 参数 | 说明 | 类型 |
| --- | --- | --- |
| startTime |预览帧组的开始时间 | number |
| endTime | 预览帧组的结束时间 | number |
| url | 预览帧组图片链接 | string |

#### 高度设置

- 默认是通过 ratio 来计算高度 = `width / ratio`
- 可以通过设置 height 来指定高度，可以将 height 设置为 `auto` 让视频自己计算高度

### fit

- `auto`：保持视频原有尺寸比例进行缩放，保证替换内容尺寸一定可以在容器里面放得下。因此可能会在容器内留下空白

- `flex`: 在视频尺寸小于容器大小的情况下，保持原有尺寸居中显示，如果尺寸超出容器大小则使用 auto 代替

### Ref 方法

- `toggleFS` 切换全屏/普通模式
- `play` 播放
- `pause` 暂停
- `setPlayerCurrentTime` 设置播放时间

