---
category: Components
subtitle: 画廊
type: 数据展示
title: Gallery
---

用于多媒体文件的预览。

## API

| 参数        | 说明           | 类型             | 默认值       |
|------------|----------------|------------------|--------------|
| open    | 画廊是否可见 | Boolean         | false        |
| items      | 多媒体文件列表         |   [GalleryItem](#GalleryItem)[]          | 无           |
| index      | 从第 index+1 张图片开始显示| Number           | 0            |
| onClose    | 点击右上角叉的回调 | function(e)      | 无           |
| onChange    | 改变预览元素的回调 | function(index, direction)      | 无           |
| sidebar   | 添加 sidbar |    ReactNode       | -         |
| sidebarPosition   | sidebar 位置 |    'right' \| 'left'       | 'right'        |
| showCount  | 是否显示数量     | Boolean          | true         |
| download   | 下载按钮是否可见  | Boolean          | true         |
| downloadFile  | 自定义下载方法  | (url, name) => {}    | -         |

### Gallery.Panel

获取 Gallery 的内容面板

| 参数        | 说明           | 类型             | 默认值       |
|------------|----------------|------------------|--------------|
| items      | 多媒体文件列表         |   [GalleryItem](#GalleryItem)[]          | 无           |
| index      | 从第 index+1 张图片开始显示| Number           | 0            |
| onChange    | 改变预览元素的回调 | function(index, direction)      | 无           |
| download   | 下载按钮是否可见  | Boolean          | true         |
| downloadFile  | 自定义下载方法  | (url, name) => {}    | -         |
| width   | 设置面板宽度  | string \| number          |  '100%'        |
| height   | 设置面板高度 | string \| number          |  '100%'        |
| style   | 设置面板的样式 |   Style        |  -        |
| showCount  | 是否显示数量  | Boolean  | true  |
| className   | 添加面板的 class | string          |  -      |


### Gallery.ImagePanel
| 参数       | 说明           | 类型             | 默认值       |
|------------|----------------|------------------|--------------|
| style   | 设置图片面板的样式 |   Style        |  -        |
| className   | 添加图片面板的 class | string          |  -      |
| src    | 文件地址 | string | - |
| w      | 文件宽度，type 为 `virtual-image` 时必须指定 | number | - |
| h      | 文件高度，type 为 `virtual-image` 时必须指定 | number | - |
| onStyleChange  | 图片样式变动时的回调，type 为 `image` `virtual-image` 时有效 | (style) => void | - |


#### GalleryItem
| 参数       | 说明           | 类型             | 默认值       |
|------------|----------------|------------------|--------------|
| type   | 文件类型，可选值 `video` `image` `virtual-image` `custom` | string | image |
| src    | 文件地址，type 为 `video` `image` 时有效 | string | - |
| component | 自定义渲染内容，type 为 `custom` 或 `virtual-image` 时必须指定 | ReactNode \| (style) => ReactNode | - |
| w      | 文件宽度，type 为 `virtual-image` 时必须指定 | number | - |
| h      | 文件高度，type 为 `virtual-image` 时必须指定 | number | - |
| name   | 文件名称 | string | - |
| title  | 文件描述 | string | - |
| onStyleChange  | 图片样式变动时的回调，type 为 `image` `virtual-image` 时有效 | (style) => void | - |

<style>
.code-box-demo .ant-btn {
  margin-right: 8px;
  margin-bottom: 8px;
}
</style>
