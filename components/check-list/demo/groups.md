---
order: 2
title:
  zh-CN: 选择列表组群
  en-US: Groups
---

选择列表组群

```jsx
import { CheckList, Switch } from '@hankliu/hankliu-ui';

const groups = [
  {
    key: 'city',
    title: '城市',
    subtitle: 256,
    max: 5,
    moreSelect: false,
    options: [
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
    ],
  },
  {
    key: 'role',
    title: '职业',
    subtitle: 87,
    max: 4,
    options: [
      {
        title:
          '天策上将太尉领司徒尚书令陕东道大行台益州道行台尚书令雍州牧凉州总管左右武候大将军上柱国秦王世民',
        value: '1',
        ellipsis: true,
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
    ],
  },
  {
    key: 'study',
    title: '学历',
    subtitle: 4,
    max: 4,
    options: [
      {
        title: '高中',
        value: '1',
      },
      {
        title: '大学',
        value: '2',
      },
      {
        title: '研究生',
        subtitle: '25',
        value: '3',
      },
      {
        title: '博士',
        value: '4',
      },
    ],
  },
  {
    key: 'work',
    title: '工作经验',
    subtitle: 4,
    max: 4,
    options: [
      {
        title: '无',
        value: '1',
      },
      {
        title: '一年',
        value: '2',
      },
      {
        title: '二年',
        subtitle: '25',
        value: '3',
      },
      {
        title: '三年',
        value: '4',
      },
      {
        title: '四年',
        value: '5',
      },
      {
        title: '五年',
        value: '6',
      },
    ],
  },
];

class Demo extends React.Component {
  state = {
    value: [],
    moreSelect: true,
    disabled: false,
  };

  handleChange = (value) => {
    console.log('value is: ', value);
    this.setState({ value });
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
        <CheckList.Groups
          defaultActiveKey={['role']}
          disabled={disabled}
          moreSelect={moreSelect}
          value={value}
          onChange={this.handleChange}
          max={3}
          groups={groups}
        />
      </div>
    );
  }
}

ReactDOM.render(<Demo />, mountNode);
```
