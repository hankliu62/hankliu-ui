(window.webpackJsonp=window.webpackJsonp||[]).push([[69],{3623:function(n,t){n.exports={content:["section",["p","向下弹出的列表。"],["h2","何时使用"],["p","当页面上的操作命令过多时，用此组件可以收纳操作元素。点击或移入触点，会出现一个下拉菜单。可在列表中进行选择，并执行相应的命令。"],["ul",["li",["p","用于收罗一组命令操作。"]],["li",["p","Select 用于选择，而 Dropdown 是命令集合。"]]],["h3","4.24.0 用法升级"],["blockquote",["p","在 4.24.0 版本后，我们提供了 ",["code","<Dropdown menu={{ items: [...] }} />"]," 的简写方式，有更好的性能和更方便的数据组织方式，开发者不再需要自行拼接 JSX。同时我们废弃了原先的写法，你还是可以在 4.x 继续使用，但会在控制台看到警告，并会在 5.0 后移除。"]],["pre",{lang:"jsx",highlighted:'<span class="token comment" spellcheck="true">// >=4.24.0 可用，推荐的写法 ✅</span>\n<span class="token keyword">const</span> items <span class="token operator">=</span> <span class="token punctuation">[</span>\n  <span class="token punctuation">{</span> label<span class="token punctuation">:</span> <span class="token string">\'菜单项一\'</span><span class="token punctuation">,</span> key<span class="token punctuation">:</span> <span class="token string">\'item-1\'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token comment" spellcheck="true">// 菜单项务必填写 key</span>\n  <span class="token punctuation">{</span> label<span class="token punctuation">:</span> <span class="token string">\'菜单项二\'</span><span class="token punctuation">,</span> key<span class="token punctuation">:</span> <span class="token string">\'item-2\'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">]</span><span class="token punctuation">;</span>\n<span class="token keyword">return</span> <span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Dropdown</span> <span class="token attr-name">menu</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> items <span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span><span class="token punctuation">></span></span>Hover me<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Dropdown</span><span class="token punctuation">></span></span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment" spellcheck="true">// &lt;4.24.0 可用，>=4.24.0 时不推荐 🙅🏻‍♀️</span>\n<span class="token keyword">const</span> menu <span class="token operator">=</span> <span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Menu</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Menu.Item</span><span class="token punctuation">></span></span>菜单项一<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Menu.Item</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Menu.Item</span><span class="token punctuation">></span></span>菜单项二<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Menu.Item</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Menu</span><span class="token punctuation">></span></span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">return</span> <span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Dropdown</span> <span class="token attr-name">overlay</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>menu<span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span><span class="token punctuation">></span></span>Hover me<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Dropdown</span><span class="token punctuation">></span></span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span>'},["code","// >=4.24.0 可用，推荐的写法 ✅\nconst items = [\n  { label: '菜单项一', key: 'item-1' }, // 菜单项务必填写 key\n  { label: '菜单项二', key: 'item-2' },\n];\nreturn (\n  <Dropdown menu={{ items }}>\n    <a>Hover me</a>\n  </Dropdown>\n);\n\n// <4.24.0 可用，>=4.24.0 时不推荐 🙅🏻‍♀️\nconst menu = (\n  <Menu>\n    <Menu.Item>菜单项一</Menu.Item>\n    <Menu.Item>菜单项二</Menu.Item>\n  </Menu>\n);\nreturn (\n  <Dropdown overlay={menu}>\n    <a>Hover me</a>\n  </Dropdown>\n);"]]],meta:{category:"Components",subtitle:"下拉菜单",type:"导航",title:"Dropdown",cover:"https://gw.alipayobjects.com/zos/alicdn/eedWN59yJ/Dropdown.svg",filename:"components/dropdown/index.zh-CN.md"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#何时使用",title:"何时使用"},"何时使用"]],["li",["a",{className:"bisheng-toc-h2",href:"#API",title:"API"},"API"]]],api:["section",["h2","API"],["p","属性如下"],["table",["thead",["tr",["th","参数"],["th","说明"],["th","类型"],["th","默认值"],["th","版本"]]],["tbody",["tr",["td","arrow"],["td","下拉框箭头是否显示"],["td","boolean"],["td","false"],["td"]],["tr",["td","autoFocus"],["td","打开后自动聚焦下拉框"],["td","boolean"],["td","false"]],["tr",["td","disabled"],["td","菜单是否禁用"],["td","boolean"],["td","-"],["td"]],["tr",["td","destroyPopupOnHide"],["td","关闭后是否销毁 Dropdown"],["td","boolean"],["td","false"],["td"]],["tr",["td","dropdownRender"],["td","自定义下拉框内容"],["td","(menus: ReactNode) => ReactNode"],["td","-"],["td"]],["tr",["td","getPopupContainer"],["td","菜单渲染父节点。默认渲染到 body 上，如果你遇到菜单滚动定位问题，试试修改为滚动的区域，并相对其定位。",["a",{title:null,href:"https://codepen.io/afc163/pen/zEjNOy?editors=0010"},"示例"]],["td","(triggerNode: HTMLElement) => HTMLElement"],["td","() => document.body"],["td"]],["tr",["td","menu"],["td","菜单配置项"],["td",["a",{title:null,href:"/components/menu#API"},"MenuProps"]],["td","-"],["td"]],["tr",["td","overlayClassName"],["td","下拉根元素的类名称"],["td","string"],["td","-"],["td"]],["tr",["td","overlayStyle"],["td","下拉根元素的样式"],["td","CSSProperties"],["td","-"],["td"]],["tr",["td","placement"],["td","菜单弹出位置：",["code","bottomLeft"]," ",["code","bottom"]," ",["code","bottomRight"]," ",["code","topLeft"]," ",["code","top"]," ",["code","topRight"]],["td","string"],["td",["code","bottomLeft"]],["td"]],["tr",["td","trigger"],["td","触发下拉的行为, 移动端不支持 hover"],["td","Array","<",["code","click"],"|",["code","hover"],"|",["code","contextMenu"],">"],["td","[",["code","hover"],"]"],["td"]],["tr",["td","open"],["td","菜单是否显示"],["td","boolean"],["td","-"],["td"]],["tr",["td","onOpenChange"],["td","菜单显示状态改变时调用，点击菜单按钮导致的消失不会触发。"],["td","(open: boolean) => void"],["td","-"],["td"]]]],["h3","Dropdown.Button"],["p","属性与 Dropdown 的相同。还包含以下属性："],["table",["thead",["tr",["th","参数"],["th","说明"],["th","类型"],["th","默认值"],["th","版本"]]],["tbody",["tr",["td","buttonsRender"],["td","自定义左右两个按钮"],["td","(buttons: ReactNode","[","]) => ReactNode","[","]"],["td","-"],["td"]],["tr",["td","loading"],["td","设置按钮载入状态"],["td","boolean ","|"," { delay: number }"],["td","false"],["td"]],["tr",["td","danger"],["td","设置危险按钮"],["td","boolean"],["td"],["td"]],["tr",["td","icon"],["td","右侧的 icon"],["td","ReactNode"],["td","-"],["td"]],["tr",["td","size"],["td","按钮大小，和 ",["a",{title:null,href:"/components/button/#API"},"Button"]," 一致"],["td","string"],["td",["code","default"]],["td"]],["tr",["td","type"],["td","按钮类型，和 ",["a",{title:null,href:"/components/button/#API"},"Button"]," 一致"],["td","string"],["td",["code","default"]],["td"]],["tr",["td","onClick"],["td","点击左侧按钮的回调，和 ",["a",{title:null,href:"/components/button/#API"},"Button"]," 一致"],["td","(event) => void"],["td","-"],["td"]]]]]}}}]);