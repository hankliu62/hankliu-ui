---
category: Components
type: 通用
title: Captcha
subtitle: 验证码
---

验证码校验：为安全校验提供图形化的校验操作，比如登录，更换手机号，注册，找回密码等场景均可使用。

## API

- `captcha.verify(options)` 返回 `Promise`

### Options

| 属性 | 说明                             | 类型   | 默认值                             |
| ---- | -------------------------------- | ------ | ---------------------------------- |
| lang | 国际化，可选值 `zh-CN` `en` `ja` | string | 会根据 LocaleProvider 的语言来设置 |
