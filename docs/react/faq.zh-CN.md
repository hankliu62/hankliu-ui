---
order: 11
title: FAQ
---

以下整理了一些 HankLiu UI 社区常见的问题和官方答复，在提问之前建议找找有没有类似的问题。此外我们也维护了一个反馈较多 [FAQ issues 标签](http://u.ant.design/faq) 亦可参考。

---

### 你们会提供 Sass/Stylus 等格式的样式文件吗？

暂无计划。事实上你可以使用工具（请自行 Google）将 Less 转换成 Sass/Stylus 等。

### 如何修改 HankLiu UI 的默认主题？

可以参考[定制主题](/docs/react/customize-theme)。

### 如何修改 HankLiu UI 组件的默认样式？

你可以覆盖它们的样式，但是我们不推荐这么做。hankliu-ui 是一系列 React 组件，但同样是一套设计规范。

### 如何使用 Day.js 替换 Moment.js 来减小打包大小？

可以参考[替换 Moment.js](/docs/react/replace-moment)。

### 当我动态改变 `defaultValue` 的时候它并没有生效。

`Input`/`Select` 等的 `defaultXxxx`（例如 `defaultValue`）只有在第一次渲染的时候有效，这是 React 的规范，请阅读 [React 的文档](https://zh-hans.reactjs.org/docs/forms.html#controlled-components)。

### 为什么修改组件传入的对象或数组属性组件不会更新？

hankliu-ui 内部会对 props 进行浅比较实现性能优化。当状态变更，你总是应该传递一个新的对象。具体请参考 [React 的文档](https://zh-hans.reactjs.org/docs/thinking-in-react.html)

### 当我设置了 `Input`/`Select` 等的 `value` 时它就无法修改了。

尝试使用 `onChange` 来改变 `value`，请参考 [React 的文档](https://zh-hans.reactjs.org/docs/forms.html#controlled-components)。

### 多个组件放一排时没有垂直对齐怎么办？

尝试使用 [Space](/components/space/) 组件来使他们对齐。

### hankliu-ui 覆盖了我的全局样式！

是的，hankliu-ui 在设计的时候就是用来开发一个完整的应用的，为了方便，我们覆盖了一些全局样式，现在还不能移除，想要了解更多请追踪 [这个 issue](https://github.com/hankliu62/hankliu-ui/issues/4331)，或者参考这个教程 [How to avoid modifying global styles?](/docs/react/customize-theme#How-to-avoid-modifying-global-styles)

### 我没法安装 `hankliu-ui` 和 `hankliu-ui` 的依赖，顺便提一句，我在中国大陆。

那啥，试试 [cnpm](http://npm.taobao.org/)。

### 我在 package.json 里将 `dependencies.@hankliu/hankliu-ui` 添加到了 git repository 中，但是没有用。

当然没用了，请使用 npm 安装 `@hankliu/hankliu-ui`。

### `message` 和 `notification` 是小写的，但是其他的组件都是首字母大写的，这是手滑吗？

不，因为 `message` 是一个函数，而不是一个 React 组件。

### `hankliu-ui` 会像 `React` 那样提供单文件引入吗？

是的，[你可以用 script 标签引入](/docs/react/introduce-cn)。但是我们推荐使用 `npm` 来引入 `hankliu-ui`，这样维护起来更简单方便。

### 在我的网络环境下没法获取到 `icon` 文件。

在 `0.0.1` 版本后，[我们会使用 svg 图标](/components/icon#svg-icons)，你就不用担心本地部署 iconfont 的问题了！

### 如何拓展 hankliu-ui 的组件？

如果你需要一些 hankliu-ui 没有包含的功能，你可以尝试通过 [HOC](https://gist.github.com/sebmarkbage/ef0bf1f338a7182b6775) 拓展 hankliu-ui 的组件。 [更多](https://medium.com/@dan_abramov/mixins-are-dead-long-live-higher-order-components-94a0d2f9e750#.eeu8q01s1)

### 我的组件默认语言是英文的？如何切回中文的。

请尝试使用 [ConfigProvider](/components/config-provider/#components-config-provider-demo-locale) 组件来包裹你的应用。

如果日期组件的国际化仍未生效，请配置 `moment.locale('zh-cn')` 并**检查你本地的 `moment` 版本和 `hankliu-ui` 依赖的 `moment` 版本是否一致**。

### 开启了 Content Security Policy (CSP) 如何处理动态样式？

你可以通过 [ConfigProvider](/components/config-provider/#Content-Security-Policy) 来配置 `nonce` 属性。

### ConfigProvider 设置 `prefixCls` 后，message/notification/Modal.confirm 生成的节点样式丢失了？

message/notification/Modal.confirm 等静态方法不同于 `<Button />` 的渲染方式，是单独渲染在 `ReactDOM.render` 生成的 DOM 树节点上，无法共享 ConfigProvider 提供的 context 信息。你有两种解决方式：

1. 使用官方提供的 [message.useMessage](/components/message-cn/#components-message-demo-hooks)、[notification.useNotification](/components/notification/#%E4%B8%BA%E4%BB%80%E4%B9%88-notification-%E4%B8%8D%E8%83%BD%E8%8E%B7%E5%8F%96-context%E3%80%81redux-%E7%9A%84%E5%86%85%E5%AE%B9%E5%92%8C-ConfigProvider-%E7%9A%84-locale/prefixCls-%E9%85%8D%E7%BD%AE%EF%BC%9F) 和 [Modal.useModal](/components/modal/#%E4%B8%BA%E4%BB%80%E4%B9%88-Modal-%E6%96%B9%E6%B3%95%E4%B8%8D%E8%83%BD%E8%8E%B7%E5%8F%96-context%E3%80%81redux%E3%80%81%E7%9A%84%E5%86%85%E5%AE%B9%E5%92%8C-ConfigProvider-locale/prefixCls-%E9%85%8D%E7%BD%AE%EF%BC%9F) 来调用这些方法。

2. 使用 `ConfigProvider.config` 方法全局设置 `prefixCls`。

```js
ConfigProvider.config({
  prefixCls: 'ant',
});
```

### 如何正确的拼写 HankLiu UI？

- ✅ **HankLiu UI**：用空格分隔的首字母大写单词，指代设计语言。
- ✅ **hankliu-ui**：全小写，指代 React UI 组件库。

---

## 错误和警告

这里是一些你在使用 hankliu-ui 的过程中可能会遇到的错误和警告，但是其中一些并不是 hankliu-ui 的 bug。

### Adjacent JSX elements must be wrapped in an enclosing tag

这里有一篇[来自 StackOverflow 的回答](http://stackoverflow.com/questions/25034994/how-to-correctly-wrap-few-td-tags-for-jsxtransformer)，另外请阅读 [React 的文档](http://facebook.github.io/react/docs/displaying-data.html#components-are-just-like-functions)。

### React.createElement: type should not be null, undefined, boolean, or number. It should be a string (for DOM elements) or a ReactClass (for composite components)

请确保你正确引入了 `hankliu-ui` 的组件。参考 `hankliu-ui` 相应组件的文档，注意你代码中的 typo。

### Failed propType: Invalid prop `AAA` of type `BBB` supplied to `CCC`, expected `DDD`. Check the render method of `EEE`.

请阅读你正在使用版本的 `hankliu-ui` 的文档，确保你传递给 `hankliu-ui` 组件的参数类型正确。

### Unknown option: xxx/package.json.presets

这里有一篇[来自 StackOverflow 的回答](http://stackoverflow.com/questions/33685365/unknown-option-babelrc-presets)可以参考。
