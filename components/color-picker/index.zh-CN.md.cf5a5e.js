(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{3607:function(t,n){t.exports={content:["section",["p","用于选择颜色"]],meta:{category:"Components",subtitle:"颜色选择器",type:"数据录入",title:"ColorPicker",filename:"components/color-picker/index.zh-CN.md"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#API",title:"API"},"API"]]],api:["section",["h2","API"],["h3","基础属性"],["table",["thead",["tr",["th","参数"],["th","说明"],["th","类型"],["th","默认值"]]],["tbody",["tr",["td","alpha"],["td","是否支持透明度"],["td","boolean"],["td","false"]],["tr",["td","allowEmpty"],["td","是否可以选择无颜色，当开启此项时 ",["code","value"]," 的值为空字符代表无颜色"],["td","boolean"],["td","false"]],["tr",["td","type"],["td","设置颜色选择器的类型，可选值 ",["code","gradient"]," ",["code","basic"]],["td","string"],["td","basic"]],["tr",["td","onChange"],["td","颜色发生改变时的回调"],["td","Function(value)"],["td","-"]],["tr",["td","value"],["td","设置颜色值，当 ",["code","alpha"]," 设置为 true 时；颜色值类型为对象"],["td","string",["br"],["a",{title:null,href:"#AlphaColorValue"},"AlphaColorValue"],["br"],["a",{title:null,href:"#GradientColorValue"},"GradientColorValue"]],["td","-"]],["tr",["td","width"],["td","设置选择器的宽度"],["td","number"],["td","250"]],["tr",["td","colors"],["td","设置选择器的快捷选择色"],["td","string[]"],["td",["a",{title:null,href:"#Colors"},"Colors"]]],["tr",["td","historyColors"],["td","设置选择器的历史颜色"],["td","string[]"],["td","-"]]]],["h4","AlphaColorValue"],["table",["thead",["tr",["th","属性"],["th","说明"],["th","类型"]]],["tbody",["tr",["td","r"],["td","颜色 r 通道值，取值范围 0 - 255"],["td","number"]],["tr",["td","g"],["td","颜色 g 通道值，取值范围 0 - 255"],["td","number"]],["tr",["td","b"],["td","颜色 b 通道值，取值范围 0 - 255"],["td","number"]],["tr",["td","a"],["td","颜色透明度，取值范围 0 - 1"],["td","number"]]]],["h4","GradientColorValue"],["table",["thead",["tr",["th","属性"],["th","说明"],["th","类型"]]],["tbody",["tr",["td","type"],["td","渐变类型"],["td","string"]],["tr",["td","colors"],["td","色块"],["td",["a",{title:null,href:"#GradientColorStopValue"},"GradientColorStopValue"],"[]"]],["tr",["td","angle"],["td","渐变角度，取值范围 0 - 359"],["td","number"]]]],["h4","GradientColorStopValue"],["table",["thead",["tr",["th","属性"],["th","说明"],["th","类型"]]],["tbody",["tr",["td","r"],["td","颜色 r 通道值，取值范围 0 - 255"],["td","number"]],["tr",["td","g"],["td","颜色 g 通道值，取值范围 0 - 255"],["td","number"]],["tr",["td","b"],["td","颜色 b 通道值，取值范围 0 - 255"],["td","number"]],["tr",["td","a"],["td","颜色透明度，取值范围 0 - 1"],["td","number"]],["tr",["td","stop"],["td","颜色断点，取值范围 0 - 1"],["td","number"]]]],["h4","Colors"],["pre",{lang:null,highlighted:'<span class="token punctuation">[</span><span class="token string">\'#D0021B\'</span><span class="token punctuation">,</span> <span class="token string">\'#F5A623\'</span><span class="token punctuation">,</span> <span class="token string">\'#F8E71C\'</span><span class="token punctuation">,</span> <span class="token string">\'#8B572A\'</span><span class="token punctuation">,</span> <span class="token string">\'#7ED321\'</span><span class="token punctuation">,</span> <span class="token string">\'#417505\'</span><span class="token punctuation">,</span> <span class="token string">\'#BD10E0\'</span><span class="token punctuation">,</span> <span class="token string">\'#9013FE\'</span><span class="token punctuation">,</span> <span class="token string">\'#4A90E2\'</span><span class="token punctuation">,</span> <span class="token string">\'#50E3C2\'</span><span class="token punctuation">,</span> <span class="token string">\'#B8E986\'</span><span class="token punctuation">,</span> <span class="token string">\'#000000\'</span><span class="token punctuation">,</span> <span class="token string">\'#4A4A4A\'</span><span class="token punctuation">,</span> <span class="token string">\'#9B9B9B\'</span><span class="token punctuation">,</span> <span class="token string">\'#FFFFFF\'</span><span class="token punctuation">]</span>'},["code","['#D0021B', '#F5A623', '#F8E71C', '#8B572A', '#7ED321', '#417505', '#BD10E0', '#9013FE', '#4A90E2', '#50E3C2', '#B8E986', '#000000', '#4A4A4A', '#9B9B9B', '#FFFFFF']"]],["h3","ColorPicker.Popover"],["p","在 ",["a",{title:null,href:"#基础属性"},"基础属性"]," 的基础上添加了以下属性"],["table",["thead",["tr",["th","参数"],["th","说明"],["th","类型"],["th","默认值"]]],["tbody",["tr",["td","open"],["td","Popover 显示状态"],["td","boolean"],["td","false"]],["tr",["td","placement"],["td","Popover 的显示位置，可选值 top left right bottom topLeft topRight bottomLeft bottomRight leftTop leftBottom rightTop rightBottom"],["td","string"],["td","-"]],["tr",["td","footer"],["td","设置面板的 footer，设置为 ",["code","null"]," 时不显示"],["td","ReactNode"],["td","-"]],["tr",["td","onCancel"],["td","点击取消按钮的回调函数，点击超出 Popover 的屏幕其他区域也会触发"],["td","() => void"],["td","-"]],["tr",["td","onOk"],["td","点击确认按钮的回调函数"],["td","() => void"],["td","-"]],["tr",["td","cancelText"],["td","设置取消按钮的文案"],["td","string"],["td","取消"]],["tr",["td","okText"],["td","设置确认按钮的文案"],["td","string"],["td","确认"]]]],["h3","静态方法"],["ul",["li",["p",["code","ColorPicker.clearHistoryColors()"]," 清除历史选择的颜色"]]]]}}}]);