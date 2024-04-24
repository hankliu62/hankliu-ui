---
order: 4
title:
  zh-CN: 自定义描述文案
  en-US: Customized description
---

## zh-CN

自定义描述文案。

## en-US

Customized description content.

```jsx
import { HlSpin as Spin, Alert } from '@hankliu/hankliu-ui';

ReactDOM.render(
  <Spin title="正在加载中">
    <Alert
      message="Alert message title"
      description="Further details about the context of this alert."
      type="error"
    />
  </Spin>,
  mountNode,
);
```
