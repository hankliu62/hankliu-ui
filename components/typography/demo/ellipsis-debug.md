---
order: 99
title:
  zh-CN: 省略号 Debug
  en-US: Ellipsis Debug
debug: true
---

## zh-CN

多行文本省略。

## en-US

Multiple line ellipsis support.

```jsx
import { Typography, Slider, Switch } from '@hankliu/hankliu-ui';

const { Text, Paragraph } = Typography;

class Demo extends React.Component {
  state = {
    rows: 1,
    longText: true,
    copyable: false,
    editable: false,
    expandable: false,
  };

  onChange = (rows) => {
    this.setState({ rows });
  };

  render() {
    const { rows, longText, copyable, editable, expandable } = this.state;
    return (
      <>
        <Switch
          checked={longText}
          checkedChildren="Long Text"
          onChange={(val) => this.setState({ longText: val })}
        />
        <Switch checked={copyable} onChange={(val) => this.setState({ copyable: val })} />
        <Switch checked={editable} onChange={(val) => this.setState({ editable: val })} />
        <Switch checked={expandable} onChange={(val) => this.setState({ expandable: val })} />
        <Slider value={rows} min={1} max={10} onChange={this.onChange} />
        {longText ? (
          <Paragraph ellipsis={{ rows, expandable }} copyable={copyable} editable={editable}>
            HankLiu UI, a design language for background applications, is refined by Ant UED Team.
            This is a nest sample{' '}
            <Text code strong delete>
              Test
            </Text>{' '}
            case. Bnt Design, a design language for background applications, is refined by Ant UED
            Team. Cnt Design, a design language for background applications, is refined by Ant UED
            Team. Dnt Design, a design language for background applications, is refined by Ant UED
            Team. Ent Design, a design language for background applications, is refined by Ant UED
            Team.
          </Paragraph>
        ) : (
          <Paragraph ellipsis={{ rows, expandable }} copyable={copyable} editable={editable}>
            Hello World
          </Paragraph>
        )}

        <Text style={{ width: 100 }} ellipsis copyable>
          HankLiu UI is a design language for background applications, is refined by Ant UED Team.
        </Text>

        <p>
          [Before]<Text ellipsis>not ellipsis</Text>[After]
        </p>
      </>
    );
  }
}

ReactDOM.render(<Demo />, mountNode);
```
