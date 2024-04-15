---
order: 2
title:
  zh-CN: 位置
  en-US: Placement
---

## zh-CN

位置有十二个方向。

## en-US

There are 12 `placement` options available.

```jsx
import { HlPopover, Button } from '@hankliu/hankliu-ui';

const text = <span>Title</span>;
const content = (
  <div>
    <p>Content</p>
    <p>Content</p>
  </div>
);

const buttonWidth = 70;

ReactDOM.render(
  <div className="demo">
    <div style={{ marginLeft: buttonWidth, whiteSpace: 'nowrap' }}>
      <HlPopover placement="topLeft" title={text} content={content} trigger="click">
        <Button>TL</Button>
      </HlPopover>
      <HlPopover placement="top" title={text} content={content} trigger="click">
        <Button>Top</Button>
      </HlPopover>
      <HlPopover placement="topRight" title={text} content={content} trigger="click">
        <Button>TR</Button>
      </HlPopover>
    </div>
    <div style={{ width: buttonWidth, float: 'left' }}>
      <HlPopover placement="leftTop" title={text} content={content} trigger="click">
        <Button>LT</Button>
      </HlPopover>
      <HlPopover placement="left" title={text} content={content} trigger="click">
        <Button>Left</Button>
      </HlPopover>
      <HlPopover placement="leftBottom" title={text} content={content} trigger="click">
        <Button>LB</Button>
      </HlPopover>
    </div>
    <div style={{ width: buttonWidth, marginLeft: buttonWidth * 4 + 24 }}>
      <HlPopover placement="rightTop" title={text} content={content} trigger="click">
        <Button>RT</Button>
      </HlPopover>
      <HlPopover placement="right" title={text} content={content} trigger="click">
        <Button>Right</Button>
      </HlPopover>
      <HlPopover placement="rightBottom" title={text} content={content} trigger="click">
        <Button>RB</Button>
      </HlPopover>
    </div>
    <div style={{ marginLeft: buttonWidth, clear: 'both', whiteSpace: 'nowrap' }}>
      <HlPopover placement="bottomLeft" title={text} content={content} trigger="click">
        <Button>BL</Button>
      </HlPopover>
      <HlPopover placement="bottom" title={text} content={content} trigger="click">
        <Button>Bottom</Button>
      </HlPopover>
      <HlPopover placement="bottomRight" title={text} content={content} trigger="click">
        <Button>BR</Button>
      </HlPopover>
    </div>
  </div>,
  mountNode,
);
```

<style>
.code-box-demo .demo {
  overflow: auto;
}
.code-box-demo .hlui-btn {
  margin-right: 8px;
  margin-bottom: 8px;
}
.code-box-demo .hlui-btn-rtl {
  margin-right: 0;
  margin-left: 8px;
  margin-bottom: 8px;
}
#components-HlPopover-demo-placement .hlui-btn {
  width: 70px;
  text-align: center;
  padding: 0;
}
</style>
