// @ts-nocheck
import React from 'react';
import cs from 'classnames';
import Dropdown from '../dropdown';

export interface DropSelectOptionProps {
  value: number | string;
  title: React.ReactNode;
  disabled?: boolean;
  className?: string;
}

export interface DropSelectProps {
  title?: React.ReactNode;
  value?: number | string;
  options: DropSelectOptionProps[];
  onChange?: (value: number | string) => void;
  children: React.ReactNode;
  trigger?: ('click' | 'hover' | 'contextMenu')[];
  onOpenChange?: (open: boolean) => void;
  open?: boolean;
  disabled?: boolean;
  getPopupContainer?: (triggerNode: HTMLElement) => HTMLElement;
  transitionName?: string;
  placement?: 'topLeft' | 'top' | 'topRight' | 'bottomLeft' | 'bottom' | 'bottomRight';
  overlayClassName?: string;
  overlayStyle?: React.CSSProperties;
  forceRender?: boolean;
  mouseEnterDelay?: number;
  mouseLeaveDelay?: number;
  openClassName?: string;
}

function renderOverlay(
  title?: React.ReactNode,
  value?: number | string,
  options?: DropSelectOptionProps[],
  onChange?: (value: number | string) => void,
) {
  if (!options) return null;
  return (
    <div className="drop-select-wrap">
      {title && <div className="drop-select-title">{title}</div>}
      {options.map((opt: DropSelectOptionProps) => (
        <div
          key={opt.value}
          className={cs(opt.className, {
            'drop-select-option': true,
            selected: value === opt.value,
            disabled: opt.disabled,
          })}
          onMouseDown={() => !opt.disabled && onChange && onChange(opt.value)}
        >
          {opt.title}
        </div>
      ))}
    </div>
  );
}

const DropSelect = (props: DropSelectProps) => {
  const { title, value, options, onChange, children, ...rest } = props;
  return (
    <Dropdown overlay={renderOverlay(title, value, options, onChange)} {...rest}>
      {children && children}
    </Dropdown>
  );
};

export default DropSelect;
