---
order: 3
title:
  zh-CN: 输入框模式
  en-US: input
---

## zh-CN

使用输入框模式的选择器

````jsx
import { MenuSelect, Radio } from '@hankliu/hankliu-ui';

const RadioGroup = Radio.Group;

class Demo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [{
        label: 'Node1',
        value: '0-0',
        children: [{
          label: 'Child Node1',
          value: '0-0-0',
          children: [{
            label: 'Child Node1 child node1',
            value: '0-0-0-0',
          }, {
            label: 'Child Node1 child node2',
            value: '0-0-0-1',
          }],
        }, {
          label: 'Child Node2',
          value: '0-0-1',
          children: [{
            label: 'Child Node2 child node1',
            value: '0-0-1-0',
          }, {
            label: 'Child Node2 child node2',
            value: '0-0-1-1',
          }],
        }],
      }, {
        label: 'Node2',
        value: '0-1',
        children: [{
          label: 'Child Node3',
          value: '0-1-0',
          children: [{
            label: 'Child Node3 child node1',
            value: '0-1-0-0',
          }, {
            label: 'Child Node3 child node2',
            value: '0-1-0-1',
          }],
        }, {
          label: 'Child Node4',
          value: '0-1-1',
        }, {
          label: 'Child Node5',
          value: '0-1-2',
        }],
      }],
      value: ["0-0-1", "0-0-1-0", "0-0-1-1"],
      showCheckedStrategy: MenuSelect.SHOW_CHILD
    }
  }

  changeStrategy = (e) => {
    this.setState({ showCheckedStrategy: e.target.value })
  }

  render() {
    const {data, value, showCheckedStrategy} = this.state
    return (
      <div>
        <RadioGroup className="layout-rows" onChange={this.changeStrategy} value={showCheckedStrategy}>
          <Radio value={MenuSelect.SHOW_PARENT}>MenuSelect.SHOW_PARENT</Radio>
          <Radio value={MenuSelect.SHOW_CHILD}>MenuSelect.SHOW_CHILD</Radio>
          <Radio value={MenuSelect.SHOW_ALL}>MenuSelect.SHOW_ALL</Radio>
        </RadioGroup>
        <br/>
        <br/>
        <MenuSelect
          type="input"
          options={data}
          value={value}
          width={360}
          // height="lock"
          showCheckedStrategy={showCheckedStrategy}
          defaultActiveValue={["0-0"]}
          onChange={value => {
            this.setState({
              value
            })
            console.log(value)
          }}
          onSelect={(option, menuIndex) => {
            console.log(option, menuIndex)
          }}
          onDropdownVisibleChange={(open) => {
            console.log(open)
          }}
        />
      </div>
    );
  }
}

ReactDOM.render(<Demo />, mountNode);
````
