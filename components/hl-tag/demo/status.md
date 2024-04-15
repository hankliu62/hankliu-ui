---
order: 5
title:
  zh-CN: 状态标签
  en-US: Status HlTag
---

## zh-CN

包含状态的标签

````jsx
import { HlTag, Radio } from '@hankliu/hankliu-ui';

const { useState } = React;
const { StatusTag } = HlTag;
const GhostOptions = [
  { label: 'default', value: 'default' },
  { label: 'true', value: 'true' },
  { label: 'half', value: 'half' }
]
const SizeOptions = [
  { label: 'small', value: 'small' },
  { label: 'middle', value: 'middle' },
  { label: 'large', value: 'large' }
]

function Demo() {
  const [ghost, setGhost] = useState('default')
  const [size, setSize] = useState('small')
  return (
    <div>
      <div className="mb-12 display-flex">
        <div style={{width: 100}}>size: </div>
        <div className="flex-1">
          <Radio.Group
            onChange={e => setSize(e.target.value)}
            value={size}
            options={SizeOptions}
          />
        </div>
      </div>
      <div className="mb-12 display-flex">
        <div style={{width: 100}}>ghost: </div>
        <div className="flex-1">
          <Radio.Group
            onChange={e => setGhost(e.target.value)}
            value={ghost}
            options={GhostOptions}
          />
        </div>
      </div>
      <StatusTag ghost={ghost} size={size} status="error" className="mr-4">未通过</StatusTag>
      <StatusTag ghost={ghost} size={size} status="fail" className="mr-4">未检测</StatusTag>
      <StatusTag ghost={ghost} size={size} status="warn" className="mr-4">检测失败</StatusTag>
      <StatusTag ghost={ghost} size={size} status="progress" className="mr-4">检测中</StatusTag>
      <StatusTag ghost={ghost} size={size}>已通过</StatusTag>
    </div>
  )
}


ReactDOM.render(
  <Demo />,
  mountNode
);
````
