---
order: 4
title:
  zh-CN: 固定高度
  en-US: fixed-height
---

指定每一列的高度

此外你可以修改 option 的字段映射

````jsx
import { MenuSelect } from '@hankliu/hankliu-ui';

class Demo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [{
        title: 'Node1',
        value: '0-0',
        children: [{
          title: 'Child Node1',
          value: '0-0-0',
          children: [{
            title: 'Child Node1 child node1',
            value: '0-0-0-0',
            children: [{
              title: 'Child Node1 child node1 child node1',
              value: '0-0-0-0-0',
            }, {
              title: 'Child Node1 child node1 child node2',
              value: '0-0-0-0-1',
            }],
          }, {
            title: 'Child Node1 child node2',
            value: '0-0-0-1',
          }],
        }, {
          title: 'Child Node2',
          value: '0-0-1',
          children: [{
            title: 'Child Node2 child node1',
            value: '0-0-1-0',
          }, {
            title: 'Child Node2 child node2',
            value: '0-0-1-1',
          }],
        }, {
          title: 'Child Node3',
          value: '0-0-3'
        }, {
          title: 'Child Node4',
          value: '0-0-4'
        }, {
          title: 'Child Node5',
          value: '0-0-5'
        }, {
          title: 'Child Node6',
          value: '0-0-6'
        }],
      }, {
        title: 'Node2',
        value: '0-1',
        children: [{
          title: 'Child Node3',
          value: '0-1-0',
          children: [{
            title: 'Child Node3 child node1',
            value: '0-1-0-0',
          }, {
            title: 'Child Node3 child node2',
            value: '0-1-0-1',
          }],
        }, {
          title: 'Child Node4',
          value: '0-1-1',
        }, {
          title: 'Child Node5',
          value: '0-1-2',
        }],
      }],
      value: ["0-0-1", "0-0-1-0", "0-0-1-1"],
    }
  }
  render() {
    const {data, value} = this.state
    return (
      <MenuSelect
        options={data}
        fieldNames={{ label: 'title' }}
        value={value}
        onChange={value => {
          this.setState({
            value
          })
          console.log(value)
        }}
        onSelect={(option, menuIndex) => {
          console.log(option, menuIndex)
        }}
        menuColumnStyle={{
          maxWidth: 240,
          height: 120,
        }}
      />
    );
  }
}

ReactDOM.render(<Demo />, mountNode);
````
