---
category: Components
type: 数据展示
cols: 4
title: CardSprite
subtitle: 卡片雪碧图
---


## 何时使用

针对视频文件，提供鼠标悬浮显示位置对应帧缩略图功能
## 注意
- 容器默认宽高为父组件的宽高
- 样式默认`position`为`absolute`，所以父组件的`position`不能为`static`

## API

```ts

interface ISprite {
  block_size: [number, number],
  groups: {
      file_url: string,
      end_at: number
    }[]
}

```


| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| sprite | spite数据对象 | ISprite | \ |

