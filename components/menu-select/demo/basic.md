---
order: 0
title:
  zh-CN: 基本
  en-US: basic
---

## zh-CN

最简单的用法。

## en-US

The most basic usage.

```jsx
import { MenuSelect } from '@hankliu/hankliu-ui';

class Demo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          label: 'Node1',
          value: 1,
          children: [
            {
              label: 'Child Node1',
              value: 11,
              children: [
                {
                  label: 'Child Node1 child node1',
                  value: 111,
                  children: [
                    {
                      label: 'Child Node1 child node1 child node1',
                      value: 1111,
                    },
                    {
                      label: 'Child Node1 child node1 child node2',
                      value: 1112,
                    },
                  ],
                },
                {
                  label: 'Child Node1 child node2',
                  value: 112,
                },
              ],
            },
            {
              label: 'Child Node2',
              value: 12,
              children: [
                {
                  label: 'Child Node2 child node1',
                  value: 121,
                },
                {
                  label: 'Child Node2 child node2',
                  value: 122,
                },
              ],
            },
          ],
        },
        {
          label: 'Node2',
          value: 2,
          children: [
            {
              label: 'Child Node3',
              value: 21,
              children: [
                {
                  label: 'Child Node3 child node1',
                  value: 211,
                },
                {
                  label: 'Child Node3 child node2',
                  value: 212,
                },
              ],
            },
            {
              label: 'Child Node4',
              value: 22,
            },
            {
              label: 'Child Node5',
              value: 23,
            },
          ],
        },
      ],
      value: [111, 211],
      defaultActiveValue: [1, 11],
    };
  }
  render() {
    const { data, value, defaultActiveValue } = this.state;
    return (
      <MenuSelect
        checkable
        options={data}
        value={value}
        onChange={(value) => {
          this.setState({
            value,
          });
          console.log(value);
        }}
        onSelect={(option, menuIndex) => {
          console.log(option, menuIndex);
        }}
        defaultActiveValue={defaultActiveValue}
      />
    );
  }
}

ReactDOM.render(<Demo />, mountNode);
```
