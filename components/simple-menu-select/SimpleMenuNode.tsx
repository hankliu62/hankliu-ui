// @ts-nocheck
import React, {
  ForwardRefRenderFunction, useImperativeHandle, forwardRef, useRef,
} from 'react';
import cl from 'classnames';
import ICON_ARROW from './arrow.svg';
import Checkbox from '../checkbox';

export interface SimpleMenuNodeHandles {
  element: HTMLDivElement | null;
}

interface SimpleMenuNodeProps {
  active: boolean;
  checked: boolean;
  title: React.ReactNode;
  onClick(): void;
  childSelectedCount?: number;
  disabled?: boolean;
  checkable: boolean;
  hasChildren?: boolean;
  onMouseEnter?: () => void;
}

const SimpleMenuNode: ForwardRefRenderFunction<SimpleMenuNodeHandles, SimpleMenuNodeProps> = (
  {
    title,
    active,
    checked,
    onClick,
    onMouseEnter,
    hasChildren,
    disabled,
    checkable,
    childSelectedCount,
  }: SimpleMenuNodeProps,
  ref,
) => {
  const itemRef = useRef<HTMLDivElement>(null);
  useImperativeHandle(
    ref,
    () => ({
      element: itemRef.current,
    }),
    [itemRef.current],
  );
  return (
    <div
      ref={itemRef}
      className={cl({
        'hlui-simple-menu-select-item': true,
        'hlui-simple-menu-select-item-active': active,
        'hlui-simple-menu-select-item-disabled': disabled,
      })}
      onClick={disabled || !checkable ? undefined : onClick}
      onMouseEnter={onMouseEnter}
    >
      <div>{title}</div>
      <div className="hlui-simple-menu-node-extra">
        {childSelectedCount ? (
          <span className="hlui-simple-menu-select-count">{childSelectedCount}</span>
        ) : null}
        {checkable ? (
          <Checkbox disabled={disabled} checked={checked} className="hlui-simple-menu-select-box" />
        ) : null}
        {hasChildren && (
          <img src={ICON_ARROW} alt="arrow" className="hlui-simple-menu-select-arrow" />
        )}
      </div>
    </div>
  );
};

export default forwardRef(SimpleMenuNode);
