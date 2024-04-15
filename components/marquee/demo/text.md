---
order: 1
title:
  zh-CN: 文字内容
  en-US: Text
---

文字水平和垂直方向的循环滚动

````jsx
import { Marquee } from '@hankliu/hankliu-ui';

class DemoApp extends React.Component {

  render() {
    return (
      <div>
        <h3>水平方向：</h3>
        <Marquee height={30}>
          <div style={{lineHeight: '30px', whiteSpace: 'nowrap'}}>反过来，运动（movement）这个词含有时间的成分，表示为运动的东西是无始无终的。颜色选择器支持渐变，修复火狐浏览器的文件选择问题</div>
        </Marquee>
        <h3>垂直方向：</h3>
        <Marquee direction={Marquee.VERTICAL} height={30}>
          <div style={{lineHeight: '30px'}}>反过来，运动（movement）这个词含</div>
        </Marquee>
      </div>
    );
  }
}

ReactDOM.render(
  <DemoApp/>,
  mountNode
);
````
