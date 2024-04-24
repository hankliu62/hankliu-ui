---
order: 6
title:
  zh-CN: 响应式 maxTagCount
  en-US: Responsive maxTagCount
---

## zh-CN

多选下通过响应式布局让选项自动收缩。该功能对性能有所消耗，不推荐在大表单场景下使用。

## en-US

Auto collapse to tag with responsive case. Not recommend use in large form case since responsive calculation has a perf cost.

```tsx
import { MenuSelect, Radio } from '@hankliu/hankliu-ui';

const RadioGroup = Radio.Group;

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
      <div>
        <MenuSelect
          type="input"
          options={data}
          value={value}
          width="100%"
          maxTagCount="responsive"
          showCheckedStrategy={MenuSelect.SHOW_CHILD}
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
          onDropdownVisibleChange={(open) => {
            console.log(open);
          }}
          allowSearch
          onSearch={(value) => {
            console.log(value);
          }}
        />
      </div>
    );
  }
}

ReactDOM.render(<Demo />, mountNode);
```
