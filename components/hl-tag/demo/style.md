---
order: 3
title:
  zh-CN: 自定义样式
  en-US: Style
---

## zh-CN

自定义样式的标签用法


````jsx
import { HlTag } from '@hankliu/hankliu-ui';

function log(e) {
  console.log(e);
}

function preventDefault(e) {
  e.preventDefault();
  window.alert('Clicked! But prevent default.');
}

ReactDOM.render(
  <div>
    <h5>default</h5>
    <div className="mb-12">
      <HlTag className="mr-4" style={{backgroundColor: '#add'}}>Default HlTag</HlTag>
      <HlTag className="mr-4" style={{backgroundColor: '#ff7f79', borderRadius: 8}} closable>我可以被关闭</HlTag>
    </div>
    <h5>simple</h5>
    <div className="mb-12">
      <HlTag className="mr-4" type="simple">Simple HlTag</HlTag>
      <HlTag className="mr-4" type="simple" style={{color: '#fff', borderColor: '#ff7f79',backgroundColor: '#ff7f79'}} maxWidth="200px" ellipsis>超长文字的 HlTag 设置 ellipsis 超长超长超长</HlTag>
      <HlTag closable onClose={preventDefault} type="simple" style={{color: '#ff7f79'}}>点击关闭试试</HlTag>
    </div>
  </div>,
  mountNode
);
````
