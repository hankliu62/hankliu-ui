---
order: 0
title: 基础用法
---

基本用法

```jsx
import { useState } from "react";
import { SimpleTreeSelect } from "@hankliu/hankliu-ui";

const data = [
  {
    title: "a Node1",
    value: 1,
    children: [
      {
        title: "Child Node1",
        value: 11,
        children: [
          {
            title: "Child Node1 child node1",
            value: 111,
            children: [
              {
                title: "Child Node1 child node1 child node1",
                value: 1111
              },
              {
                title: "Child Node1 child node1 child node2",
                value: 1112
              }
            ]
          },
          {
            title: "Child Node1 child node2",
            value: 112
          },
          {
            title: "Child Node1 child node3",
            value: 113
          },
          {
            title: "Child Node1 child node4",
            value: 114
          },
          {
            title: "Child Node1 child node5",
            value: 115
          },
          {
            title: "Child Node1 child node6",
            value: 116
          },
          {
            title: "Child Node1 child node7",
            value: 117
          },
          {
            title: "Child Node1 child node8",
            value: 118
          },
          {
            title: "Child Node1 child node9",
            value: 119
          },
          {
            title: "Child Node1 child node10",
            value: 120
          },
        ]
      },
      {
        title: "Child Node2",
        value: 12,
        children: [
          {
            title: "Child Node2 child node1",
            value: 121
          },
          {
            title: "Child Node2 child node2",
            value: 122
          }
        ]
      }
    ]
  },
  {
    title: "Node2",
    value: 2,
    disabled: true,
    children: [
      {
        title: "Child Node3",
        value: 21,
        children: [
          {
            title: "Child Node3 child node1",
            value: 211
          },
          {
            title: "Child Node3 child node2",
            value: 212
          }
        ]
      },
      {
        title: "Child Node4",
        value: 22
      },
      {
        title: "Child Node5",
        value: 23
      }
    ]
  },
  {
    title: "b Node3",
    value: 3,
  },
  {
    title: "c Node4",
    value: 4,
  },
  {
    title: "d Node5",
    value: 5,
  },
  {
    title: "e Node6",
    value: 6,
  },
  {
    title: "f Node7",
    value: 7,
  },
  {
    title: "Node8",
    value: 8,
  },
  {
    title: "Node9",
    value: 9,
  },
  {
    title: "Node10",
    value: 10,
  },
];

function Demo() {
  const [value, setValue] = useState([1]);
  return (
    <SimpleTreeSelect options={data} value={value} onChange={setValue} lockHeight />
  );
}

ReactDOM.render(<Demo />, mountNode);
```

<style>
  .mb-20{
    margin-bottom: 20px
  }
</style>
