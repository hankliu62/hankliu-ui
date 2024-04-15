---
order: 1
title:
  zh-CN: 包含标题
  en-US: Title
---

## zh-CN

包含标题的下拉选择

````jsx
import { DropSelect } from '@hankliu/hankliu-ui';
import DownOutlined from '@ant-design/icons/DownOutlined'
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
      <DropSelect title="The title" value={value} onChange={this.change} options={options}>
        <a className="ant-dropdown-link" href="#">
          Hover me <DownOutlined />
        </a>
      </DropSelect>
    )
  }
};

ReactDOM.render(<App />, mountNode);
````
