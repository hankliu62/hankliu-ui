---
order: 3
title:
  zh-CN: 包含子组件
  en-US: Contains sub component
---

## zh-CN

加载占位图包含子组件。

## en-US

Skeleton contains sub component.

```tsx
import { Button, Skeleton } from '@hankliu/hankliu-ui';
import { useState } from 'react';

const Demo = () => {
  let [state, setState] = useState<any>({ loading: false });

  const showSkeleton = () => {
    setState({ loading: true });
    setTimeout(() => {
      setState({ loading: false });
    }, 3000);
  };

  return (
    <div className="article">
      <Skeleton loading={state.loading}>
        <div>
          <h4>Ant Design, a design language!</h4>
          <p>
            We supply a series of design principles, practical patterns and high quality design
            resources (Sketch and Axure), to help people create their product prototypes beautifully
            and efficiently.
          </p>
        </div>
      </Skeleton>
      <Button onClick={showSkeleton} disabled={state.loading}>
        Show Skeleton
      </Button>
    </div>
  );
};

ReactDOM.render(<Demo />, mountNode);
```

<style>
.article h4 {
  margin-bottom: 16px;
}
.article button {
  margin-top: 16px;
}
</style>
