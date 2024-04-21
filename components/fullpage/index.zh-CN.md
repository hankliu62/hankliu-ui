---
category: Components
subtitle: 全屏滚动
type: 数据展示
title: Fullpage
cols: 1
---

一个类似 `fullpage.js` 的 `React` 实现的组件，支持全屏滚动，每次滚动一页，具有非常可观的视觉效果。

## 何时使用

需要全屏滚动的页面时，可以查看[详细文档](https://hankliu62.github.io/rc-fullpage)

## API

全屏滚动组件 `API` 如下所示，具体参考上面示例：

> 自 `hankliu-ui@0.0.2` 版本开始提供该组件。

| 名称 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| className | 组件外层元素 Class | string | - |
| prefixCls | 组件外层元素 Class 前缀 | string | hlui-fullpage |
| delay | 持续动画时间(ms) | number | 1000 |
| verticalAlign | 是否为垂直方向全屏滚动 | boolean | true |
| scrollBar | 是否使用浏览器默认滚动条 | boolean | false |
| dots | 是否显示面板指示点 | boolean | true |
| sectionClassName | 组件 Section 元素的 Class | string | hlui-fullpage-section |
| anchors | 对应 section 列表元素的锚点名称列表 | string[] | - |
| activeClass | 当前正在显示的 Section 元素的 Class | string | active |
| sectionPaddingTop | Section 元素的上边距 | string \| number | 0 |
| sectionPaddingBottom | Section 元素的下边距 | string \| number | 0 |
| shortcutKey | 是否支持箭头快捷键 | boolean | true |
| touchable | 是否支持 Touch 事件 | boolean | true |
| activeSection | 默认显示的 Section 索引 | number | 0 |
| dotsAnchorClass | 面板指示点中锚点元素的 Class | string | - |
| dotsClass | 面板指示点元素的 Class | string | - |
