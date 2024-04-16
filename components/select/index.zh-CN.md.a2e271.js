(window.webpackJsonp=window.webpackJsonp||[]).push([[154],{3708:function(t,e){t.exports={content:["section",["p","下拉选择器。"],["h2","何时使用"],["ul",["li",["p","弹出一个下拉菜单给用户选择操作，用于代替原生的选择器，或者需要一个更优雅的多选器时。"]],["li",["p","当选项少时（少于 5 项），建议直接将选项平铺，使用 ",["a",{title:null,href:"/components/radio/"},"Radio"]," 是更好的选择。"]]]],meta:{category:"Components",subtitle:"选择器",type:"数据录入",title:"Select",cover:"https://gw.alipayobjects.com/zos/alicdn/_0XzgOis7/Select.svg",filename:"components/select/index.zh-CN.md"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#何时使用",title:"何时使用"},"何时使用"]],["li",["a",{className:"bisheng-toc-h2",href:"#API",title:"API"},"API"]],["li",["a",{className:"bisheng-toc-h2",href:"#FAQ",title:"FAQ"},"FAQ"]]],api:["section",["h2","API"],["pre",{lang:"jsx",highlighted:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Select</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Option</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>lucy<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>lucy<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Option</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Select</span><span class="token punctuation">></span></span>'},["code",'<Select>\n  <Option value="lucy">lucy</Option>\n</Select>']],["h3","Select props"],["table",["thead",["tr",["th","参数"],["th","说明"],["th","类型"],["th","默认值"],["th","版本"]]],["tbody",["tr",["td","allowClear"],["td","支持清除"],["td","boolean"],["td","false"],["td"]],["tr",["td","autoClearSearchValue"],["td","是否在选中项后清空搜索框，只在 ",["code","mode"]," 为 ",["code","multiple"]," 或 ",["code","tags"]," 时有效"],["td","boolean"],["td","true"],["td"]],["tr",["td","autoFocus"],["td","默认获取焦点"],["td","boolean"],["td","false"],["td"]],["tr",["td","bordered"],["td","是否有边框"],["td","boolean"],["td","true"],["td"]],["tr",["td","clearIcon"],["td","自定义的多选框清空图标"],["td","ReactNode"],["td","-"],["td"]],["tr",["td","defaultActiveFirstOption"],["td","是否默认高亮第一个选项"],["td","boolean"],["td","true"],["td"]],["tr",["td","defaultOpen"],["td","是否默认展开下拉菜单"],["td","boolean"],["td","-"],["td"]],["tr",["td","defaultValue"],["td","指定默认选中的条目"],["td","string ","|"," string","[","]",["br"],"number ","|"," number","[","]",["br"],"LabeledValue ","|"," LabeledValue","[","]"],["td","-"],["td"]],["tr",["td","disabled"],["td","是否禁用"],["td","boolean"],["td","false"],["td"]],["tr",["td","dropdownClassName"],["td","下拉菜单的 className 属性"],["td","string"],["td","-"],["td"]],["tr",["td","dropdownMatchSelectWidth"],["td","下拉菜单和选择器同宽。默认将设置 ",["code","min-width"],"，当值小于选择框宽度时会被忽略。false 时会关闭虚拟滚动"],["td","boolean ","|"," number"],["td","true"],["td"]],["tr",["td","dropdownRender"],["td","自定义下拉框内容"],["td","(originNode: ReactNode) => ReactNode"],["td","-"],["td"]],["tr",["td","dropdownStyle"],["td","下拉菜单的 style 属性"],["td","CSSProperties"],["td","-"],["td"]],["tr",["td","fieldNames"],["td","自定义节点 label、value、options 的字段"],["td","object"],["td","{ label: ",["code","label"],", value: ",["code","value"],", options: ",["code","options"]," }"],["td","4.17.0"]],["tr",["td","filterOption"],["td","是否根据输入项进行筛选。当其为一个函数时，会接收 ",["code","inputValue"]," ",["code","option"]," 两个参数，当 ",["code","option"]," 符合筛选条件时，应返回 true，反之则返回 false"],["td","boolean ","|"," function(inputValue, option)"],["td","true"],["td"]],["tr",["td","filterSort"],["td","搜索时对筛选结果项的排序函数, 类似",["a",{title:null,href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort"},"Array.sort"],"里的 compareFunction"],["td","(optionA: Option, optionB: Option) => number"],["td","-"],["td","4.9.0"]],["tr",["td","getPopupContainer"],["td","菜单渲染父节点。默认渲染到 body 上，如果你遇到菜单滚动定位问题，试试修改为滚动的区域，并相对其定位。",["a",{title:null,href:"https://codesandbox.io/s/4j168r7jw0"},"示例"]],["td","function(triggerNode)"],["td","() => document.body"],["td"]],["tr",["td","labelInValue"],["td","是否把每个选项的 label 包装到 value 中，会把 Select 的 value 类型从 ",["code","string"]," 变为 { value: string, label: ReactNode } 的格式"],["td","boolean"],["td","false"],["td"]],["tr",["td","listHeight"],["td","设置弹窗滚动高度"],["td","number"],["td","256"],["td"]],["tr",["td","loading"],["td","加载中状态"],["td","boolean"],["td","false"],["td"]],["tr",["td","maxTagCount"],["td","最多显示多少个 tag，响应式模式会对性能产生损耗"],["td","number ","|"," ",["code","responsive"]],["td","-"],["td","responsive: 4.10"]],["tr",["td","maxTagPlaceholder"],["td","隐藏 tag 时显示的内容"],["td","ReactNode ","|"," function(omittedValues)"],["td","-"],["td"]],["tr",["td","maxTagTextLength"],["td","最大显示的 tag 文本长度"],["td","number"],["td","-"],["td"]],["tr",["td","menuItemSelectedIcon"],["td","自定义多选时当前选中的条目图标"],["td","ReactNode"],["td","-"],["td"]],["tr",["td","mode"],["td","设置 Select 的模式为多选或标签"],["td",["code","multiple"]," ","|"," ",["code","tags"]],["td","-"],["td"]],["tr",["td","notFoundContent"],["td","当下拉列表为空时显示的内容"],["td","ReactNode"],["td",["code","Not Found"]],["td"]],["tr",["td","open"],["td","是否展开下拉菜单"],["td","boolean"],["td","-"],["td"]],["tr",["td","optionFilterProp"],["td","搜索时过滤对应的 ",["code","option"]," 属性，如设置为 ",["code","children"]," 表示对内嵌内容进行搜索。若通过 ",["code","options"]," 属性配置选项内容，建议设置 ",["code",'optionFilterProp="label"']," 来对内容进行搜索。"],["td","string"],["td",["code","value"]],["td"]],["tr",["td","optionLabelProp"],["td","回填到选择框的 Option 的属性值，默认是 Option 的子元素。比如在子元素需要高亮效果时，此值可以设为 ",["code","value"],"。",["a",{title:null,href:"https://codesandbox.io/s/antd-reproduction-template-tk678"},"示例"]],["td","string"],["td",["code","children"]],["td"]],["tr",["td","options"],["td","数据化配置选项内容，相比 jsx 定义会获得更好的渲染性能"],["td","{ label, value }","[","]"],["td","-"],["td"]],["tr",["td","placeholder"],["td","选择框默认文本"],["td","string"],["td","-"],["td"]],["tr",["td","removeIcon"],["td","自定义的多选框清除图标"],["td","ReactNode"],["td","-"],["td"]],["tr",["td","searchValue"],["td","控制搜索文本"],["td","string"],["td","-"],["td"]],["tr",["td","showArrow"],["td","是否显示下拉小箭头"],["td","boolean"],["td","单选为 true，多选为 false"],["td"]],["tr",["td","showSearch"],["td","使单选模式可搜索"],["td","boolean"],["td","false"],["td"]],["tr",["td","size"],["td","选择框大小"],["td",["code","large"]," ","|"," ",["code","middle"]," ","|"," ",["code","small"]],["td",["code","middle"]],["td"]],["tr",["td","suffixIcon"],["td","自定义的选择框后缀图标"],["td","ReactNode"],["td","-"],["td"]],["tr",["td","tagRender"],["td","自定义 tag 内容 render，仅在 ",["code","mode"]," 为 ",["code","multiple"]," 或 ",["code","tags"]," 时生效"],["td","(props) => ReactNode"],["td","-"],["td"]],["tr",["td","tokenSeparators"],["td","在 ",["code","tags"]," 和 ",["code","multiple"]," 模式下自动分词的分隔符"],["td","string","[","]"],["td","-"],["td"]],["tr",["td","value"],["td","指定当前选中的条目，多选时为一个数组。（value 数组引用未变化时，Select 不会更新）"],["td","string ","|"," string","[","]",["br"],"number ","|"," number","[","]",["br"],"LabeledValue ","|"," LabeledValue","[","]"],["td","-"],["td"]],["tr",["td","virtual"],["td","设置 false 时关闭虚拟滚动"],["td","boolean"],["td","true"],["td","4.1.0"]],["tr",["td","onBlur"],["td","失去焦点时回调"],["td","function"],["td","-"],["td"]],["tr",["td","onChange"],["td","选中 option，或 input 的 value 变化时，调用此函数"],["td","function(value, option:Option ","|"," Array","<","Option>)"],["td","-"],["td"]],["tr",["td","onClear"],["td","清除内容时回调"],["td","function"],["td","-"],["td","4.6.0"]],["tr",["td","onDeselect"],["td","取消选中时调用，参数为选中项的 value (或 key) 值，仅在 ",["code","multiple"]," 或 ",["code","tags"]," 模式下生效"],["td","function(string ","|"," number ","|"," LabeledValue)"],["td","-"],["td"]],["tr",["td","onDropdownVisibleChange"],["td","展开下拉菜单的回调"],["td","function(open)"],["td","-"],["td"]],["tr",["td","onFocus"],["td","获得焦点时回调"],["td","function"],["td","-"],["td"]],["tr",["td","onInputKeyDown"],["td","按键按下时回调"],["td","function"],["td","-"],["td"]],["tr",["td","onMouseEnter"],["td","鼠标移入时回调"],["td","function"],["td","-"],["td"]],["tr",["td","onMouseLeave"],["td","鼠标移出时回调"],["td","function"],["td","-"],["td"]],["tr",["td","onPopupScroll"],["td","下拉列表滚动时的回调"],["td","function"],["td","-"],["td"]],["tr",["td","onSearch"],["td","文本框值变化时回调"],["td","function(value: string)"],["td","-"],["td"]],["tr",["td","onSelect"],["td","被选中时调用，参数为选中项的 value (或 key) 值"],["td","function(string ","|"," number ","|"," LabeledValue, option: Option)"],["td","-"],["td"]]]],["blockquote",["p","注意，如果发现下拉菜单跟随页面滚动，或者需要在其他弹层中触发 Select，请尝试使用 ",["code","getPopupContainer={triggerNode => triggerNode.parentElement}"]," 将下拉弹层渲染节点固定在触发器的父元素中。"]],["h3","Select Methods"],["table",["thead",["tr",["th","名称"],["th","说明"],["th","版本"]]],["tbody",["tr",["td","blur()"],["td","取消焦点"],["td"]],["tr",["td","focus()"],["td","获取焦点"],["td"]]]],["h3","Option props"],["table",["thead",["tr",["th","参数"],["th","说明"],["th","类型"],["th","默认值"],["th","版本"]]],["tbody",["tr",["td","className"],["td","Option 器类名"],["td","string"],["td","-"],["td"]],["tr",["td","disabled"],["td","是否禁用"],["td","boolean"],["td","false"],["td"]],["tr",["td","title"],["td","选项上的原生 title 提示"],["td","string"],["td","-"],["td"]],["tr",["td","value"],["td","默认根据此属性值进行筛选"],["td","string ","|"," number"],["td","-"],["td"]]]],["h3","OptGroup props"],["table",["thead",["tr",["th","参数"],["th","说明"],["th","类型"],["th","默认值"],["th","版本"]]],["tbody",["tr",["td","key"],["td","Key"],["td","string"],["td","-"],["td"]],["tr",["td","label"],["td","组名"],["td","string ","|"," React.Element"],["td","-"],["td"]]]],["h2","FAQ"],["h3",["code","tag"]," 模式下为何搜索有时会出现两个相同选项？"],["p","这一般是 ",["code","options"]," 中的 ",["code","label"]," 和 ",["code","value"]," 不同导致的，你可以通过 ",["code",'optionFilterProp="label"']," 将过滤设置为展示值以避免这种情况。"],["h3","点击 ",["code","dropdownRender"]," 里的内容浮层关闭怎么办？"],["p","看下 ",["a",{title:null,href:"#components-select-demo-custom-dropdown-menu"},"dropdownRender 例子"]," 里的说明。"],["h3","自定义 Option 样式导致滚动异常怎么办？"],["p","这是由于虚拟滚动默认选项高度为 ",["code","32px"],"，如果你的选项高度小于该值则需要通过 ",["code","listItemHeight"]," 属性调整，而 ",["code","listHeight"]," 用于设置滚动容器高度："],["pre",{lang:"tsx",highlighted:'<span class="token operator">&lt;</span><span class="token keyword">Select</span> listItemHeight<span class="token operator">=</span>{<span class="token number">10</span>} listHeight<span class="token operator">=</span>{<span class="token number">250</span>} <span class="token operator">/</span><span class="token operator">></span>'},["code","<Select listItemHeight={10} listHeight={250} />"]],["p","注意：",["code","listItemHeight"]," 和 ",["code","listHeight"]," 为内部属性，如无必要，请勿修改该值。"],["h3","为何无障碍测试会报缺失 ",["code","aria-"]," 属性？"],["p","Select 无障碍辅助元素仅在弹窗展开时创建，因而当你在进行无障碍检测时请先打开下拉后再进行测试。对于 ",["code","aria-label"]," 与 ",["code","aria-labelledby"]," 属性缺失警告，请自行为 Select 组件添加相应无障碍属性。"]]}}}]);