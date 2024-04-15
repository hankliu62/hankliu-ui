// @ts-nocheck
import React, { useRef, useContext } from 'react';
import arrayTreeFilter from 'array-tree-filter';
import { findDOMNode } from 'react-dom';
import { ConfigContext } from 'antd4x/lib/config-provider';
import Checkbox from '../checkbox';
import IconRightMin from '@ant-design/icons/lib/icons/RightOutlined';
import { Option } from './interfaces';

type Name = {
  label: string,
  value: string,
  children: string,
}
type NameKeys = 'label' | 'value' | 'children'
type OnSelect = (option?: Option, menuIndex?: number) => void

interface ExpandProps {
  onMouseEnter?: OnSelect,
  onMouseLeave?: OnSelect,
  ref?: (node: React.ReactNode) => void,
  onClick: OnSelect,
}

interface MenusProps {
  activeValue: number[] | string[],
  options: Option[],
  filteredOptions?: Option[], // 搜索文本过滤的选项
  prefixCls: string,
  expandTrigger?: string,
  onSelect: OnSelect,
  open?: boolean,
  menuColumnStyle?: object,
  defaultFieldNames: Name,
  fieldNames?: any,
  expandIcon?: React.ReactNode,
  loadingIcon?: React.ReactNode,
  checkable?: boolean,
  checkedValue?: string[] | number[],
  onCheck?: (keys: any[]) => void,
  onClick: OnSelect,
  disabled?: boolean,
}

export default function Menus({
  options = [],
  filteredOptions = [],
  activeValue = [],
  onSelect = () => {},
  prefixCls: menuPrefixCls,
  open = false,
  expandTrigger = 'click',
  expandIcon = (<IconRightMin />),
  checkable = false,
  checkedValue = [],
  ...restProps
}: MenusProps) {
  const context = useContext(ConfigContext);
  const antdCls = context?.getPrefixCls();
  // 前缀
  const prefixCls = menuPrefixCls || `${antdCls}-cascader-menus`;

  const menuItems = useRef<Record<number, any>>()
  const delayTimer = useRef<any>()
  const status = useRef<Record<string, {
    checked: boolean,
    indeterminate: boolean,
  }>>({})

  function getFieldName(name: NameKeys) {
    const { fieldNames = {}, defaultFieldNames } = restProps;
    // 防止只设置单个属性的名字
    return fieldNames[name] || defaultFieldNames[name];
  }

  // 选中节点
  function handleSelect(e: any, option: Option) {
    const { onCheck } = restProps;
    // const value = option[getFieldName('value')];
    let tempcheckedValue = [...checkedValue];
    if (!e.target.checked) {
      // 当前节点和子节点全部移除选中
      const removeChildValue = (opt: Option) => {
        tempcheckedValue = tempcheckedValue.filter(key => key !== opt[getFieldName('value')])
        const children = opt[getFieldName('children')] || []
        // tslint:disable-next-line:no-unused-expression
        children && children.forEach((c: Option) => {
          removeChildValue(c)
        });
      }
      removeChildValue(option)

      // 移除当前节点关联的所有父节点
      const removeParentValue = (opts: Option[]) => {
        opts.forEach((opt: Option) => {
          const optChildren = opt[getFieldName('children')] || []
          removeParentValue(optChildren)
          const filteredOpts = optChildren.filter((oc: Option) => {
            return tempcheckedValue.find((v: string|number) => (v === oc[getFieldName('value')]))
          })
          if (optChildren.length > 0 && filteredOpts.length !== optChildren.length) {
            tempcheckedValue = tempcheckedValue.filter(key => key !== opt[getFieldName('value')])
          }
        })
      }
      removeParentValue(options)

    } else {
      // 当前节点和子节点全部加入选中
      const addChildValue = (opt: Option) => {
        tempcheckedValue.push(opt[getFieldName('value')])
        const children = opt[getFieldName('children')] || []
        // tslint:disable-next-line:no-unused-expression
        children && children.forEach((c: Option) => {
          addChildValue(c)
        });
      }
      addChildValue(option)

      // 判断当前节点的父节点是否选中，加入选中节点集合中
      const addParentValue = (opts: Option[]) => {
        opts.forEach((opt: Option) => {
          const optChildren = opt[getFieldName('children')] || []
          addParentValue(optChildren)
          const filteredOpts = optChildren.filter((oc: Option) => {
            return tempcheckedValue.find((v: string|number) => (v === oc[getFieldName('value')]))
          })
          if (optChildren.length > 0 && filteredOpts.length === optChildren.length) {
            tempcheckedValue.push(opt[getFieldName('value')])
          }
        })
      }
      addParentValue(options)

    }
    if (onCheck) onCheck([...new Set(tempcheckedValue)])
  }

  // 渲染节点
  function getOption(option: Option, menuIndex: number) {
    const { loadingIcon, disabled, onClick } = restProps;
    const onClickOption: OnSelect = () => { onClick && onClick(option, menuIndex) };
    const onSelectOption: OnSelect = () => { onSelect(option, menuIndex) };
    let expandProps: ExpandProps = {
      onClick: onClickOption,
    };
    let menuItemCls: string = `${prefixCls}-menu-item ${antdCls}-tree-rows`;
    let expandIconNode = null;
    const hasChildren =
      option[getFieldName('children')] && option[getFieldName('children')].length > 0;

    if (hasChildren || option.isLeaf === false) {
      menuItemCls += ` ${prefixCls}-menu-item-expand`;
      expandIconNode = (
        <span className={`${prefixCls}-menu-item-expand-icon`}>
          {option.loading ? loadingIcon : expandIcon}
        </span>
      );
    }
    if (expandTrigger === 'hover') {
      expandProps = {
        onMouseEnter: delayOnSelect(onSelectOption),
        onMouseLeave: delayOnSelect(),
        onClick: onClickOption,
      };
    }
    if (isActiveOption(option, menuIndex)) {
      menuItemCls += ` ${prefixCls}-menu-item-active`;
      expandProps.ref = saveMenuItem(menuIndex);
    }
    if (option.disabled) {
      menuItemCls += ` ${prefixCls}-menu-item-disabled`;
    }
    if (option.loading) {
      menuItemCls += ` ${prefixCls}-menu-item-loading`;
    }
    // 自定义选项样式
    if (option.className) {
      menuItemCls += ` ${prefixCls}-${option.className}`;
    }
    let title = '';
    if (option.title) {
      title = option.title;
    } else if (typeof option[getFieldName('label')] === 'string') {
      title = option[getFieldName('label')];
    }
    return (
      <li
        key={option[getFieldName('value')]}
        className={menuItemCls}
        title={title}
        {...expandProps}
      >
        {
          checkable ?
            <Checkbox
              disabled={disabled}
              checked={status.current?.[option[getFieldName('value')]]?.checked}
              onChange={(e: any) => handleSelect(e, option)}
              indeterminate={status.current?.[option[getFieldName('value')]]?.indeterminate}
            >{option[getFieldName('label')]}</Checkbox> :
            <span className='ant-checkbox-wrapper'>{option[getFieldName('label')]}</span>
        }
        {expandIconNode}
      </li>
    );
  }

  // 获取激活状态的那几列
  function getActiveOptions(values?: string[] | number[]): Option[] {
    const curActiveValue = values || activeValue;
    const curOptions = filteredOptions ?? options;
    return arrayTreeFilter(
      curOptions,
      (o: Option, level: number) => o[getFieldName('value')] === curActiveValue[level],
      { childrenKeyName: getFieldName('children') },
    );
  }

  // 获取需要显示的几列options
  function getShowOptions() {
    const result = getActiveOptions()
      .map((activeOption: Option) => activeOption[getFieldName('children')])
      .filter((activeOption: Option) => !!activeOption);
    result.unshift(filteredOptions ?? options);
    return result;
  }

  // 选中延迟
  const delayOnSelect = (onSelect?: OnSelect) => (...args: any[]) => {
    if (delayTimer.current) {
      clearTimeout(delayTimer.current);
      delayTimer.current = null;
    }
    if (typeof onSelect === 'function') {
      delayTimer.current = setTimeout(() => {
        onSelect(args);
        delayTimer.current = null;
      }, 150);
    }
  }

  function scrollActiveItemToView() {
    // scroll into view
    const optionsLength = getShowOptions().length;
    for (let i = 0; i < optionsLength; i++) {
      const itemComponent = menuItems.current?.[i];
      if (itemComponent) {
        const target: any = findDOMNode(itemComponent);
        target.parentNode.scrollTop = target.offsetTop;
      }
    }
  }

  // 是否是激活的节点
  function isActiveOption(option: Option, menuIndex: number) {
    return activeValue[menuIndex] === option[getFieldName('value')];
  }

  const saveMenuItem = (index: number) => (node: React.ReactNode) => {
    if (!menuItems.current) {
      menuItems.current = {}
    }
    menuItems.current[index] = node;
  };

  // 设置节点的checked和indeterminate
  function setCheckableOptionsStatus(options: Option[], checkedValue: string[] | number[]) {
    if (options && checkedValue) {
      options.forEach(option => {
        setCheckableOptionsStatus(option[getFieldName('children')], checkedValue);

        status.current[option[getFieldName('value')]] = {
          checked: false,
          indeterminate: false,
        };

        const checked = checkedValue.some((key: any) => key === option[getFieldName('value')]);
        const children: Option[] = option[getFieldName('children')] || [];
        let checkedAndIndeterminateChildren: Option[] = [];
        checkedAndIndeterminateChildren = children.filter((child: Option) => {
          return status.current[child[getFieldName('value')]].checked || status.current[child[getFieldName('value')]].indeterminate
        })

        let checkedChildren: Option[] = []
        checkedChildren = children.filter((child: Option) => {
          return status.current[child[getFieldName('value')]].checked
        })

        let indeterminateChildren: Option[] = []
        indeterminateChildren = children.filter((child: Option) => {
          return status.current[child[getFieldName('value')]].indeterminate
        })

        if (checked) {
          status.current[option[getFieldName('value')]].checked = true;
          children.forEach((c: Option) => {
            status.current[c[getFieldName('value')]].checked = true;
          });
        }
        if (checkedAndIndeterminateChildren.length > 0 && children.length !== checkedChildren.length) {
          status.current[option[getFieldName('value')]].indeterminate = true;
        }
        if (checkedChildren.length > 0 && checkedChildren.length === children.length) {
          status.current[option[getFieldName('value')]].checked = true;
        } else if (indeterminateChildren.length > 0) {
          status.current[option[getFieldName('value')]].indeterminate = true;
        }
      })
    }
  }

  const { menuColumnStyle } = restProps;
  setCheckableOptionsStatus(options, checkedValue);
  const showOpts = getShowOptions();

  return (
    <div className={prefixCls}>
      {showOpts.map((opts: Option[], menuIndex: number) => {
        const key = opts.map((opt: Option) => opt.value).join(',')
        return (
          <ul className={`${prefixCls}-menu`} key={key} style={menuColumnStyle}>
            {opts.map((option: Option) => getOption(option, menuIndex))}
          </ul>
        )
      })}
    </div>
  );
}
