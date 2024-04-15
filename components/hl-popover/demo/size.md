---
order: 0
title:
  zh-CN: 大小
  en-US: Size
---

## zh-CN

设置大小，支持 `large` `default`

## en-US

````jsx
import { HlPopover, Button } from '@hankliu/hankliu-ui';

const content = '这里输入一段长文字作为视觉预览。';

ReactDOM.render(
  <div>
    <HlPopover content={content} title="This is Title">
      <Button type="primary">设置了 title 时默认为 large</Button>
    </HlPopover>
    <br/>
    <HlPopover content={content} size="default" title="This is Title">
      <Button type="primary">设置了 title 时，你也可以手动设置为 default</Button>
    </HlPopover>
    <br/>
    <HlPopover content={content}>
      <Button type="primary">没有 title & size=default</Button>
    </HlPopover>
    <HlPopover content={content} size="large">
      <Button type="primary">没有 title & size=large</Button>
    </HlPopover>
    <br />
    <HlPopover content={content} size="small" title="Title">
      <Button type="primary">Size Small</Button>
    </HlPopover>
  </div>,
  mountNode,
);
````

<style>
p {
  margin: 0;
}
</style>
