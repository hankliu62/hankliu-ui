---
category: Components
subtitle: 下拉菜单
type: 导航
title: Dropdown
cover: https://gw.alipayobjects.com/zos/alicdn/eedWN59yJ/Dropdown.svg
---

向下弹出的列表。

## 何时使用

当页面上的操作命令过多时，用此组件可以收纳操作元素。点击或移入触点，会出现一个下拉菜单。可在列表中进行选择，并执行相应的命令。

- 用于收罗一组命令操作。
- Select 用于选择，而 Dropdown 是命令集合。

### 4.24.0 用法升级

> 在 4.24.0 版本后，我们提供了 `<Dropdown menu={{ items: [...] }} />` 的简写方式，有更好的性能和更方便的数据组织方式，开发者不再需要自行拼接 JSX。同时我们废弃了原先的写法，你还是可以在 4.x 继续使用，但会在控制台看到警告，并会在 5.0 后移除。

```jsx
// >=4.24.0 可用，推荐的写法 ✅
const items = [
  { label: '菜单项一', key: 'item-1' }, // 菜单项务必填写 key
  { label: '菜单项二', key: 'item-2' },
];
return (
  <Dropdown menu={{ items }}>
    <a>Hover me</a>
  </Dropdown>
);

// <4.24.0 可用，>=4.24.0 时不推荐 🙅🏻‍♀️
const menu = (
  <Menu>
    <Menu.Item>菜单项一</Menu.Item>
    <Menu.Item>菜单项二</Menu.Item>
  </Menu>
);
return (
  <Dropdown overlay={menu}>
    <a>Hover me</a>
  </Dropdown>
);
```

## API

属性如下

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| arrow | 下拉框箭头是否显示 | boolean | false |  |
| autoFocus | 打开后自动聚焦下拉框 | boolean | false |
| disabled | 菜单是否禁用 | boolean | - |  |
| destroyPopupOnHide | 关闭后是否销毁 Dropdown | boolean | false |  |
| dropdownRender | 自定义下拉框内容 | (menus: ReactNode) => ReactNode | - |  |
| getPopupContainer | 菜单渲染父节点。默认渲染到 body 上，如果你遇到菜单滚动定位问题，试试修改为滚动的区域，并相对其定位。[示例](https://codepen.io/afc163/pen/zEjNOy?editors=0010) | (triggerNode: HTMLElement) => HTMLElement | () => document.body |  |
| menu | 菜单配置项 | [MenuProps](/components/menu#API) | - |  |
| overlayClassName | 下拉根元素的类名称 | string | - |  |
| overlayStyle | 下拉根元素的样式 | CSSProperties | - |  |
| placement | 菜单弹出位置：`bottomLeft` `bottom` `bottomRight` `topLeft` `top` `topRight` | string | `bottomLeft` |  |
| trigger | 触发下拉的行为, 移动端不支持 hover | Array&lt;`click`\|`hover`\|`contextMenu`> | \[`hover`] |  |
| open | 菜单是否显示 | boolean | - |  |
| onOpenChange | 菜单显示状态改变时调用，点击菜单按钮导致的消失不会触发。 | (open: boolean) => void | - |  |

### Dropdown.Button

属性与 Dropdown 的相同。还包含以下属性：

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| buttonsRender | 自定义左右两个按钮 | (buttons: ReactNode\[]) => ReactNode\[] | - |  |
| loading | 设置按钮载入状态 | boolean \| { delay: number } | false |  |
| danger | 设置危险按钮 | boolean |  |  |
| icon | 右侧的 icon | ReactNode | - |  |
| size | 按钮大小，和 [Button](/components/button/#API) 一致 | string | `default` |  |
| type | 按钮类型，和 [Button](/components/button/#API) 一致 | string | `default` |  |
| onClick | 点击左侧按钮的回调，和 [Button](/components/button/#API) 一致 | (event) => void | - |  |
