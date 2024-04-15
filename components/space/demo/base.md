---
order: 0
title:
  zh-CN: 基本用法
  en-US: Basic Usage
---

## zh-CN

相邻组件水平间距。

## en-US

Crowded components horizontal spacing.

```jsx
import { Button, Space, Popconfirm } from '@hankliu/hankliu-ui';

function SpaceDemo() {
  return (
    <Space>
      Space
      <Button type="primary">Button</Button>
      <Popconfirm title="Are you sure delete this task?" okText="Yes" cancelText="No">
        <Button>Confirm</Button>
      </Popconfirm>
    </Space>
  );
}

ReactDOM.render(<SpaceDemo />, mountNode);
```
