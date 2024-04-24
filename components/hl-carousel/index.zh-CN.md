---
category: Components
type: 数据展示
title: HlCarousel
subtitle: 走马灯
cover: https://gw.alipayobjects.com/zos/antfincdn/%24C9tmj978R/Carousel.svg
---

基于 HankLiu 内部需求封装的 Carousel 组件，在 Antd Carousel 组件基础上添加了 goTo, next 和 prev 方法，添加了 Scroll 组件，其余参数与用法参考 [Carousel](/components/carousel-cn/) 组件。

## API

### HlCarousel

| 名称                           | 描述                                              |
| ------------------------------ | ------------------------------------------------- |
| goTo(slideNumber, dontAnimate) | 切换到指定面板, dontAnimate = true 时，不使用动画 |
| next()                         | 切换到下一面板                                    |
| prev()                         | 切换到上一面板                                    |

更多 API 可参考：<https://react-slick.neostack.com/docs/api>

### Scroll

| 参数           | 说明                    | 类型       | 默认值 | 版本 |
| -------------- | ----------------------- | ---------- | ------ | ---- |
| slideWidth     | 外层容器总长度          | number     | -      |      |
| slidesToScroll | slide 的个数            | CSS Object | ---    |      |
| nextArrowStyle | 向左滑动箭头            | CSS Object | -      |      |
| prevArrowStyle | 向右滑动箭头            | CSS Object | -      |      |
| className      | 外层容器 className 属性 | string     | -      |      |
| style          | 外层容器的样式          | CSS Object | -      |      |
