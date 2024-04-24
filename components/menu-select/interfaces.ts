export enum EShowCheckedStrategy {
  SHOW_ALL = 'show-all',
  SHOW_PARENT = 'show-parent',
  SHOW_CHILD = 'show-child',
}

// 选项接口定义
export interface Option {
  label?: string;
  value?: any;
  disable?: boolean;
  loading?: boolean;
  [propName: string]: any;
}

// MenuSelect 组件通用属性的接口定义
export interface BaseMenuSelectProps {
  disabled: boolean; // 	是否禁用
  checkable?: boolean; // 节点前添加 Checkbox 复选框
  type: 'dropdown' | 'input' | string; // 选择器类型，可选值 dropdown input 当有 children 时等同 type 为 dropdown
  value?: string[] | number[]; // （受控）选中复选框的树节点
  defaultActiveValue?: string[] | number[]; // 默认展开指定的树节点
  onChange: (chkValue: string[] | number[]) => void; // 点击复选框触发
  onSelect?: (option: Option, menuIndex: number) => void; // 	点击树节点触发
  options?: Option[]; // 树形结构数据（选项）
  fieldNames?: { label: string; value: string; children: string }; // 定义 option 的字段名映射；注意不要修改 value 的定义
  expandTrigger?: string; // 展开的触发方式
  menuColumnStyle?: object; // 下拉列表的样式, 默认maxWidth:240
  className?: string; // className 属性
  style?: object; // 样式
  children?: React.ReactNode; // 子元素
  showCheckedStrategy?: EShowCheckedStrategy; // 定义选中项回填的方式。
  allowSearch?: boolean; // 是否支持搜索
  searchValue?: string; // 搜索过滤字符
}

// `input` 类型的 MenuSelect 组件接口定义
export interface MenuInputSelectProps extends BaseMenuSelectProps {
  width?: number | string; // 设置选择框的宽度
  height?: number | string; // 设置选择框的高度、最小高度、最大高度或者锁定高度
  lockHeight?: boolean; // 是否锁定输入框的高度
  size?: string; // 选择框大小，可选 large, small
  placeholder?: string; // 选择框默认文字
  addonAfter?: string | React.ReactNode; // 设置后置内容，当为 string 类型时会使用 Icon
  addonAfterClick?: () => void; // 点击后置内容时，调用此函数
  allowClear?: boolean; // 支持清除
  dropdownClassName?: string; // 下拉菜单的 className 属性
  dropdownMatchSelectWidth?: boolean; // 下拉菜单和选择器是否同宽
  dropdownStyle?: object; // 下拉菜单的 style 属性
  getPopupContainer?: () => React.ReactNode; // 菜单渲染父节点。默认渲染到 body 上，如果你遇到菜单滚动定位问题，试试修改为滚动的区域，并相对其定位。
  showArrow?: boolean; // 是否显示下拉小箭头
  suffixIcon?: React.ReactNode; // 自定义的选择框后缀图标
  removeIcon?: React.ReactNode; // 自定义的多选框清除图标
  clearIcon?: React.ReactNode; // 自定义的多选框清空图标
  onDropdownVisibleChange?: (open: boolean) => void; // 展开和收起下拉菜单的回调
  max?: number; // 可以设置最多选择几个值，不设置时不限制数量
  maxMessage?: string; // value 超过 max 时的提示
  maxTagTextLength?: number; // 设置 tag 的字符限制
  maxTagTextLengthMessage?: string; // tag 的字符超过限制时的提示
  maxTagCount?: number | 'responsive'; // 最多显示多少个 tag，响应式模式会对性能产生损耗
  maxTagPlaceholder?: React.ReactNode | ((omittedValues: any) => React.ReactNode); // 隐藏 tag 时显示的内容
  onSearch?: (value: string) => any; // 文本框值变化时回调
}

// MenuSelect 组件接口定义
export interface MenuSelectProps extends MenuInputSelectProps {}
