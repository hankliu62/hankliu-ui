---
order: 6
title:
  zh-CN: 块级
  en-US: Block
---

## zh-CN

块状 Spin

## en-US

Spin with Block.

````jsx
import { HlSpin as Spin, Switch } from '@hankliu/hankliu-ui';

class Card extends React.Component {
  state = { loading: false }

  toggle = (value) => {
    this.setState({ loading: value });
  }

  render() {
    return (
      <div>
        <div className="example-block">
          <Spin loading={this.state.loading} block >
          Text....
          </Spin>
        </div>
        <div style={{ marginTop: 16 }}>
          Loading state：<Switch checked={this.state.loading} onChange={this.toggle} />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<Card />,
  mountNode,
);
````

````css
.example-block {
  display: flex;
  text-align: center;
  background: rgba(0,0,0,0.05);
  border-radius: 4px;
  margin-bottom: 20px;
  padding: 30px 50px;
  margin: 20px 0;
  height: 300px;
}
````
