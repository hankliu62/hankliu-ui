---
category: Components
subtitle: 手机号码输入框
type: 数据录入
title: InputPhone
---

输入手机号码

## 何时使用

当需要输入手机号码时

## API

属性如下

| 成员             | 说明                        | 类型                       | 默认值 |
| ---------------- | --------------------------- | -------------------------- | ------ |
| placeholder      | 设置 placeholder            | string                     |        |
| size             | 输入框大小                  | string                     | 无     |
| className        | 添加 className              | string                     | -      |
| style            | 添加 style                  | object                     | -      |
| areaCode         | 区号                        | string                     | -      |
| onAreaCodeChange | 区号变化时的回调            | (areaCode: string) => void | -      |
| phone            | 手机号                      | string                     | -      |
| onPhoneChange    | 手机号变化时的回调          | (phone: string) => void    | -      |
| onPhoneBlur      | 手机号输入框 Blur 时的回调  | (phone: string) => void    | -      |
| onPhoneFocus     | 手机号输入框 Focus 时的回调 | (phone: string) => void    | -      |
