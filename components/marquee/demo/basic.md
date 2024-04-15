---
order: 0
title:
  zh-CN: 基本使用
  en-US: Basic Usage
---

模拟图片的轮播效果

````jsx
import { Marquee, Image } from '@hankliu/hankliu-ui';

const items = [{
  name: "百度图",
  title: "picture 7",
  src: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
}, {
  name: "百度图",
  title: "picture 8",
  src: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
}, {
  name: "百度图",
  title: "picture 9",
  src: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
}, {
  name: "百度图",
  title: "picture 10",
  src: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
}, {
  name: "百度图",
  title: "picture 11",
  src: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
}, {
  name: "百度图",
  title: "picture 12",
  src: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
}, {
  name: "百度图",
  title: "picture 13",
  src: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
}, {
  name: "百度图",
  title: "picture 14",
  src: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
}, {
  name: "百度图",
  title: "picture 15",
  src: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
}, {
  name: "百度图",
  title: "picture 16",
  src: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
}, {
  name: "百度图",
  title: "picture 17",
  src: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
}];


const itemStyle = {
  width: 200,
  height: 200,
  float: 'left',
  padding: 20
}

const imgStyle = {
  display: 'block',
  width: '100%',
  height: '100%',
  objectFit: 'cover'
}

class DemoApp extends React.Component {

  render() {
    return (
      <div>
        <Marquee height={200}>
          <div style={{ width: 200 * items.length }}>
            { items.map(item => <div style={itemStyle}><img src={item.src} style={imgStyle} /></div> ) }
          </div>
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
