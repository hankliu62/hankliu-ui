---
order: 4
title:
  zh-CN: 不同大小
  en-US: size
---

不同大小的 tag 通过 size 来设置，可选值 `default` `middle` `small`

```jsx
import { HlTag, Radio } from '@hankliu/hankliu-ui';
const { CheckableTag } = HlTag;

function log(e) {
  console.log(e);
}

function preventDefault(e) {
  e.preventDefault();
  window.alert('Clicked! But prevent default.');
}

class Demo extends React.Component {
  state = {
    size: 'default',
  };

  handleSizeChange = (e) => {
    this.setState({ size: e.target.value });
  };

  render() {
    const { size } = this.state;
    return (
      <div>
        <Radio.Group value={size} onChange={this.handleSizeChange}>
          <Radio key="small" value="small">
            small
          </Radio>
          <Radio key="middle" value="middle">
            middle
          </Radio>
          <Radio key="default" value="default">
            default
          </Radio>
        </Radio.Group>
        <br />
        <br />
        <h5>default</h5>
        <div className="mb-12">
          <HlTag className="mr-4" size={size}>
            Default HlTag
          </HlTag>
          <HlTag className="mr-4" size={size} closable onClose={preventDefault}>
            点击关闭试试
          </HlTag>
        </div>
        <h5>simple</h5>
        <div className="mb-12">
          <HlTag className="mr-4" size={size} type="simple">
            Simple HlTag
          </HlTag>
          <HlTag className="mr-4" size={size} type="simple" maxWidth="200px" ellipsis>
            超长文字的 HlTag 设置 ellipsis 超长超长超长
          </HlTag>
          <HlTag closable onClose={preventDefault} type="simple" size={size}>
            点击关闭试试
          </HlTag>
        </div>
        <h5>heavy</h5>
        <div>
          <HlTag type="heavy" className="mr-4" size={size}>
            Heavy HlTag
          </HlTag>
          <HlTag type="heavy" className="mr-4" size={size} maxWidth="100px">
            超长文字的 HlTag 设置 maxWidth 超长超长超长
          </HlTag>
          <HlTag closable onClose={preventDefault} size={size} type="heavy">
            点击关闭试试
          </HlTag>
        </div>
        <h5>CheckableTag</h5>
        <CheckableTag size={size}>Checkable HlTag</CheckableTag>
      </div>
    );
  }
}

ReactDOM.render(<Demo />, mountNode);
```
