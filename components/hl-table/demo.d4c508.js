(window.webpackJsonp=window.webpackJsonp||[]).push([[94],{3648:function(n,s,a){n.exports={"fixed-columns-header":a(4185)}},4185:function(n,s,a){n.exports={content:{"zh-CN":[["p","onScrollEnd、bottomOffset 用法示例"]],"en-US":[["h2","zh-CN"],["p","onScrollEnd、bottomOffset 用法示例"]]},meta:{order:20,title:{"en-US":"Fixed Columns and Header","zh-CN":"onScrollEnd、bottomOffset"},filename:"components/hl-table/demo/fixed-columns-header.md",id:"components-hl-table-demo-fixed-columns-header"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#zh-CN",title:"zh-CN"},"zh-CN"]]],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> <span class="token punctuation">{</span> HlTable <span class="token keyword">as</span> Table<span class="token punctuation">,</span> message<span class="token punctuation">,</span> InputNumber <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'@hankliu/hankliu-ui\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> useState <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'react\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> columns <span class="token operator">=</span> <span class="token punctuation">[</span>\n  <span class="token punctuation">{</span>\n    title<span class="token punctuation">:</span> <span class="token string">\'Full Name\'</span><span class="token punctuation">,</span>\n    width<span class="token punctuation">:</span> <span class="token number">100</span><span class="token punctuation">,</span>\n    dataIndex<span class="token punctuation">:</span> <span class="token string">\'name\'</span><span class="token punctuation">,</span>\n    key<span class="token punctuation">:</span> <span class="token string">\'name\'</span><span class="token punctuation">,</span>\n    fixed<span class="token punctuation">:</span> <span class="token string">\'left\'</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">{</span>\n    title<span class="token punctuation">:</span> <span class="token string">\'Age\'</span><span class="token punctuation">,</span>\n    width<span class="token punctuation">:</span> <span class="token number">100</span><span class="token punctuation">,</span>\n    dataIndex<span class="token punctuation">:</span> <span class="token string">\'age\'</span><span class="token punctuation">,</span>\n    key<span class="token punctuation">:</span> <span class="token string">\'age\'</span><span class="token punctuation">,</span>\n    fixed<span class="token punctuation">:</span> <span class="token string">\'left\'</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">{</span>\n    title<span class="token punctuation">:</span> <span class="token string">\'Column 1\'</span><span class="token punctuation">,</span>\n    dataIndex<span class="token punctuation">:</span> <span class="token string">\'address\'</span><span class="token punctuation">,</span>\n    key<span class="token punctuation">:</span> <span class="token string">\'1\'</span><span class="token punctuation">,</span>\n    width<span class="token punctuation">:</span> <span class="token number">150</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">{</span>\n    title<span class="token punctuation">:</span> <span class="token string">\'Column 2\'</span><span class="token punctuation">,</span>\n    dataIndex<span class="token punctuation">:</span> <span class="token string">\'address\'</span><span class="token punctuation">,</span>\n    key<span class="token punctuation">:</span> <span class="token string">\'2\'</span><span class="token punctuation">,</span>\n    width<span class="token punctuation">:</span> <span class="token number">150</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">{</span>\n    title<span class="token punctuation">:</span> <span class="token string">\'Column 3\'</span><span class="token punctuation">,</span>\n    dataIndex<span class="token punctuation">:</span> <span class="token string">\'address\'</span><span class="token punctuation">,</span>\n    key<span class="token punctuation">:</span> <span class="token string">\'3\'</span><span class="token punctuation">,</span>\n    width<span class="token punctuation">:</span> <span class="token number">150</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">{</span>\n    title<span class="token punctuation">:</span> <span class="token string">\'Column 4\'</span><span class="token punctuation">,</span>\n    dataIndex<span class="token punctuation">:</span> <span class="token string">\'address\'</span><span class="token punctuation">,</span>\n    key<span class="token punctuation">:</span> <span class="token string">\'4\'</span><span class="token punctuation">,</span>\n    width<span class="token punctuation">:</span> <span class="token number">150</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">{</span>\n    title<span class="token punctuation">:</span> <span class="token string">\'Column 5\'</span><span class="token punctuation">,</span>\n    dataIndex<span class="token punctuation">:</span> <span class="token string">\'address\'</span><span class="token punctuation">,</span>\n    key<span class="token punctuation">:</span> <span class="token string">\'5\'</span><span class="token punctuation">,</span>\n    width<span class="token punctuation">:</span> <span class="token number">150</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">{</span>\n    title<span class="token punctuation">:</span> <span class="token string">\'Column 6\'</span><span class="token punctuation">,</span>\n    dataIndex<span class="token punctuation">:</span> <span class="token string">\'address\'</span><span class="token punctuation">,</span>\n    key<span class="token punctuation">:</span> <span class="token string">\'6\'</span><span class="token punctuation">,</span>\n    width<span class="token punctuation">:</span> <span class="token number">150</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">{</span>\n    title<span class="token punctuation">:</span> <span class="token string">\'Column 7\'</span><span class="token punctuation">,</span>\n    dataIndex<span class="token punctuation">:</span> <span class="token string">\'address\'</span><span class="token punctuation">,</span>\n    key<span class="token punctuation">:</span> <span class="token string">\'7\'</span><span class="token punctuation">,</span>\n    width<span class="token punctuation">:</span> <span class="token number">150</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">{</span> title<span class="token punctuation">:</span> <span class="token string">\'Column 8\'</span><span class="token punctuation">,</span> dataIndex<span class="token punctuation">:</span> <span class="token string">\'address\'</span><span class="token punctuation">,</span> key<span class="token punctuation">:</span> <span class="token string">\'8\'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">{</span>\n    title<span class="token punctuation">:</span> <span class="token string">\'Action\'</span><span class="token punctuation">,</span>\n    key<span class="token punctuation">:</span> <span class="token string">\'operation\'</span><span class="token punctuation">,</span>\n    fixed<span class="token punctuation">:</span> <span class="token string">\'right\'</span><span class="token punctuation">,</span>\n    width<span class="token punctuation">:</span> <span class="token number">100</span><span class="token punctuation">,</span>\n    render<span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span><span class="token punctuation">></span></span>action<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">]</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> data <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">100</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  data<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n    key<span class="token punctuation">:</span> i<span class="token punctuation">,</span>\n    name<span class="token punctuation">:</span> <span class="token template-string"><span class="token string">`Edrward </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>i<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">`</span></span><span class="token punctuation">,</span>\n    age<span class="token punctuation">:</span> <span class="token number">32</span><span class="token punctuation">,</span>\n    address<span class="token punctuation">:</span> <span class="token template-string"><span class="token string">`London Park no. </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>i<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">`</span></span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">function</span> <span class="token function">Demo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">const</span> <span class="token punctuation">[</span>bottomOffset<span class="token punctuation">,</span> setBottomOffset<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>\n  <span class="token keyword">return</span> <span class="token punctuation">(</span>\n    <span class="token operator">&lt;</span><span class="token operator">></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>\n          marginBottom<span class="token punctuation">:</span> <span class="token number">20</span>\n      <span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">></span></span>bottomOffset：<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>InputNumber</span> <span class="token attr-name">value</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>bottomOffset<span class="token punctuation">}</span></span> <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>setBottomOffset<span class="token punctuation">}</span></span><span class="token punctuation">/></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Table</span>\n        <span class="token attr-name">bottomOffset</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>bottomOffset<span class="token punctuation">}</span></span>\n        <span class="token attr-name">columns</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>columns<span class="token punctuation">}</span></span>\n        <span class="token attr-name">dataSource</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>data<span class="token punctuation">}</span></span>\n        <span class="token attr-name">scroll</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> x<span class="token punctuation">:</span> <span class="token number">1500</span><span class="token punctuation">,</span> y<span class="token punctuation">:</span> <span class="token number">300</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span>\n        <span class="token attr-name">onScrollEnd</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n          message<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">\'已滚动到底部\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span><span class="token punctuation">}</span></span>\n      <span class="token punctuation">/></span></span>\n    <span class="token operator">&lt;</span><span class="token operator">/</span><span class="token operator">></span>\n  <span class="token punctuation">)</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Demo</span><span class="token punctuation">/></span></span><span class="token punctuation">,</span> mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>'}],highlightedCodes:{jsx:'<span class="token keyword">import</span> <span class="token punctuation">{</span> HlTable <span class="token keyword">as</span> Table<span class="token punctuation">,</span> message<span class="token punctuation">,</span> InputNumber <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'@hankliu/hankliu-ui\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> useState <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'react\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> columns <span class="token operator">=</span> <span class="token punctuation">[</span>\n  <span class="token punctuation">{</span>\n    <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">\'Full Name\'</span><span class="token punctuation">,</span>\n    <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span>\n    <span class="token literal-property property">dataIndex</span><span class="token operator">:</span> <span class="token string">\'name\'</span><span class="token punctuation">,</span>\n    <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">\'name\'</span><span class="token punctuation">,</span>\n    <span class="token literal-property property">fixed</span><span class="token operator">:</span> <span class="token string">\'left\'</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">{</span>\n    <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">\'Age\'</span><span class="token punctuation">,</span>\n    <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span>\n    <span class="token literal-property property">dataIndex</span><span class="token operator">:</span> <span class="token string">\'age\'</span><span class="token punctuation">,</span>\n    <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">\'age\'</span><span class="token punctuation">,</span>\n    <span class="token literal-property property">fixed</span><span class="token operator">:</span> <span class="token string">\'left\'</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">{</span>\n    <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">\'Column 1\'</span><span class="token punctuation">,</span>\n    <span class="token literal-property property">dataIndex</span><span class="token operator">:</span> <span class="token string">\'address\'</span><span class="token punctuation">,</span>\n    <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">\'1\'</span><span class="token punctuation">,</span>\n    <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">150</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">{</span>\n    <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">\'Column 2\'</span><span class="token punctuation">,</span>\n    <span class="token literal-property property">dataIndex</span><span class="token operator">:</span> <span class="token string">\'address\'</span><span class="token punctuation">,</span>\n    <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">\'2\'</span><span class="token punctuation">,</span>\n    <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">150</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">{</span>\n    <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">\'Column 3\'</span><span class="token punctuation">,</span>\n    <span class="token literal-property property">dataIndex</span><span class="token operator">:</span> <span class="token string">\'address\'</span><span class="token punctuation">,</span>\n    <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">\'3\'</span><span class="token punctuation">,</span>\n    <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">150</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">{</span>\n    <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">\'Column 4\'</span><span class="token punctuation">,</span>\n    <span class="token literal-property property">dataIndex</span><span class="token operator">:</span> <span class="token string">\'address\'</span><span class="token punctuation">,</span>\n    <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">\'4\'</span><span class="token punctuation">,</span>\n    <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">150</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">{</span>\n    <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">\'Column 5\'</span><span class="token punctuation">,</span>\n    <span class="token literal-property property">dataIndex</span><span class="token operator">:</span> <span class="token string">\'address\'</span><span class="token punctuation">,</span>\n    <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">\'5\'</span><span class="token punctuation">,</span>\n    <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">150</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">{</span>\n    <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">\'Column 6\'</span><span class="token punctuation">,</span>\n    <span class="token literal-property property">dataIndex</span><span class="token operator">:</span> <span class="token string">\'address\'</span><span class="token punctuation">,</span>\n    <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">\'6\'</span><span class="token punctuation">,</span>\n    <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">150</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">{</span>\n    <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">\'Column 7\'</span><span class="token punctuation">,</span>\n    <span class="token literal-property property">dataIndex</span><span class="token operator">:</span> <span class="token string">\'address\'</span><span class="token punctuation">,</span>\n    <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">\'7\'</span><span class="token punctuation">,</span>\n    <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">150</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">{</span> <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">\'Column 8\'</span><span class="token punctuation">,</span> <span class="token literal-property property">dataIndex</span><span class="token operator">:</span> <span class="token string">\'address\'</span><span class="token punctuation">,</span> <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">\'8\'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">{</span>\n    <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">\'Action\'</span><span class="token punctuation">,</span>\n    <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">\'operation\'</span><span class="token punctuation">,</span>\n    <span class="token literal-property property">fixed</span><span class="token operator">:</span> <span class="token string">\'right\'</span><span class="token punctuation">,</span>\n    <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span>\n    <span class="token function-variable function">render</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span><span class="token punctuation">></span></span>action<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">]</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> data <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">100</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  data<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n    <span class="token literal-property property">key</span><span class="token operator">:</span> i<span class="token punctuation">,</span>\n    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">Edrward </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>i<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">,</span>\n    <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">32</span><span class="token punctuation">,</span>\n    <span class="token literal-property property">address</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">London Park no. </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>i<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">function</span> <span class="token function">Demo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">const</span> <span class="token punctuation">[</span>bottomOffset<span class="token punctuation">,</span> setBottomOffset<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>\n  <span class="token keyword">return</span> <span class="token punctuation">(</span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>\n          <span class="token literal-property property">marginBottom</span><span class="token operator">:</span> <span class="token number">20</span>\n      <span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">></span></span>bottomOffset：<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">InputNumber</span></span> <span class="token attr-name">value</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>bottomOffset<span class="token punctuation">}</span></span> <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>setBottomOffset<span class="token punctuation">}</span></span><span class="token punctuation">/></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Table</span></span>\n        <span class="token attr-name">bottomOffset</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>bottomOffset<span class="token punctuation">}</span></span>\n        <span class="token attr-name">columns</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>columns<span class="token punctuation">}</span></span>\n        <span class="token attr-name">dataSource</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>data<span class="token punctuation">}</span></span>\n        <span class="token attr-name">scroll</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> <span class="token literal-property property">x</span><span class="token operator">:</span> <span class="token number">1500</span><span class="token punctuation">,</span> <span class="token literal-property property">y</span><span class="token operator">:</span> <span class="token number">300</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span>\n        <span class="token attr-name">onScrollEnd</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n          message<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">\'已滚动到底部\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span><span class="token punctuation">}</span></span>\n      <span class="token punctuation">/></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span>\n  <span class="token punctuation">)</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Demo</span></span><span class="token punctuation">/></span></span><span class="token punctuation">,</span> mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>'},preview:function(){var n=a(0),s=(a(37),a(17)),t=a(0);function p(n,s){return function(n){if(Array.isArray(n))return n}(n)||function(n,s){var a=null==n?null:"undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null!=a){var t,p,o,e,c=[],l=!0,u=!1;try{if(o=(a=a.call(n)).next,0===s){if(Object(a)!==a)return;l=!1}else for(;!(l=(t=o.call(a)).done)&&(c.push(t.value),c.length!==s);l=!0);}catch(n){u=!0,p=n}finally{try{if(!l&&null!=a.return&&(e=a.return(),Object(e)!==e))return}finally{if(u)throw p}}return c}}(n,s)||function(n,s){if(!n)return;if("string"==typeof n)return o(n,s);var a=Object.prototype.toString.call(n).slice(8,-1);"Object"===a&&n.constructor&&(a=n.constructor.name);if("Map"===a||"Set"===a)return Array.from(n);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return o(n,s)}(n,s)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(n,s){(null==s||s>n.length)&&(s=n.length);for(var a=0,t=new Array(s);a<s;a++)t[a]=n[a];return t}for(var e=[{title:"Full Name",width:100,dataIndex:"name",key:"name",fixed:"left"},{title:"Age",width:100,dataIndex:"age",key:"age",fixed:"left"},{title:"Column 1",dataIndex:"address",key:"1",width:150},{title:"Column 2",dataIndex:"address",key:"2",width:150},{title:"Column 3",dataIndex:"address",key:"3",width:150},{title:"Column 4",dataIndex:"address",key:"4",width:150},{title:"Column 5",dataIndex:"address",key:"5",width:150},{title:"Column 6",dataIndex:"address",key:"6",width:150},{title:"Column 7",dataIndex:"address",key:"7",width:150},{title:"Column 8",dataIndex:"address",key:"8"},{title:"Action",key:"operation",fixed:"right",width:100,render:function(){return n.createElement("a",null,"action")}}],c=[],l=0;l<100;l++)c.push({key:l,name:"Edrward ".concat(l),age:32,address:"London Park no. ".concat(l)});function u(){var a=p((0,t.useState)(0),2),o=a[0],l=a[1];return n.createElement(n.Fragment,null,n.createElement("div",{style:{marginBottom:20}},n.createElement("span",null,"bottomOffset："),n.createElement(s.InputNumber,{value:o,onChange:l})),n.createElement(s.HlTable,{bottomOffset:o,columns:e,dataSource:c,scroll:{x:1500,y:300},onScrollEnd:function(){s.message.info("已滚动到底部")}}))}return n.createElement(u,null)}}}}]);