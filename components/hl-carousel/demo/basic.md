---
order: 0
title:
  zh-CN: 基本
  en-US: Basic
---

## zh-CN

最简单的用法。

## en-US

Basic usage.

```jsx
import { HlCarousel, Button } from '@hankliu/hankliu-ui';

function onChange(a, b, c) {
  console.log(a, b, c);
}

const contentStyle = {
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};

const CarouselDemo = () => {
  const carouselRef = React.useRef();

  return (
    <div>
      <HlCarousel afterChange={onChange} ref={carouselRef}>
        <div>
          <h3 style={contentStyle}>1</h3>
        </div>
        <div>
          <h3 style={contentStyle}>2</h3>
        </div>
        <div>
          <h3 style={contentStyle}>3</h3>
        </div>
        <div>
          <h3 style={contentStyle}>4</h3>
        </div>
      </HlCarousel>
      <br />
      <br />
      <Button onClick={() => carouselRef.current.prev()}>prev</Button>
      <Button onClick={() => carouselRef.current.goTo(2)} className="ml-10 mr-10">
        goTo 2
      </Button>
      <Button onClick={() => carouselRef.current.next()}>next</Button>
    </div>
  );
};

ReactDOM.render(<CarouselDemo />, mountNode);
```
