---
order: 5
title:
  zh-CN: 内置图片
  en-US: Inner Image

---

## zh-CN

Empty.IMAGES 预览

## en-US

Empty.IMAGES preview

```jsx
import { Empty, Radio, Select } from '@hankliu/hankliu-ui';

const { IMAGES } = Empty;

class App extends React.Component {
  render() {
    return (
      <div className="empty-preview-wrap">
        {Object.keys(IMAGES).map(key => {
          return (
            <div className="empty-preview">
              <p>{key}</p>
              <div className="empty-preview-item">
                <Empty image={IMAGES[key]} />
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

ReactDOM.render(<App />, mountNode);
```

<style>
.empty-preview-wrap {
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
}
.empty-preview {
  width: 200px;
  text-align: center;
  margin: 0 0 50px;
}
.empty-preview-item {
  display: flex;
  justify-content: center;
}
</style>
