---
order: 9
title:
  zh-CN: 加载中状态
  en-US: Loading
---

## zh-CN

添加 `loading` 属性即可让按钮处于加载状态，最后两个按钮演示点击后进入加载状态。

## en-US

A loading indicator can be added to a button by setting the `loading` property on the `Dropdown.Button`.

```jsx
import { Menu, Dropdown, Space } from '@hankliu/hankliu-ui';
import { DownOutlined } from '@ant-design/icons';

const items: MenuProps['items'] = [
  {
    label: 'Submit and continue',
    key: '1',
  },
];
class App extends React.Component {
  state = {
    loadings: [],
  };

  enterLoading = index => {
    const newLoadings = [...this.state.loadings];
    newLoadings[index] = true;
    this.setState({
      loadings: newLoadings,
    });
    setTimeout(() => {
      newLoadings[index] = false;
      this.setState({ loadings: newLoadings });
    }, 6000);
  };

  render() {
    const { loadings } = this.state;
    return (
      <Space direction="vertical">
        <Dropdown.Button type="primary" loading menu={{ items }}>
          Submit
        </Dropdown.Button>
        <Dropdown.Button type="primary" size="small" loading menu={{ items }}>
          Submit
        </Dropdown.Button>
        <Dropdown.Button
          type="primary"
          loading={loadings[0]}
          menu={{ items }}
          onClick={() => enterLoading(0)}
        >
          Submit
        </Dropdown.Button>
        <Dropdown.Button
          icon={<DownOutlined />}
          loading={loadings[1]}
          menu={{ items }}
          onClick={() => enterLoading(1)}
        >
          Submit
        </Dropdown.Button>
      </Space>
    );
  }
}
ReactDOM.render(<App />, mountNode);
```
