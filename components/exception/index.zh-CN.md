---
type: 反馈
category: Components
title: Exception
cols: 1
subtitle: 异常
---

一些通用的异常组件，，包含常见 `401`，`403`，`404`，`500`，`502`，`503` 等常见错误码对应的内容。

## 何时使用

当需要网页出现异常时使用。

## API

异常组件 `API` 如下所示，具体参考上面示例：

> 自 `hankliu-ui@0.0.2` 版本开始提供该组件。

| 参数        | 说明                    | 类型           | 默认值                         |
| ----------- | ----------------------- | -------------- | ------------------------------ |
| className   | 组件外层元素 Class      | string         | -                              |
| prefixCls   | 组件外层元素 Class 前缀 | string         | hlui-exception                 |
| code        | 错误码                  | EExceptionCode | -                              |
| description | 错误码对应的描述        | string         | `ExceptionDescriptionEn[code]` |
