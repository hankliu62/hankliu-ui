---
order: 0
title: 基本
---

错误处理组件，支持自定义描述。

```jsx
import { Exception, Col, Divider, Input, Row, Select } from '@hankliu/hankliu-ui';
import { EExceptionCode } from '@hankliu/hankliu-ui/lib/exception';


const codeOptions = [
  EExceptionCode.Unauthorized,
  EExceptionCode.Forbidden,
  EExceptionCode.NotFound,
  EExceptionCode.InternalServerError,
  EExceptionCode.BadGateway,
  EExceptionCode.ServiceUnavailable,
  EExceptionCode.GatewayTimeout,
];

const ExceptionBaseDemo = () => {
  const [code, setCode] = React.useState<EExceptionCode>(EExceptionCode.Unauthorized);
  const [description, setDescription] = React.useState<string>();

  return (
    <div style={{ width: "100%", overflow: 'auto' }}>
      <Exception code={code} description={description} />

      <Divider />

      <Row gutter={16}>
        <Col span={8}>
          <Row align="middle">
            <Col flex="80px">错误码:</Col>
            <Col flex="1">
              <Select
                value={code}
                style={{ width: '100%' }}
                onChange={val => {
                  setDescription(undefined);
                  setCode(val);
                }}
                showSearch
              >
                {codeOptions.map(item => (
                  <Select.Option key={item} value={item}>
                    {item}
                  </Select.Option>
                ))}
              </Select>
            </Col>
          </Row>
        </Col>

        <Col span={8}>
          <Row align="middle">
            <Col flex="80px">错误消息:</Col>
            <Col flex="1">
              <Input
                placeholder="请输入错误消息"
                style={{ width: '100' }}
                value={description}
                onChange={event => {
                  setDescription(event.target.value);
                }}
                allowClear
              />
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
}

ReactDOM.render(<ExceptionBaseDemo />, mountNode);
```
