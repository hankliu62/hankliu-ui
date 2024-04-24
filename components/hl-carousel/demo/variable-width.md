---
order: 3
title:
  zh-CN: 转轴模式
  en-US: HlCarousel.Scroll
---

横向转轴模式，需要设置子元素宽度 `slideWidth`

```jsx
import { HlCarousel } from '@hankliu/hankliu-ui';

const items = [
  {
    title: '公模',
  },
  {
    title: '私模',
  },
  {
    title: '提取物',
  },
  {
    title: '专利产品',
  },
  {
    title: '瓶子',
  },
  {
    title: '杯子',
  },
  {
    title: '桌椅',
  },
  {
    title: '板凳',
  },
];

function testClick() {
  console.log('item clicked');
}

function renderItem(item, idx) {
  return (
    <div key={idx} className="c-variable-item" onClick={testClick}>
      <img src={`https://gravatar.com/avatar/${idx}?s=200&d=robohash&r=x`} alt="" />
      <div>{item.title}</div>
    </div>
  );
}

// 自定义 arrow 的位置
const coustomArrowStyle = { top: 40 };

ReactDOM.render(
  <HlCarousel.Scroll
    slidesToScroll={3}
    slideWidth={120}
    prevArrowStyle={coustomArrowStyle}
    nextArrowStyle={coustomArrowStyle}
  >
    {items.map(renderItem)}
  </HlCarousel.Scroll>,
  mountNode,
);
```

```css
/* For demo */
.c-variable-item {
  width: 80px;
  margin: auto;
  text-align: center;
}
.c-variable-item img {
  display: block;
  width: 80px;
  height: 80px;
  margin-bottom: 10px;
  background-color: #fefefe;
  border-radius: 50%;
}
```
