(window.webpackJsonp=window.webpackJsonp||[]).push([[221],{3775:function(e,n){e.exports={content:["article",["p","You might want to replace Moment.js with another date library (",["strong","Ant design currently supports ",["a",{title:null,href:"https://day.js.org"},"dayjs"]," and ",["a",{title:null,href:"https://date-fns.org"},"date-fns"]],") to reduce bundle size. We provide two ways to customize:"],["h2","Custom component"],["p","The first way is to use ",["code","generatePicker"]," (or ",["code","generateCalendar"],") to help create Picker components."],["p","First, we initialize an antd demo with ",["code","create-react-app"],". You can refer to ",["a",{title:null,href:"/docs/react/use-in-typescript"},"Use in TypeScript"],", or you can start directly here ",["a",{title:null,href:"https://github.com/xiaohuoni/antd4x-generate-picker/commit/47fec964e36d48bd15760f8f5abcb9655c259aa6"},"init antd"]],["h3","DatePicker.tsx"],["p","Create ",["code","src/components/DatePicker.tsx"],"."],["p","For example:"],["pre",{lang:"tsx",highlighted:'import { Dayjs } from <span class="token string">\'dayjs\'</span><span class="token comment" spellcheck="true">;</span>\nimport dayjsGenerateConfig from <span class="token string">\'rc-picker/lib/generate/dayjs\'</span><span class="token comment" spellcheck="true">;</span>\nimport generatePicker from <span class="token string">\'antd/es/date-picker/generatePicker\'</span><span class="token comment" spellcheck="true">;</span>\nimport <span class="token string">\'antd/es/date-picker/style/index\'</span><span class="token comment" spellcheck="true">;</span>\n\n<span class="token keyword">const</span> DatePicker <span class="token operator">=</span> generatePicker<span class="token operator">&lt;</span>Dayjs<span class="token operator">></span><span class="token punctuation">(</span>dayjsGenerateConfig<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>\n\nexport <span class="token keyword">default</span> DatePicker<span class="token comment" spellcheck="true">;</span>'},["code","import { Dayjs } from 'dayjs';\nimport dayjsGenerateConfig from 'rc-picker/lib/generate/dayjs';\nimport generatePicker from 'antd/es/date-picker/generatePicker';\nimport 'antd/es/date-picker/style/index';\n\nconst DatePicker = generatePicker<Dayjs>(dayjsGenerateConfig);\n\nexport default DatePicker;"]],["h3","TimePicker.tsx"],["p","Create ",["code","src/components/TimePicker.tsx"],"."],["p","For example:"],["pre",{lang:"tsx",highlighted:'import { Dayjs } from <span class="token string">\'dayjs\'</span><span class="token comment" spellcheck="true">;</span>\nimport <span class="token operator">*</span> as React from <span class="token string">\'react\'</span><span class="token comment" spellcheck="true">;</span>\nimport DatePicker from <span class="token string">\'./DatePicker\'</span><span class="token comment" spellcheck="true">;</span>\nimport { PickerTimeProps } from <span class="token string">\'antd/es/date-picker/generatePicker\'</span><span class="token comment" spellcheck="true">;</span>\n\nexport interface TimePickerProps extends Omit<span class="token operator">&lt;</span>PickerTimeProps<span class="token operator">&lt;</span>Dayjs<span class="token operator">></span><span class="token punctuation">,</span> <span class="token string">\'picker\'</span><span class="token operator">></span> {}\n\n<span class="token keyword">const</span> TimePicker <span class="token operator">=</span> React<span class="token punctuation">.</span>forwardRef<span class="token operator">&lt;</span>any<span class="token punctuation">,</span> TimePickerProps<span class="token operator">></span><span class="token punctuation">(</span><span class="token punctuation">(</span>props<span class="token punctuation">,</span> ref<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> {\n  return <span class="token operator">&lt;</span>DatePicker {<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>props} picker<span class="token operator">=</span><span class="token string">"time"</span> mode<span class="token operator">=</span>{undefined} ref<span class="token operator">=</span>{ref} <span class="token operator">/</span><span class="token operator">></span><span class="token comment" spellcheck="true">;</span>\n}<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>\n\nTimePicker<span class="token punctuation">.</span>displayName <span class="token operator">=</span> <span class="token string">\'TimePicker\'</span><span class="token comment" spellcheck="true">;</span>\n\nexport <span class="token keyword">default</span> TimePicker<span class="token comment" spellcheck="true">;</span>'},["code","import { Dayjs } from 'dayjs';\nimport * as React from 'react';\nimport DatePicker from './DatePicker';\nimport { PickerTimeProps } from 'antd/es/date-picker/generatePicker';\n\nexport interface TimePickerProps extends Omit<PickerTimeProps<Dayjs>, 'picker'> {}\n\nconst TimePicker = React.forwardRef<any, TimePickerProps>((props, ref) => {\n  return <DatePicker {...props} picker=\"time\" mode={undefined} ref={ref} />;\n});\n\nTimePicker.displayName = 'TimePicker';\n\nexport default TimePicker;"]],["h3","Calendar.tsx"],["p","Create ",["code","src/components/Calendar.tsx"],"."],["p","For example:"],["pre",{lang:"tsx",highlighted:'import { Dayjs } from <span class="token string">\'dayjs\'</span><span class="token comment" spellcheck="true">;</span>\nimport dayjsGenerateConfig from <span class="token string">\'rc-picker/lib/generate/dayjs\'</span><span class="token comment" spellcheck="true">;</span>\nimport generateCalendar from <span class="token string">\'antd/es/calendar/generateCalendar\'</span><span class="token comment" spellcheck="true">;</span>\nimport <span class="token string">\'antd/es/calendar/style\'</span><span class="token comment" spellcheck="true">;</span>\n\n<span class="token keyword">const</span> Calendar <span class="token operator">=</span> generateCalendar<span class="token operator">&lt;</span>Dayjs<span class="token operator">></span><span class="token punctuation">(</span>dayjsGenerateConfig<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>\n\nexport <span class="token keyword">default</span> Calendar<span class="token comment" spellcheck="true">;</span>'},["code","import { Dayjs } from 'dayjs';\nimport dayjsGenerateConfig from 'rc-picker/lib/generate/dayjs';\nimport generateCalendar from 'antd/es/calendar/generateCalendar';\nimport 'antd/es/calendar/style';\n\nconst Calendar = generateCalendar<Dayjs>(dayjsGenerateConfig);\n\nexport default Calendar;"]],["h3","Export Custom component"],["p","Create ",["code","src/components/index.tsx"],"."],["p","For example:"],["pre",{lang:"tsx",highlighted:'export { <span class="token keyword">default</span> as DatePicker } from <span class="token string">\'./DatePicker\'</span><span class="token comment" spellcheck="true">;</span>\nexport { <span class="token keyword">default</span> as Calendar } from <span class="token string">\'./Calendar\'</span><span class="token comment" spellcheck="true">;</span>\nexport { <span class="token keyword">default</span> as TimePicker } from <span class="token string">\'./TimePicker\'</span><span class="token comment" spellcheck="true">;</span>'},["code","export { default as DatePicker } from './DatePicker';\nexport { default as Calendar } from './Calendar';\nexport { default as TimePicker } from './TimePicker';"]],["h3","Use Custom component"],["p","Modify ",["code","src/App.tsx"],",import ",["code","dayjs"]," and custom component."],["pre",{lang:"diff",highlighted:"<span class=\"token deleted\">- import { DatePicker, Calendar } from '@hankliu/hankliu-ui';</span>\n<span class=\"token deleted\">- import format from 'moment';</span>\n\n<span class=\"token inserted\">+ import { DatePicker, TimePicker, Calendar } from './components';</span>\n<span class=\"token inserted\">+ import format from 'dayjs';</span>"},["code","- import { DatePicker, Calendar } from '@hankliu/hankliu-ui';\n- import format from 'moment';\n\n+ import { DatePicker, TimePicker, Calendar } from './components';\n+ import format from 'dayjs';"]],["p","If the above steps do not work correctly, you can refer to ",["a",{title:null,href:"https://github.com/xiaohuoni/antd4x-generate-picker/tree/master/antd-ts"},"antd4x-generate-picker/antd-ts"],"."],["p","If you need JavaScript code, you can refer to ",["a",{title:null,href:"https://github.com/xiaohuoni/antd4x-generate-picker/tree/master/antd-demo"},"antd4x-generate-picker/antd-demo"],"."],["p","If you use ",["a",{title:null,href:"https://umijs.org/"},"umi"],", you can reference ",["a",{title:null,href:"https://github.com/xiaohuoni/antd4x-use-dayjs-replace-moment"},"antd4x-use-dayjs-replace-moment"],"."],["h2","antd-dayjs-webpack-plugin"],["p","We also provide another implementation, which we provide with ",["code","antd-dayjs-webpack-plugin"],", replacing ",["code","momentjs"]," with ",["code","Day.js"]," directly without changing a line of existing code. More info can be found at ",["a",{title:null,href:"https://github.com/ant-design/antd-dayjs-webpack-plugin"},"antd-dayjs-webpack-plugin"],"."],["pre",{lang:"js",highlighted:'<span class="token comment" spellcheck="true">// webpack-config.js</span>\n<span class="token keyword">import</span> AntdDayjsWebpackPlugin <span class="token keyword">from</span> <span class="token string">\'antd-dayjs-webpack-plugin\'</span><span class="token punctuation">;</span>\n\nmodule<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  <span class="token comment" spellcheck="true">// ...</span>\n  plugins<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token keyword">new</span> <span class="token class-name">AntdDayjsWebpackPlugin</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>'},["code","// webpack-config.js\nimport AntdDayjsWebpackPlugin from 'antd-dayjs-webpack-plugin';\n\nmodule.exports = {\n  // ...\n  plugins: [new AntdDayjsWebpackPlugin()],\n};"]],["h2","Use date-fns"],["p",["a",{title:null,href:"https://date-fns.org/"},"date-fns"]," currently supports custom component methods similar to ",["code","dayjs"],". The difference is that the parameter types used are different. Support is provided in antd 4.5.0 and above."],["p","For Example:"],["h3","DatePicker.tsx"],["p","Create ",["code","src/components/DatePicker.tsx"],"."],["p","Code as follows:"],["pre",{lang:"tsx",highlighted:'import dateFnsGenerateConfig from <span class="token string">\'rc-picker/lib/generate/dateFns\'</span><span class="token comment" spellcheck="true">;</span>\nimport generatePicker from <span class="token string">\'antd/es/date-picker/generatePicker\'</span><span class="token comment" spellcheck="true">;</span>\nimport <span class="token string">\'antd/es/date-picker/style/index\'</span><span class="token comment" spellcheck="true">;</span>\n\n<span class="token keyword">const</span> DatePicker <span class="token operator">=</span> generatePicker<span class="token operator">&lt;</span>Date<span class="token operator">></span><span class="token punctuation">(</span>dateFnsGenerateConfig<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>\n\nexport <span class="token keyword">default</span> DatePicker<span class="token comment" spellcheck="true">;</span>'},["code","import dateFnsGenerateConfig from 'rc-picker/lib/generate/dateFns';\nimport generatePicker from 'antd/es/date-picker/generatePicker';\nimport 'antd/es/date-picker/style/index';\n\nconst DatePicker = generatePicker<Date>(dateFnsGenerateConfig);\n\nexport default DatePicker;"]]],meta:{order:7.5,title:"Replace Moment.js",filename:"docs/react/replace-moment.en-US.md"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#Custom-component",title:"Custom component"},"Custom component"]],["li",["a",{className:"bisheng-toc-h2",href:"#antd-dayjs-webpack-plugin",title:"antd-dayjs-webpack-plugin"},"antd-dayjs-webpack-plugin"]],["li",["a",{className:"bisheng-toc-h2",href:"#Use-date-fns",title:"Use date-fns"},"Use date-fns"]]]}}}]);