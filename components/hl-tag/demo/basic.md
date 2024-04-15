---
order: 0
title:
  zh-CN: 基本
  en-US: Basic
---

## zh-CN

基本标签的用法，可以通过添加 `closable` 变为可关闭标签。可关闭标签具有 `onClose` 事件。

可以通过设置 type 值设置三种常见标签形式；三种标签都可通过设置 `maxWidth` 和 `ellipsis` 控制标签长度和内容过长时候的文字样式。

## en-US

Usage of basic HlTag, and it could be closable by set `closable` property. Closable HlTag supports `onClose` `afterClose` events.

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
      <HlTag className="mr-4">Default HlTag</HlTag>
      <HlTag className="mr-4">超长文字的 HlTag 不设置 maxWidth 超长超长超长</HlTag>
      <HlTag className="mr-4" closable onClose={preventDefault}>点击关闭试试</HlTag>
      <HlTag className="mr-4" closable>我可以被关闭</HlTag>
    </div>
    <h5>simple</h5>
    <div className="mb-12">
      <HlTag className="mr-4" type="simple">Simple HlTag</HlTag>
      <HlTag className="mr-4" type="simple" maxWidth="200px" ellipsis>超长文字的 HlTag 设置 ellipsis 超长超长超长</HlTag>
      <HlTag closable onClose={preventDefault} type="simple">点击关闭试试</HlTag>
    </div>
    <h5>heavy</h5>
    <div>
      <HlTag type="heavy" className="mr-4">Heavy HlTag</HlTag>
      <HlTag type="heavy" className="mr-4" maxWidth="100px">超长文字的 HlTag 设置 maxWidth 超长超长超长</HlTag>
      <HlTag closable onClose={preventDefault} type="heavy">点击关闭试试</HlTag>
    </div>

  </div>,
  mountNode
);
````
