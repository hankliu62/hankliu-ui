---
category: Components
subtitle: 下拉刷新
type: 反馈
title: PullToRefresh
---

下拉刷新容器：包装需要下拉刷新的组件

## API

组件提供了两个静态方法，config 参数如下：

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| disabled | 不可用 | boolean | false |
| icon | 自定义下拉的 icon | ReactNode |  |
| loading | 自定义 loading 节点 | ReactNode |  |
| distance | 下拉多少距离触发 | number | 60 |
| resistance | 下拉多少距离触发 | number | 2.5 |
| style | 自定义样式 | Object | - |
| className | 自定义 class | String | - |
| onRefresh | 触发下拉刷新后的回调，回调完成后请调用 callback | Function(resolve, reject) => void\|boolean\|Promise | - |

onRefresh 的触发方式有三种

- 默认
  ```
  function handleRefresh(resolve, reject) {
    resolve() // 关闭刷新状态，成功
    // reject() 保持刷新状态
  }
  <PullToRefresh onRefresh={handleRefresh}></PullToRefresh>
  ```
- 返回 boolean
  ```
  function handleRefresh(resolve, reject) {
    return true   // 会自动执行 resolve
    // return false 会自动执行 reject
  }
  <PullToRefresh onRefresh={handleRefresh}></PullToRefresh>
  ```
- 返回 Promise
  ```
  function handleRefresh(resolve, reject) {
    return Promise // 这里会根据 Promise 的返回来判断调用 resolve 或 reject
  }
  <PullToRefresh onRefresh={handleRefresh}></PullToRefresh>
  ```
