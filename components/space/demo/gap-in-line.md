---
order: 99
title:
  zh-CN: Flex gap 样式
  en-US: Flex gap style
debug: true
---

## zh-CN

Debug usage

## en-US

Debug usage

```tsx
import { Space, Switch } from '@hankliu/hankliu-ui';

const style: React.CSSProperties = {
  width: 150,
  height: 100,
  background: 'red',
};

const Demo = () => {
  const [singleCol, setSingleCol] = React.useState(false);

  return (
    <>
      <Switch
        checked={singleCol}
        onChange={() => {
          setSingleCol(!singleCol);
        }}
      />
      <div style={{ boxShadow: '0 0 5px green' }}>
        <Space style={{ width: singleCol ? 307 : 310, background: 'blue' }} size={[8, 8]} wrap>
          <div style={style} />
          <div style={style} />
          <div style={style} />
          <div style={style} />
        </Space>
      </div>
    </>
  );
};

ReactDOM.render(<Demo />, mountNode);
```
