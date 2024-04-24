---
order: 2
title:
  zh-CN: 指定最大宽度
  en-US: max-width
---

## zh-CN

指定每一列的最大宽度

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
          value: '0-0',
          children: [
            {
              label: 'Child Node1',
              value: '0-0-0',
              children: [
                {
                  label: 'Child Node1 child node1',
                  value: '0-0-0-0',
                  children: [
                    {
                      label: 'Child Node1 child node1 child node1',
                      value: '0-0-0-0-0',
                    },
                    {
                      label: 'Child Node1 child node1 child node2',
                      value: '0-0-0-0-1',
                    },
                  ],
                },
                {
                  label: 'Child Node1 child node2',
                  value: '0-0-0-1',
                },
              ],
            },
            {
              label: 'Child Node2',
              value: '0-0-1',
              children: [
                {
                  label: 'Child Node2 child node1',
                  value: '0-0-1-0',
                },
                {
                  label: 'Child Node2 child node2',
                  value: '0-0-1-1',
                },
              ],
            },
          ],
        },
        {
          label: 'Node2',
          value: '0-1',
          children: [
            {
              label: 'Child Node3',
              value: '0-1-0',
              children: [
                {
                  label: 'Child Node3 child node1',
                  value: '0-1-0-0',
                },
                {
                  label: 'Child Node3 child node2',
                  value: '0-1-0-1',
                },
              ],
            },
            {
              label: 'Child Node4',
              value: '0-1-1',
            },
            {
              label: 'Child Node5',
              value: '0-1-2',
            },
          ],
        },
      ],
      value: ['0-0-1', '0-0-1-0', '0-0-1-1'],
    };
  }
  render() {
    const { data, value } = this.state;
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
        menuColumnStyle={{
          maxWidth: 180,
        }}
      />
    );
  }
}

ReactDOM.render(<Demo />, mountNode);
```
