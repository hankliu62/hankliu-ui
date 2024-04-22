---
order: 0
title: HankLiu UI of React
---

`hankliu-ui` 是基于 HankLiu UI 设计体系的 React UI 组件库，主要用于研发企业级中后台产品。

<div class="pic-plus">
  <img width="150" src="https://hankliu62.github.io/frontend/favicon.ico"/>
  <span>+</span>
  <img width="160" src="https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg"/>
</div>

<style>
.pic-plus > * {
  display: inline-block !important;
  vertical-align: middle;
}
.pic-plus span {
  margin: 0 20px;
  color: #aaa;
  font-size: 30px;
}
</style>

---

## ✨ 特性

- 🌈 提炼自企业级中后台产品的交互语言和视觉风格。
- 📦 开箱即用的高质量 React 组件。
- 🛡 使用 TypeScript 开发，提供完整的类型定义文件。
- ⚙️ 全链路开发和设计工具体系。
- 🌍 数十个国际化语言支持。
- 🎨 深入每个细节的主题定制能力。

## 兼容环境

- 现代浏览器和 IE11（需要 [polyfills](https://ant.design/docs/react/getting-started-cn#兼容性)）。
- 支持服务端渲染。
- [Electron](https://www.electronjs.org/)

| [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt="IE / Edge" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>IE / Edge | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Firefox | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Chrome | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Safari | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/opera/opera_48x48.png" alt="Opera" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Opera | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/electron/electron_48x48.png" alt="Electron" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Electron |
| --- | --- | --- | --- | --- | --- |
| IE11, Edge | last 2 versions | last 2 versions | last 2 versions | last 2 versions | last 2 versions |

对于 IE 系列浏览器，需要提供相应的 Polyfill 支持，建议使用 [@babel/preset-env](https://babeljs.io/docs/en/babel-preset-env) 来解决浏览器兼容问题。如果你在使用 [umi](http://umijs.org/)，可以直接使用 [targets](https://umijs.org/zh/config/#targets) 配置。

> 不支持 React 15 和 IE9/10。

## 版本

- 稳定版：[![npm package](http://img.shields.io/npm/v/@hankliu/hankliu-ui.svg?style=flat-square)](https://www.npmjs.org/package/@hankliu/hankliu-ui)

你可以订阅：https://github.com/hankliu62/hankliu-ui/releases.atom 来获得版本发布的通知。

## 安装

### 使用 npm 或 yarn 安装

**我们推荐使用 npm 或 yarn 的方式进行开发**，不仅可在开发环境轻松调试，也可放心地在生产环境打包部署使用，享受整个生态圈和工具链带来的诸多好处。

```bash
$ npm install @hankliu/hankliu-ui --save
```

```bash
$ yarn add @hankliu/hankliu-ui
```

如果你的网络环境不佳，推荐使用 [cnpm](https://github.com/cnpm/cnpm)。

### 浏览器引入

在浏览器中使用 `script` 和 `link` 标签直接引入文件，并使用全局变量 `hlui`。

我们在 npm 发布包内的 `hlui/dist` 目录下提供了 `hlui.js` `hlui.css` 以及 `hlui.min.js` `hlui.min.css`。

> **强烈不推荐使用已构建文件**，这样无法按需加载，而且难以获得底层依赖模块的 bug 快速修复支持。

> 注意：`hlui.js` 和 `hlui.min.js` 依赖 `react/react-dom/moment`，请确保提前引入这些文件。

## 示例

```jsx
import { DatePicker } from '@hankliu/hankliu-ui';

ReactDOM.render(<DatePicker />, mountNode);
```

引入样式：

```jsx
import '@hankliu/hankliu-ui/dist/hlui.css'; // or '@hankliu/hankliu-ui/dist/hlui.less'
```

### 按需加载

`hankliu-ui` 的 JS 代码默认支持基于 ES modules 的 tree shaking。

1. 使用 [`babel-plugin-import`](https://github.com/ant-design/babel-plugin-import)（推荐）。

```.babelrc
// .babelrc or babel-loader option
{
  "plugins": [
    [
      "babel-plugin-import",
      {
        "libraryName": "@hankliu/hankliu-ui",
        "libraryDirectory": "lib",
        "style": "css" `style: true` 会加载 less 文件
      }
    ]
  ]
}
```

然后只需从 hankliu-ui 引入模块即可，无需单独引入样式。等同于下面手动引入的方式。

```jsx
// babel-plugin-import 会帮助你加载 JS 和 CSS
import { DatePicker } from '@hankliu/hankliu-ui';
```

### TypeScript

`hankliu-ui` 使用 TypeScript 进行书写并提供了完整的定义文件。

## 链接

- [首页](/)
- [组件库](/components/overview)
- [更新日志](/changelog)
- [HankLiu UI 图标](https://github.com/hankliu62/icons)
- [HankLiu UI 色彩](https://github.com/hankliu62/colors)

> 如果你的公司和产品使用了 HankLiu UI，欢迎到 [这里](https://github.com/hankliu62/hankliu-ui/issues) 留言。
