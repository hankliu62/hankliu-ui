// @ts-nocheck
import React, { useState, useRef, useEffect, useCallback } from 'react';
import cs from 'classnames';
import remove from 'lodash/remove';
import IconLeft from '@hankliu/icons/lib/icons/LeftOutlined';
import IconRight from '@hankliu/icons/lib/icons/RightOutlined';
import IconExpand from '@hankliu/icons/lib/icons/ExpandOutlined';

import { isAllChecked, isChecked } from './list';
import Checkbox from '../checkbox';
import Dropdown from '../dropdown';
import { CheckListRowsProps } from './interfaces';

export type TimerHandler = string | Function | null;

function Rows(props: CheckListRowsProps) {
  const rootRef = useRef();
  const innerRef = useRef();
  const [temp, settemp] = useState({});
  const [open, setopen] = useState(false);
  const [scrolled, setscrolled] = useState(false);
  const [scrollX, setscrollX] = useState(0);
  const [activeSubIndex, setactiveSubIndex] = useState(0);
  useEffect(() => {
    resize();
    window.addEventListener('resize', handleWindowResize, false);
  }, []);
  useEffect(() => {
    const { current } = innerRef;
    const width = current.clientWidth;
    if (temp.width !== width) {
      console.log('width changed, to resize');
      resize();
    }
    return () => {
      window.removeEventListener('resize', handleWindowResize, false);
    };
  });
  const debounce = useCallback((fn: Function, delay: number, imediateBool: boolean = false) => {
    let timer: TimerHandler = null;
    let result;
    const self = this;
    const redebounce = function () {
      if (timer) clearTimeout(timer as number);
      if (imediateBool) {
        result = fn.apply(self, arguments);
        return result;
      }
      timer = setTimeout(() => {
        result = fn.apply(self, arguments);
        return result;
      }, delay);
    };
    return redebounce;
  }, []);
  const handleWindowResize = () => {
    const fn = debounce(() => {
      const { current } = innerRef;
      if (!current) return;
      const _width = rootRef.current.clientWidth;
      if (_width !== temp._width) {
        resize();
      }
    }, 300);
    return fn();
  };

  const resize = () => {
    console.log('do resize');
    const _width = rootRef.current.clientWidth;
    const width = innerRef.current.clientWidth;

    const bool = width > _width;
    settemp({
      _width,
      width,
    });
    setscrollX(bool ? scrollX : 0);
    setscrolled(bool as boolean);
  };

  const scrollLeft = () => {
    let countx = scrollX;
    if (countx === 0) return;
    const ww = innerRef.current.parentNode.clientWidth;
    // const width = current.clientWidth
    // 一次翻一屏
    countx -= ww;
    if (countx <= 0) countx = 0;
    setscrollX(countx);
  };

  const scrollRight = () => {
    const { width } = temp;
    const ww = innerRef.current.parentNode.clientWidth;
    const max = width - ww;
    let countX = scrollX;
    if (countX >= max) return;
    // 一次翻一屏
    countX += ww;
    if (countX >= max) {
      countX = max;
    }
    setscrollX(countX);
  };

  const handleVisibleChange = (vis: boolean) => {
    setopen(vis);
    setactiveSubIndex(vis ? activeSubIndex : '');
  };

  // const handleListChange =(v: any[], idx: number) =>{
  //   const { value = [], onChange } = props;
  //   value[idx] = v
  //   onChange(value)
  // }

  const toggleListSelectAll = (e: any, idx: number) => {
    const { rows, value = [], onChange } = props;
    const { options } = rows[idx];
    if (e.target.checked) {
      const result: any[] = [];
      options.forEach((opt: any) => {
        const { value, disabled } = opt;
        if (disabled) return;
        result.push(value);
      });
      value[idx] = result;
    } else {
      value[idx] = [];
    }
    onChange(value);
  };

  const select = (item: any, checked: boolean) => {
    const { value, onChange, rows } = props;
    const group = rows[activeSubIndex];
    if (!group) return;
    // const { options } = group
    if (!value[activeSubIndex]) value[activeSubIndex] = [];
    if (checked) {
      value[activeSubIndex].push(item);
    } else {
      remove(value[activeSubIndex], (v: any) => v === item);
    }
    onChange && onChange(value);
  };

  // const hideSub = () => {
  //   setactiveSubIndex('')
  // }
  const renderRoot = () => {
    const { rows, style, className = '', useDropdown = true } = props;
    return (
      <div
        ref={rootRef}
        style={style}
        className={cs('hlui-checklist-rows', className, { scrolled })}
      >
        <div onClick={scrollLeft} className="scroll-left">
          <IconLeft />
        </div>
        <div className={cs('rows-scroll')}>
          <div
            ref={innerRef}
            className="rows-inner"
            style={{ transform: `translate3d(-${scrollX}px, 0, 0)` }}
          >
            {rows.map(renderItem)}
          </div>
        </div>
        <div onClick={scrollRight} className="scroll-right">
          <IconRight />
        </div>
        {useDropdown ? null : <div className="hlui-checklist-drop">{renderSub()}</div>}
      </div>
    );
  };

  const renderItem = (group: any, idx: number) => {
    const { value = [], itemStyle } = props;
    const { title, subtitle, disabled, options } = group;
    const allChecked = isAllChecked(value[idx] || [], options);
    return (
      <span
        key={idx}
        style={group.itemStyle || itemStyle}
        className={cs('row-item', { active: activeSubIndex === idx })}
        onMouseEnter={() => {
          setactiveSubIndex(idx);
        }}
      >
        <Checkbox
          disabled={props.disabled || disabled}
          indeterminate={!allChecked && value[idx] && value[idx].length}
          checked={allChecked}
          onChange={(e: any) => toggleListSelectAll(e, idx)}
        >
          {title}
        </Checkbox>
        {subtitle ? <span className="head-subtitle">{subtitle}</span> : null}
        <IconExpand />
      </span>
    );
  };
  const renderSubItem = (opt: any, idx: number) => {
    const { disabled = props.disabled } = opt;
    const { value, rows, subItemStyle } = props;
    const group = rows[activeSubIndex];
    return (
      <div key={idx} style={group.subItemStyle || subItemStyle} className="sub-item">
        <Checkbox
          disabled={disabled}
          checked={isChecked(value[activeSubIndex] || [], opt.value)}
          onChange={(e: any) => select(opt.value, e.target.checked)}
        >
          {opt.title}
        </Checkbox>
      </div>
    );
  };
  const renderSub = () => {
    const { rows } = props;
    const group = rows[activeSubIndex];
    if (!group) return <div />;
    const width = temp._width ?? 'auto';
    return (
      <div
        style={{ width }}
        className={cs('hlui-checklist-rows-sub', {
          'no-tlr': !scrolled && activeSubIndex === 0,
          'no-trr': !scrolled && temp.width === temp._width && activeSubIndex === rows.length - 1,
        })}
      >
        {(group.options as []).map(renderSubItem)}
      </div>
    );
  };

  const { dropdownProps, useDropdown = true } = props;
  if (useDropdown) {
    return (
      <Dropdown
        {...dropdownProps}
        open={open}
        onOpenChange={handleVisibleChange}
        overlay={renderSub()}
      >
        {renderRoot()}
      </Dropdown>
    );
  }
  return renderRoot();
}
export default Rows;
