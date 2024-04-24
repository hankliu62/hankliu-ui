---
order: 1
title:
  zh-CN: 选择列表组
  en-US: CheckListGroup
---

选择列表组的用法

```jsx
import { CheckList, Switch } from '@hankliu/hankliu-ui';

const options = [
  {
    title: '北京',
    value: '1',
  },
  {
    title: '上海',
    value: '2',
  },
  {
    title: '重庆',
    subtitle: '25',
    value: '3',
  },
  {
    title: '武汉',
    value: '4',
  },
  {
    title: '大连',
    value: '5',
  },
  {
    title: '成都',
    value: '6',
  },
  {
    title: '杭州',
    value: '7',
  },
  {
    title: '苏州',
    value: '8',
  },
];

class Demo extends React.Component {
  state = {
    value: [],
    moreSelect: true,
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
        <CheckList.Group
          disabled={disabled}
          moreSelect={moreSelect}
          moreSelectProps={{ placeholder: '请选择其他城市' }}
          title="城市"
          subtitle="268"
          value={value}
          onChange={(value) => this.setState({ value })}
          max={5}
          options={options}
        />
      </div>
    );
  }
}

ReactDOM.render(<Demo />, mountNode);
```
