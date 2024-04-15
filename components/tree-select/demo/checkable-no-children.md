---
order: 3
title:
  zh-CN: 只有一级的 Checkbox 模式
  en-US: NO Children Checkable
---

只有一级节点的勾选框实现多选功能；相当于 Select 控件下 Option 添加了 Checkbox

````jsx
import { TreeSelect, Radio } from '@hankliu/hankliu-ui';


const RadioGroup = Radio.Group;

const treeData = [{
  title: 'Node1',
  value: '1',
  key: '1',
}, {
  title: 'Node2',
  value: '2',
  key: '2',
}, {
  title: 'Node3',
  value: '3',
  key: '3',
}, {
  title: 'Node4',
  value: '4',
  key: '4',
}];

class Demo extends React.Component {
  state = {
    value: undefined,
    size: 'default'
  }

  onChange = (value, ...others) => {
    console.log('onChange ', value);
    console.log(others);
    this.setState({ value });
  }

  render() {
    const tProps = {
      treeData,
      value: this.state.value,
      onChange: this.onChange,
      treeCheckable: true,
      style: {
        width: 300,
      },
    };
    return (
      <TreeSelect {...tProps} size={this.state.size}/>
    );
  }
}

ReactDOM.render(<Demo />, mountNode);
````
