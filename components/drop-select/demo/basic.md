---
order: 0
title:
  zh-CN: 基本
  en-US: Basic
---

## zh-CN

最简单的下拉菜单。

## en-US

The most basic dropdown menu.

````jsx
import { DropSelect, Icon } from '@hankliu/hankliu-ui';
import IconSelect from '@ant-design/icons/SelectOutlined'

const options = [{
  title: 'test1',
  value: 1,
}, {
  title: 'test2',
  value: 2,
}, {
  title: 'test3',
  value: 3,
  disabled: true,
}];

class App extends React.Component {
  state = { value: 2 }

  change = (value) => {
    this.setState({value});
  }

  render() {
    const { value } = this.state
    return (
      <DropSelect value={value} onChange={this.change} options={options}>
        <a className="ant-dropdown-link" href="#">
          Hover me <IconSelect />
        </a>
      </DropSelect>
    )
  }
};

ReactDOM.render(<App />, mountNode);
````
