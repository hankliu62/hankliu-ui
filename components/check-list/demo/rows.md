---
order: 3
title:
    zh-CN: 选择列表组群（横向排列）
    en-US: Groups (layout horizontal)
---

选择列表组群

````jsx
import { CheckList, Switch } from '@hankliu/hankliu-ui';

const groups = [{
  key: 'city',
  title: '城市',
  max: 5,
  moreSelect: false,
  options: [{
    title: '北京',
    value: '1'
  }, {
    title: '上海',
    value: '2'
  }, {
    title: '重庆',
    subtitle: '25',
    value: '3'
  }, {
    title: '武汉',
    value: '4'
  }, {
    title: '大连',
    value: '5'
  }, {
    title: '成都',
    value: '6'
  }, {
    title: '杭州',
    value: '7'
  }, {
    title: '苏州',
    value: '8'
  }]
}, {
  key: 'role',
  title: '职业',
  subtitle: 87,
  max: 4,
  options: [{
    title: '程序员',
    value: '2'
  }, {
    title: '产品经理',
    subtitle: '25',
    value: '3'
  }, {
    title: '测试工程师',
    value: '4'
  }, {
    title: '运维工程师',
    value: '5'
  }, {
    title: '交互设计师',
    value: '6'
  }, {
    title: 'CEO',
    value: '7'
  }, {
    title: '产品总监',
    value: '8'
  }]
}, {
  key: 'study',
  title: '学历',
  subtitle: 4,
  max: 4,
  options: [{
    title: '高中',
    value: '1'
  }, {
    title: '大学',
    value: '2'
  }, {
    title: '研究生',
    subtitle: '25',
    value: '3'
  }, {
    title: '博士',
    value: '4'
  }]
}, {
  key: 'work',
  title: '工作经验',
  subtitle: 4,
  max: 4,
  options: [{
    title: '无',
    value: '1'
  }, {
    title: '一年',
    value: '2'
  }, {
    title: '二年',
    subtitle: '25',
    value: '3'
  }, {
    title: '三年',
    value: '4'
  }, {
    title: '四年',
    value: '5'
  }, {
    title: '五年',
    value: '6'
  }]
}]

class Demo extends React.Component {
  state = {
    value: [],
    moreSelect: true,
    disabled: false
  }

  handleChange = (value) => {
    console.log('value is: ', value)
    this.setState({value})
  }

  render() {
    const { value, disabled, moreSelect } = this.state
    return (
      <div>
        <CheckList.Rows
          disabled={disabled}
          value={value}
          onChange={this.handleChange}
          rows={groups.slice(0, 3)}
        />
        <br/>
        <div>当一级内容比较多时会出现横向滚动条</div>
        <CheckList.Rows
          disabled={disabled}
          value={value}
          onChange={this.handleChange}
          rows={groups}
        />
        <br/>
        <div>可以设定 useDropdown 为 false 解决 IE 下渲染 Dropdown 的闪屏 bug </div>
        <div>
        当 useDropdown 为 false 时，二级菜单的 z-index 受组件的 z-index 影响，所以需要注意组件所在位置的优先级 ，可以通过 style 设置组件的 z-index
        </div>
        <CheckList.Rows
          disabled={disabled}
          value={value}
          onChange={this.handleChange}
          rows={groups}
          useDropdown={false}
          style={{ zIndex: 9 }}
        />
      </div>
    )
  }
}

ReactDOM.render(
  <Demo />,
  mountNode
);
````
