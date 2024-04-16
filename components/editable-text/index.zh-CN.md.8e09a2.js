(window.webpackJsonp=window.webpackJsonp||[]).push([[71],{3625:function(t,e){t.exports={content:["section",["p","使一段文本具有可编辑模式"],["h2","何时使用"],["p","需要使一段文本具有可编辑模式"]],meta:{category:"Components",subtitle:"可编辑文本",type:"数据录入",title:"EditableText",filename:"components/editable-text/index.zh-CN.md"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#何时使用",title:"何时使用"},"何时使用"]],["li",["a",{className:"bisheng-toc-h2",href:"#API",title:"API"},"API"]]],api:["section",["h2","API"],["p","可编辑文本，参考",["a",{title:null,href:"#components-input-demo-text"},"示例"]],["table",["thead",["tr",["th","参数"],["th","说明"],["th","类型"],["th","默认值"]]],["tbody",["tr",["td","controlled"],["td","是否受控, 受控模式 onChange 会在输入框值变化时调用；非受控模式下 onChange 仅在输入框失去焦点或按下 Enter 键时触发，如果设置了 onInputBlur，则 onChange 不会触发，通过 onInputBlur 来获取输入框的值。(推荐使用受控模式)"],["td","boolean"],["td","false"]],["tr",["td","value"],["td","值"],["td","string"],["td","-"]],["tr",["td","autoSelect"],["td","点击编辑按钮后，是否自动选择输入框的内容"],["td","boolean"],["td","true"]],["tr",["td","onChange"],["td","值变化时的回调，输入模式下鼠标失去焦点或按下 ",["code","Enter"]," 键时触发"],["td","function(value)"],["td","-"]],["tr",["td","onInputBlur"],["td","输入模式下鼠标失去焦点或按下 ",["code","Enter"]," 键时的回调，如果定义了该回调函数，非受控模式下 onChange 不会触发，另外在失去焦点时会根据该返回结果来切换编辑状态 ",["a",{title:null,href:"#components-editable-text-demo-text"},"案例参考"]],["td","function(e) => boolean ","|"," Promise"],["td","-"]],["tr",["td","onInputFocus"],["td","失去焦点时触发"],["td","function(e) => void"],["td","-"]],["tr",["td","max"],["td","最多输入的字符长度"],["td","number"],["td","-"]],["tr",["td","fixedValueWidth"],["td","值的长度是否和组件的长度一致，默认长度为 auto"],["td","boolean"],["td","false"]],["tr",["td","placeholder"],["td","设置 placeholder"],["td","string"],["td","'请输入'"]],["tr",["td","style"],["td","样式"],["td","object"],["td","-"]],["tr",["td","className"],["td","className"],["td","string"],["td","-"]]]]]}}}]);