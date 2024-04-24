---
order: 3
title:
  zh-CN: 下拉选择
  en-US: dropdown
---

## zh-CN

下拉方式

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
        options={data}
        value={value}
        // trigger={['click']}
        defaultActiveValue={['0-0']}
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
          maxWidth: 240,
        }}
      >
        <a>dropdown</a>
      </MenuSelect>
    );
  }
}

ReactDOM.render(<Demo />, mountNode);
```
