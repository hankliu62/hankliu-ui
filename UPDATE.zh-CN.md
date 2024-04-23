---
order: 6
title: 更新说明
toc: false
timeline: false
---

```
🐞 Bug 修复
💄 样式更新/less 变量更新
🆕 新增特性
🔥 极其值得关注的新增特性
🇺🇸🇨🇳🇬🇧 国际化改动，注意这里直接用对应国家/地区的旗帜。
📖 :memo: 文档或网站改进
✅ 新增或更新测试用例
🛎 更新警告/提示信息
⌨️ :wheelchair: 可访问性增强
🗑 废弃或移除
🛠 重构或工具链优化
⚡️ 性能提升
```

---

## 背景

开发一套基于 `AntDesign@4.x` 的 `React UI` 组件库，有自己的主题，丰富 `AntDesign` 的组件。

## 0.0.4

- 🗑 移除 `dist` 文件夹，只支持 `import` 按需引入的方式。
- 🐞 修复按需引入组件时，`Calendar`，`Card` 等组件样式异常的问题。

## 0.0.3

- 🐞 `Watermark` 组件支持 `Modal` 和 `Drawer` 组件。
- 🐞 `Watermark` 组件不存在 `lib/watermark/style/css` 的问题。
- 🐞 `Fullpage` 组件不存在 `lib/fullpage/style/css` 的问题。
- 🆕 新增 `dist` 文件夹，上传编译完整的文件，支持上传到 CDN 中。

## 0.0.2

- 🆕 新增 `Fullpage` 组件。
- 🆕 新增 `Exception` 组件。
- 🆕 新增 `Watermark` 组件。
- 🛠 使用 `@hankliu/colors` 替换 `@ant-design/colors` 组件。
- 🛠 使用 `@hankliu/icons` 替换 `@ant-design/icons` 组件，丰富 Icon 的图标库。
- 🐞 修复使用 `@hankliu/hankliu-ui` 还需要在项目中额外安装 `react-color` 库的问题。

## 0.0.1

- 🐞 修复 DatePicker 样式依赖缺失
- 🆕 Gallery 新增 sidebarPosition、showCount 属性
