---
order: 7
title: 定制主题
---

HankLiu UI 设计规范和技术上支持灵活的样式定制，以满足业务和品牌上多样化的视觉需求，包括但不限于全局样式（主色、圆角、边框）和指定组件的视觉定制。

![一些配置好的主题](https://zos.alipayobjects.com/rmsportal/zTFoszBtDODhXfLAazfSpYbSLSEeytoG.png)

## HankLiu UI 的样式变量

hankliu-ui 的样式使用了 [Less](http://lesscss.org/) 作为开发语言，并定义了一系列全局/组件的样式变量，你可以根据需求进行相应调整。

以下是一些最常用的通用变量，所有样式变量可以在 [这里](https://github.com/hankliu62/hankliu-ui/blob/master/components/style/themes/default.less) 找到。

```less
@primary-color: #1890ff; // 全局主色
@link-color: #1890ff; // 链接色
@success-color: #52c41a; // 成功色
@warning-color: #faad14; // 警告色
@error-color: #f5222d; // 错误色
@font-size-base: 14px; // 主字号
@heading-color: rgba(0, 0, 0, 0.85); // 标题色
@text-color: rgba(0, 0, 0, 0.65); // 主文本色
@text-color-secondary: rgba(0, 0, 0, 0.45); // 次文本色
@disabled-color: rgba(0, 0, 0, 0.25); // 失效色
@border-radius-base: 2px; // 组件/浮层圆角
@border-color-base: #d9d9d9; // 边框色
@box-shadow-base: 0 3px 6px -4px rgba(0, 0, 0, 0.12), 0 6px 16px 0 rgba(0, 0, 0, 0.08),
  0 9px 28px 8px rgba(0, 0, 0, 0.05); // 浮层阴影
```

如果以上变量不能满足你的定制需求，可以给我们提 issue。

## 定制方式

原理上是使用 less 提供的 [modifyVars](http://lesscss.org/usage/#using-less-in-the-browser-modify-variables) 的方式进行覆盖变量。

### 在 webpack 中定制主题

我们以 webpack@4 为例进行说明，以下是一个 `webpack.config.js` 的典型例子，对 [less-loader](https://github.com/webpack-contrib/less-loader) 的 options 属性进行相应配置。

```diff
// webpack.config.js
module.exports = {
  rules: [{
    test: /\.less$/,
    use: [{
      loader: 'style-loader',
    }, {
      loader: 'css-loader', // translates CSS into CommonJS
    }, {
      loader: 'less-loader', // compiles Less to CSS
+     options: {
+       lessOptions: { // 如果使用less-loader@5，请移除 lessOptions 这一级直接配置选项。
+         modifyVars: {
+           'primary-color': '#1DA57A',
+           'link-color': '#1DA57A',
+           'border-radius-base': '2px',
+         },
+         javascriptEnabled: true,
+       },
+     },
    }],
    // ...other rules
  }],
  // ...other config
}
```

注意：

1. less-loader 的处理范围不要过滤掉 `node_modules` 下的 @hankliu/hankliu-ui 包。
2. `lessOptions` 的配置写法在 [less-loader@6.0.0](https://github.com/webpack-contrib/less-loader/releases/tag/v6.0.0) 里支持。

### 在 Umi 里配置主题

如果你在使用 [Umi](https://umijs.org/zh-CN/config#theme)，那么可以很方便地在项目根目录的 `.umirc.ts` 或 [config/config.ts](https://github.com/hankliu62/hankliu-ui-pro/blob/v5/config/config.ts) 文件中 [theme](https://umijs.org/zh-CN/config#theme) 字段进行主题配置。`theme` 可以配置为一个对象或文件路径。

```js
"theme": {
  "primary-color": "#1DA57A",
},
```

或者 [一个 js 文件](https://github.com/hankliu62/hankliu-ui-pro/blob/b7e7983661eb5e53dc807452e9653e93e74276d4/.webpackrc.js#L18)：

```js
"theme": "./theme.js",
```

### 在 create-react-app 中定制主题

参考 [在 create-react-app 中使用](/docs/react/use-with-create-react-app) 进行配置即可。

### 配置 less 变量文件

另外一种方式是建立一个单独的 `less` 变量文件，引入这个文件覆盖 `hlui.less` 里的变量。

```css
@import '~@hankliu/hankliu-ui/lib/style/themes/default.less';
@import '~@hankliu/hankliu-ui/dist/hlui.less'; // 引入官方提供的 less 样式入口文件
@import 'your-theme-file.less'; // 用于覆盖上面定义的变量
```

注意，这种方式已经载入了所有组件的样式，不需要也无法和按需加载插件 `babel-plugin-import` 的 `style` 属性一起使用。

### 动态主题色

在运行时调整主题色请[参考此处](/docs/react/customize-theme-variable)。

## 没有生效？

注意样式必须加载 less 格式，一个常见的问题就是引入了多份样式，less 的样式被 css 的样式覆盖了。

- 如果你在使用 [babel-plugin-import](https://github.com/hankliu62/babel-plugin-import) 的 `style` 配置来引入样式，需要将配置值从 `'css'` 改为 `true`，这样会引入 less 文件。
- 如果你是通过 `'@hankliu/hankliu-ui/dist/hlui.css'` 引入样式的，改为 `@hankliu/hankliu-ui/dist/hlui.less`。

## 社区教程

- [Using Sass/Scss with React App (create-react-app)](https://medium.com/@mzohaib.qc/using-sass-scss-with-react-app-create-react-app-d03072083ef8)
- [Dynamic Theming in Browser using HankLiu UI](https://medium.com/@mzohaib.qc/ant-design-dynamic-runtime-theme-1f9a1a030ba0)
- [Zero config custom theme generator](https://www.npmjs.com/package/@emeks/antd-custom-theme-generator)
