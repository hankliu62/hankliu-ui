(window.webpackJsonp=window.webpackJsonp||[]).push([[226],{3780:function(n,s){n.exports={content:["article",{},["h2","安装和初始化"],["p","在开始之前，你可能需要安装 ",["a",{title:null,href:"https://github.com/yarnpkg/yarn/"},"yarn"],"。"],["pre",{lang:"bash",highlighted:'$ yarn create react-app antd-demo\n\n<span class="token comment" spellcheck="true"># or</span>\n\n$ npx create-react-app antd-demo'},["code","$ yarn create react-app antd-demo\n\n# or\n\n$ npx create-react-app antd-demo"]],["p","工具会自动初始化一个脚手架并安装 React 项目的各种必要依赖，如果在过程中出现网络问题，请尝试配置代理或使用其他 npm registry。"],["p","然后我们进入项目并启动。"],["pre",{lang:"bash",highlighted:'$ <span class="token function">cd</span> antd-demo\n$ yarn start'},["code","$ cd antd-demo\n$ yarn start"]],["p","此时浏览器会访问 ",["a",{title:null,href:"http://localhost:3000/"},"http://localhost:3000/"]," ，看到 ",["code","Welcome to React"]," 的界面就算成功了。"],["h2","引入 antd"],["p","这是 create-react-app 生成的默认目录结构。"],["pre",{lang:null,highlighted:'├── README<span class="token punctuation">.</span>md\n├── package<span class="token punctuation">.</span>json\n├── public\n│   ├── favicon<span class="token punctuation">.</span>ico\n│   └── index<span class="token punctuation">.</span>html\n├── src\n│   ├── App<span class="token punctuation">.</span>css\n│   ├── App<span class="token punctuation">.</span>js\n│   ├── App<span class="token punctuation">.</span>test<span class="token punctuation">.</span>js\n│   ├── index<span class="token punctuation">.</span>css\n│   ├── index<span class="token punctuation">.</span>js\n│   └── logo<span class="token punctuation">.</span>svg\n└── yarn<span class="token punctuation">.</span>lock'},["code","├── README.md\n├── package.json\n├── public\n│   ├── favicon.ico\n│   └── index.html\n├── src\n│   ├── App.css\n│   ├── App.js\n│   ├── App.test.js\n│   ├── index.css\n│   ├── index.js\n│   └── logo.svg\n└── yarn.lock"]],["p","现在从 yarn 或 npm 安装并引入 antd。"],["pre",{lang:"bash",highlighted:"$ yarn add antd"},["code","$ yarn add antd"]],["p","修改 ",["code","src/App.js"],"，引入 antd 的按钮组件。"],["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">\'react\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> Button <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'@hankliu/hankliu-ui\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token string">\'./App.css\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> App <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>App<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>primary<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Button<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">export</span> <span class="token keyword">default</span> App<span class="token punctuation">;</span>'},["code","import React from 'react';\nimport { Button } from '@hankliu/hankliu-ui';\nimport './App.css';\n\nconst App = () => (\n  <div className=\"App\">\n    <Button type=\"primary\">Button</Button>\n  </div>\n);\n\nexport default App;"]],["p","修改 ",["code","src/App.css"],"，在文件顶部引入 ",["code","antd/dist/antd.css"],"。"],["pre",{lang:"css",highlighted:'<span class="token atrule"><span class="token rule">@import</span> <span class="token string">\'~antd/dist/antd.css\'</span><span class="token punctuation">;</span></span>'},["code","@import '~antd/dist/antd.css';"]],["p","好了，现在你应该能看到页面上已经有了 antd 的蓝色按钮组件，接下来就可以继续选用其他组件开发应用了。其他开发流程你可以参考 create-react-app 的",["a",{title:null,href:"https://create-react-app.dev/docs/getting-started"},"官方文档"],"。"],["p","我们现在已经把 antd 组件成功运行起来了，开始开发你的应用吧！"],["h2","高级配置"],["p","这个例子在实际开发中还有一些优化的空间，比如无法进行主题配置。"],["p","此时我们需要对 create-react-app 的默认配置进行自定义，这里我们使用 ",["a",{title:null,href:"https://github.com/gsoft-inc/craco"},"craco"]," （一个对 create-react-app 进行自定义配置的社区解决方案）。"],["p","现在我们安装 craco 并修改 ",["code","package.json"]," 里的 ",["code","scripts"]," 属性。"],["pre",{lang:"bash",highlighted:"$ yarn add @craco/craco"},["code","$ yarn add @craco/craco"]],["pre",{lang:"diff",highlighted:'/* package.json */\n"scripts": {\n<span class="token deleted">-   "start": "react-scripts start",</span>\n<span class="token deleted">-   "build": "react-scripts build",</span>\n<span class="token deleted">-   "test": "react-scripts test",</span>\n<span class="token inserted">+   "start": "craco start",</span>\n<span class="token inserted">+   "build": "craco build",</span>\n<span class="token inserted">+   "test": "craco test",</span>\n}'},["code",'/* package.json */\n"scripts": {\n-   "start": "react-scripts start",\n-   "build": "react-scripts build",\n-   "test": "react-scripts test",\n+   "start": "craco start",\n+   "build": "craco build",\n+   "test": "craco test",\n}']],["p","然后在项目根目录创建一个 ",["code","craco.config.js"]," 用于修改默认配置。"],["pre",{lang:"js",highlighted:'<span class="token comment" spellcheck="true">/* craco.config.js */</span>\nmodule<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  <span class="token comment" spellcheck="true">// ...</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>'},["code","/* craco.config.js */\nmodule.exports = {\n  // ...\n};"]],["h3","自定义主题"],["p","按照 ",["a",{title:null,href:"/docs/react/customize-theme"},"配置主题"]," 的要求，自定义主题需要用到类似 ",["a",{title:null,href:"https://github.com/webpack-contrib/less-loader/"},"less-loader"]," 提供的 less 变量覆盖功能。我们可以引入 ",["a",{title:null,href:"https://github.com/DocSpring/craco-less"},"craco-less"]," 来帮助加载 less 样式和修改变量。"],["p","首先把 ",["code","src/App.css"]," 文件修改为 ",["code","src/App.less"],"，然后修改样式引用为 less 文件。"],["pre",{lang:"diff",highlighted:"/* src/App.js */\n<span class=\"token deleted\">- import './App.css';</span>\n<span class=\"token inserted\">+ import './App.less';</span>"},["code","/* src/App.js */\n- import './App.css';\n+ import './App.less';"]],["pre",{lang:"diff",highlighted:"/* src/App.less */\n<span class=\"token deleted\">- @import '~antd/dist/antd.css';</span>\n<span class=\"token inserted\">+ @import '~antd/dist/antd.less';</span>"},["code","/* src/App.less */\n- @import '~antd/dist/antd.css';\n+ @import '~antd/dist/antd.less';"]],["p","然后安装 ",["code","craco-less"]," 并修改 ",["code","craco.config.js"]," 文件如下。"],["pre",{lang:"bash",highlighted:"$ yarn add craco-less"},["code","$ yarn add craco-less"]],["pre",{lang:"js",highlighted:'<span class="token keyword">const</span> CracoLessPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'craco-less\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nmodule<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  plugins<span class="token punctuation">:</span> <span class="token punctuation">[</span>\n    <span class="token punctuation">{</span>\n      plugin<span class="token punctuation">:</span> CracoLessPlugin<span class="token punctuation">,</span>\n      options<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n        lessLoaderOptions<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n          lessOptions<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n            modifyVars<span class="token punctuation">:</span> <span class="token punctuation">{</span> <span class="token string">\'@primary-color\'</span><span class="token punctuation">:</span> <span class="token string">\'#1DA57A\'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n            javascriptEnabled<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n          <span class="token punctuation">}</span><span class="token punctuation">,</span>\n        <span class="token punctuation">}</span><span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">]</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>'},["code","const CracoLessPlugin = require('craco-less');\n\nmodule.exports = {\n  plugins: [\n    {\n      plugin: CracoLessPlugin,\n      options: {\n        lessLoaderOptions: {\n          lessOptions: {\n            modifyVars: { '@primary-color': '#1DA57A' },\n            javascriptEnabled: true,\n          },\n        },\n      },\n    },\n  ],\n};"]],["p","这里利用了 ",["a",{title:null,href:"https://github.com/webpack/less-loader#less-options"},"less-loader"]," 的 ",["code","modifyVars"]," 来进行主题配置，变量和其他配置方式可以参考 ",["a",{title:null,href:"/docs/react/customize-theme"},"配置主题"]," 文档。修改后重启 ",["code","yarn start"],"，如果看到一个绿色的按钮就说明配置成功了。"],["p","antd 内建了深色主题和紧凑主题，你可以参照 ",["a",{title:null,href:"/docs/react/customize-theme#使用暗色主题和紧凑主题"},"使用暗色主题和紧凑主题"]," 进行接入。"],["blockquote",["p","同样，你可以使用 ",["a",{title:null,href:"https://github.com/timarney/react-app-rewired"},"react-app-rewired"]," 和 ",["a",{title:null,href:"https://github.com/arackaf/customize-cra"},"customize-cra"]," 来自定义 create-react-app 的 webpack 配置。"]],["h2","eject"],["p","你也可以使用 create-react-app 提供的 ",["a",{title:null,href:"https://create-react-app.dev/docs/available-scripts/#npm-run-eject"},"yarn run eject"]," 命令将所有内建的配置暴露出来。不过这种配置方式需要你自行探索，不在本文讨论范围内。"],["h2","小结"],["p","以上是在 create-react-app 中使用 antd 的相关实践，你也可以借鉴此文的做法在自己的 webpack 工作流中使用 antd。"],["p","上述教程的脚手架源码我们放在 ",["a",{title:null,href:"https://github.com/ant-design/create-react-app-antd"},"create-react-app-antd"]," 中，你可以直接下载使用。"],["p","接下来我们会介绍如何在 ",["a",{title:null,href:"/docs/react/use-in-typescript"},"TypeScript"]," 和 ",["a",{title:null,href:"/docs/react/practical-projects"},"Umi"]," 中使用 antd，欢迎继续阅读。"]],meta:{order:4,title:"在 create-react-app 中使用",filename:"docs/react/use-with-create-react-app.zh-CN.md"},description:["section",["p",["a",{title:null,href:"https://github.com/facebookincubator/create-react-app"},"create-react-app"]," 是业界最优秀的 React 应用开发工具之一，本文会尝试在 create-react-app 创建的工程中使用 antd 组件，并自定义 webpack 的配置以满足各类工程化需求。"]],toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#安装和初始化",title:"安装和初始化"},"安装和初始化"]],["li",["a",{className:"bisheng-toc-h2",href:"#引入-antd",title:"引入 antd"},"引入 antd"]],["li",["a",{className:"bisheng-toc-h2",href:"#高级配置",title:"高级配置"},"高级配置"]],["li",["a",{className:"bisheng-toc-h2",href:"#eject",title:"eject"},"eject"]],["li",["a",{className:"bisheng-toc-h2",href:"#小结",title:"小结"},"小结"]]]}}}]);