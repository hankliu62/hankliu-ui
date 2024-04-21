---
order: 0
title:
  zh-CN: 三种大小
  en-US: Three sizes of Input
---

## zh-CN

我们为 `<Input />` 输入框定义了三种尺寸（大、默认、小），高度分别为 `40px`、`32px` 和 `24px`。

## en-US

There are three sizes of an Input box: `large` (40px), `default` (32px) and `small` (24px).

```jsx
import { Input } from '@hankliu/hankliu-ui';
import { UserOutlined } from '@hankliu/icons';
const { Group, Search, TextArea, Password } = Input;
const onSearch = (value) => console.log(value);
ReactDOM.render(
  <>
    <p style={{ marginBottom: 10 }}>prefix</p>
    <Input size="large" placeholder="large size" prefix={<UserOutlined />} />
    <br />
    <br />
    <Input size="medium" placeholder="medium size" prefix={<UserOutlined />} />
    <br />
    <br />
    <Input placeholder="default size" prefix={<UserOutlined />} />
    <br />
    <br />
    <Input size="smedium" placeholder="smedium size" prefix={<UserOutlined />} />
    <br />
    <br />
    <Input size="small" placeholder="small size" prefix={<UserOutlined />} />
    <br />
    <br />

    <p style={{ marginBottom: 10 }}>普通</p>
    <Input size="large" placeholder="large size" />
    <br />
    <br />
    <Input size="medium" placeholder="medium size" />
    <br />
    <br />
    <Input placeholder="default size" />
    <br />
    <br />
    <Input size="smedium" placeholder="smedium size" />
    <br />
    <br />
    <Input size="small" placeholder="small size" />
    <br />
    <br />

    <p style={{ marginBottom: 10 }}>addonBefore & addonAfter</p>
    <Input size="large" addonBefore="http://" addonAfter=".com" defaultValue="mysite" />
    <br />
    <br />
    <Input size="medium" addonBefore="http://" addonAfter=".com" defaultValue="mysite" />
    <br />
    <br />
    <Input addonBefore="http://" addonAfter=".com" defaultValue="mysite" />
    <br />
    <br />
    <Input size="smedium" addonBefore="http://" addonAfter=".com" defaultValue="mysite" />
    <br />
    <br />
    <Input size="small" addonBefore="http://" addonAfter=".com" defaultValue="mysite" />
    <br />
    <br />

    <p style={{ marginBottom: 10 }}>Search</p>
    <Search size="large" placeholder="input search text" onSearch={onSearch} enterButton />
    <br />
    <br />
    <Search size="medium" placeholder="input search text" onSearch={onSearch} enterButton />
    <br />
    <br />
    <Search placeholder="input search text" onSearch={onSearch} enterButton />
    <br />
    <br />
    <Search size="smedium" placeholder="input search text" onSearch={onSearch} enterButton />
    <br />
    <br />
    <Search size="small" placeholder="input search text" onSearch={onSearch} enterButton />
    <br />
    <br />

    <p style={{ marginBottom: 10 }}>TextArea</p>
    <TextArea size="large" placeholder="large size" />
    <br />
    <br />
    <TextArea size="medium" placeholder="medium size" />
    <br />
    <br />
    <TextArea placeholder="default size" />
    <br />
    <br />
    <TextArea size="smedium" placeholder="smedium size" />
    <br />
    <br />
    <TextArea size="small" placeholder="small size" />
    <br />
    <br />

    <p style={{ marginBottom: 10 }}>Password</p>
    <Password size="large" placeholder="large size" />
    <br />
    <br />
    <Password size="medium" placeholder="medium size" />
    <br />
    <br />
    <Password placeholder="default size" />
    <br />
    <br />
    <Password size="smedium" placeholder="smedium size" />
    <br />
    <br />
    <Password size="small" placeholder="small size" />
    <br />
    <br />

    <p style={{ marginBottom: 10 }}>Group</p>
    <Group size="large">
      <Input placeholder="default size" />
    </Group>
    <br />

    <Group size="medium">
      <Input placeholder="default size" />
    </Group>
    <br />

    <Group>
      <Input placeholder="default size" />
    </Group>
    <br />

    <Group size="smedium">
      <Input placeholder="default size" />
    </Group>
    <br />

    <Group size="small">
      <Input placeholder="default size" />
    </Group>
  </>,
  mountNode,
);
```
