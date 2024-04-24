---
order: 0
title:
  zh-CN: 基本用法
  en-US: Basic
---

CheckList 基本用法

```jsx
import { CheckList, Switch } from '@hankliu/hankliu-ui';

const options = [
  {
    title:
      '天策上将太尉领司徒尚书令陕东道大行台益州道行台尚书令雍州牧凉州总管左右武候大将军上柱国秦王世民',
    value: '1',
    subtitle: '001',
  },
  {
    title: '程序员',
    value: '2',
  },
  {
    title: '产品经理',
    subtitle: '25',
    value: '3',
  },
  {
    title: '测试工程师',
    value: '4',
  },
  {
    title: '运维工程师',
    value: '5',
  },
  {
    title: '交互设计师',
    value: '6',
  },
  {
    title: 'CEO',
    value: '7',
  },
  {
    title: '产品总监',
    value: '8',
  },
];

class Demo extends React.Component {
  state = {
    value: [],
    moreSelect: false,
    disabled: false,
  };
  render() {
    const { value, disabled, moreSelect } = this.state;
    return (
      <div>
        <div className="display-flex mb-12">
          <div style={{ width: 100 }}>moreSelect: </div>
          <div className="flex-1">
            <Switch checked={moreSelect} onChange={(v) => this.setState({ moreSelect: v })} />
          </div>
        </div>
        <div className="display-flex mb-12">
          <div style={{ width: 100 }}>disabled: </div>
          <div className="flex-1">
            <Switch checked={disabled} onChange={(v) => this.setState({ disabled: v })} />
          </div>
        </div>
        <CheckList
          disabled={disabled}
          moreSelect={moreSelect}
          value={value}
          onChange={(value) => {
            this.setState({ value });
            console.log('onChange', value);
          }}
          max={5}
          options={options}
        />
      </div>
    );
  }
}

ReactDOM.render(<Demo />, mountNode);
```
