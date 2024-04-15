---
type: 反馈
category: Components
subtitle: 对话框
title: HlModal
---

模态对话框。

## 何时使用

需要用户处理事务，又不希望跳转页面以致打断工作流程时，可以使用 `Modal` 在当前页面正中打开一个浮层，承载相应的操作。

另外当需要一个简洁的确认框询问用户时，可以使用 `Modal.confirm()` 等语法糖方法。
> 如果内容需要更新或交互时，可以使用 Modal.Dialog 组件

## API

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| open | 对话框是否可见 | boolean | 无 |
| width | 宽度，`ternary` 属性为 true 时这个值默认为 400 | string\|number | 750 |
| title | 标题，当没有设置 title 时，弹窗不显示头部 | string\|ReactNode | 无 |
| footer | 底部内容，当不需要默认底部按钮时，可以设为 `footer={null}` | ReactNode | 默认底部 |
| footerExtraContent | 底部额外内容 | ReactNode | - |
| onCancel | 点击遮罩层或右上角叉或取消按钮的回调 | function(e) | 无 |
| onOk | 点击默认底部的确定按钮的回调 | function(e) | 无 |
| okText | 默认底部的确认按钮文字 | string\|ReactNode | 确定 |
| okType | 默认底部的确认按钮类型 | string | primary |
| okButtonProps | 默认底部的确认按钮 props | [ButtonProps](/components/button) | - |
| cancelText | 默认底部的取消按钮文字 | string\|ReactNode | 取消 |
| cancelType | 默认底部的取消按钮类型 | string | neutral |
| cancelButtonVisible | 是否显示默认底部的取消按钮 | boolean | true |
| cancelButtonProps | 默认底部的取消按钮 props | [ButtonProps](/components/button) | - |
| ternary | 是否为三元操作，为 `true` 时默认底部有三个操作按钮 | boolean | false |
| icon | 设置 modal 的 icon (ternary设为 true 时生效) | string\|ReactNode | - |
| onSecondly | 点击默认底部的 Second 按钮的回调 | function(e) | 无 |
| secondText | 默认底部的 Second 按钮文字 | string\|ReactNode | 确定 |
| secondType | 默认底部的 Second 按钮类型 | string | neutral |
| secondButtonProps | 默认底部的 Second 按钮 props | [ButtonProps](/components/button) | - |
| centered | 垂直居中展示 Modal，`ternary` 属性为 true 时这个值默认为 true | Boolean | `false` |
| className | 对话框的类名 | string | - |
| wrapClassName | 对话框外层容器的类名 | string | - |
| style | 可用于设置浮层的样式，调整浮层位置等 | object | - |
| scroll | 滚动设置，[可选项](#Modal-scroll-说明) | string \| boolean | - |
| full | 是否全屏显示 | boolean | `false` |
| layout | 布局模式，可选值 `default` `filled`，当值为`filled`时，Modal 容器重置内 padding 为 0 内容由 children 显示 | string | `default` |
| closable | 是否显示右上角的关闭按钮，`ternary` 属性为 true 时这个值默认为 false | boolean | true |
| mask | 是否展示遮罩 | Boolean | true |
| maskStyle | 遮罩样式 | object | {} |
| maskClosable | 点击蒙层是否允许关闭，`ternary` 属性为 true 时这个值默认为 false | boolean | true |
| confirmLoading | 确定按钮 loading | boolean | 无 |
| afterClose | Modal 完全关闭后的回调 | function | 无 |
| destroyOnClose | 关闭时销毁 Modal 里的子元素 | boolean | false |
| forceRender | 强制渲染 Modal | boolean | false |
| getContainer | 指定 Modal 挂载的 HTML 节点 | (instance): HTMLElement | () => document.body |
| keyboard | 是否支持键盘esc关闭 | boolean | true |
| zIndex | 设置 Modal 的 `z-index` | Number | 1000 |
| bodyStyle | Modal body 样式 | object | {} |
| modalRender | 自定义渲染对话框 | (node: ReactNode) => ReactNode | - |
| fixedCloseBtn | 关闭按钮是否固定到 Modal 外 | boolean | true |


#### Modal scroll 说明

- `true`
  - body 的上 padding 为 16px 下 padding 为 0
  - children 会被包裹在 ScrollContainer 中
- `custom`
  - body 的上 padding 为 16px 下 padding 为 0

#### 注意

> `<Modal />` 默认关闭后状态不会自动清空, 如果希望每次打开都是新内容，请设置 `destroyOnClose`。

### Modal 辅助方法

- `Modal.getMaxHeight(head?: boolean, foot?: boolean, bodyScrollPadding?: boolean)`

获取 Modal 能够设置的最大高度，可以通过传入参数来计算剩余的高度

> 通过这个方法可以计算出内容的最大高度，方便设置包含滚动区域的自定义内容

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| head | 值为 `true` 时减去 head 的默认高度（66px） | boolean | false |
| foot | 值为 `true` 时减去 foot 的默认高度（68px） | boolean | false |
| bodyScrollPadding | 值为 `true` 时减去 scroll body 的默认上 padding（16px） | boolean | false |

### Modal 方法式调用

- `Modal.show`

通过调用方法来打开一个弹窗，适用于展示静态内容。参数为 object，具体属性参考 [Modal](#API)，部分参数区别如下

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| open | 值为 `true` 不支持修改 | boolean | true |
| closable | 默认不显示右上角的关闭按钮 | boolean | false |

函数调用后，会返回一个引用，可以通过该引用更新和关闭弹窗。

```jsx
const mod = Modal.show({
  title: 'Modal show',
  content: (
    <div>
      <p>some messages...some messages...</p>
      <br/>
      <br/>
      <Button onClick={() => mod.destroy()}>我知道了</Button>
    </div>
  ),
});
mod.update({title: 'update title'});
```
### Modal 方法式调用

包括：

- `Modal.alert`
- `Modal.confirm`

- `Modal.info`
- `Modal.success`
- `Modal.error`
- `Modal.warning`

以上均为一个函数，参数为 object，具体属性如下：

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| afterClose | Modal 完全关闭后的回调 | function | - | 4.9.0 |
| autoFocusButton | 指定自动获得焦点的按钮 | null \| `ok` \| `cancel` | `ok` |  |
| bodyStyle | Modal body 样式 | CSSProperties |  | 4.8.0 |
| cancelButtonProps | cancel 按钮 props | [ButtonProps](/components/button/#API) | - |  |
| cancelText | 设置 Modal.confirm 取消按钮文字 | string | `取消` |  |
| centered | 垂直居中展示 Modal | boolean | false |  |
| className | 容器类名 | string | - |  |
| closable | 是否显示右上角的关闭按钮 | boolean | false | 4.9.0 |
| closeIcon | 自定义关闭图标 | ReactNode | undefined | 4.9.0 |
| content | 内容 | ReactNode | - |  |
| getContainer | 指定 Modal 挂载的 HTML 节点, false 为挂载在当前 dom | HTMLElement \| () => HTMLElement \| Selectors \| false | document.body |  |
| icon | 自定义图标 | ReactNode | &lt;QuestionCircle /> |  |
| keyboard | 是否支持键盘 esc 关闭 | boolean | true |  |
| mask | 是否展示遮罩 | boolean | true |  |
| maskClosable | 点击蒙层是否允许关闭 | boolean | false |  |
| maskStyle | 遮罩样式 | object | {} |  |
| okButtonProps | ok 按钮 props | [ButtonProps](/components/button/#API) | - |  |
| okText | 确认按钮文字 | string | `确定` |  |
| okType | 确认按钮类型 | string | `primary` |  |
| style | 可用于设置浮层的样式，调整浮层位置等 | CSSProperties | - |  |
| title | 标题 | ReactNode | - |  |
| width | 宽度 | string \| number | 416 |  |
| wrapClassName | 对话框外层容器的类名 | string | - | 4.18.0 |
| zIndex | 设置 Modal 的 `z-index` | number | 1000 |  |
| onCancel | 取消回调，参数为关闭函数，返回 promise 时 resolve 后自动关闭 | function(close) | - |  |
| onOk | 点击确定回调，参数为关闭函数，返回 promise 时 resolve 后自动关闭 | function(close) | - |  |

以上函数调用后，会返回一个引用，可以通过该引用更新和关闭弹窗。

```jsx
const modal = HlModal.info();

modal.update({
  title: '修改的标题',
  content: '修改的内容',
});

// 可以通过传入函数的方式更新弹窗
modal.update(prevConfig => ({
  ...prevConfig,
  title: `${prevConfig.title}（新）`,
}));

modal.destroy();
```

- `HlModal.destroyAll`

使用 `HlModal.destroyAll()` 可以销毁弹出的确认窗（即上述的 `HlModal.info`、`HlModal.success`、`HlModal.error`、`HlModal.warning`、`HlModal.confirm`）。通常用于路由监听当中，处理路由前进、后退不能销毁确认对话框的问题，而不用各处去使用实例的返回值进行关闭（`modal.destroy()` 适用于主动关闭，而不是路由这样被动关闭）

```jsx
import { browserHistory } from 'react-router';

// router change
browserHistory.listen(() => {
  HlModal.destroyAll();
});
```

### HlModal.useModal()

当你需要使用 Context 时，可以通过 `HlModal.useModal` 创建一个 `contextHolder` 插入子节点中。通过 hooks 创建的临时 Modal 将会得到 `contextHolder` 所在位置的所有上下文。创建的 `modal` 对象拥有与 [`HlModal.method`](<#Modal.method()>) 相同的创建通知方法。

```jsx
const [modal, contextHolder] = Modal.useModal();

React.useEffect(() => {
  modal.confirm({
    // ...
  });
}, []);

return <div>{contextHolder}</div>;
```

<style>
.code-box-demo .hlui-btn {
  margin-right: 8px;
  margin-bottom: 8px;
}
</style>

- `Modal.destroyAll`

使用 `Modal.destroyAll()` 可以销毁弹出的确认窗（即上述的 Modal.alert、Modal.confirm）。通常用于路由监听当中，处理路由前进、后退不能销毁确认对话框的问题，而不用各处去使用实例的返回值进行关闭（modal.destroy() 适用于主动关闭，而不是路由这样被动关闭）

```jsx
import { browserHistory } from 'react-router';

// router change
browserHistory.listen(() => {
  Modal.destroyAll();
});
```
