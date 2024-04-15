import cl from 'classnames';
import React from 'react';

interface SimpleTreeNodeFoldButtonProps {
  fold: boolean;
  onClick?(): void;
}
export default function SimpleTreeNodeFoldButton({ fold, onClick }: SimpleTreeNodeFoldButtonProps) {
  return (
    <div className="hlui-simple-tree-select-fold-wrap" onClick={onClick}>
      <svg
        className={cl('hlui-simple-tree-select-fold', {
          'hlui-simple-tree-select-fold-active': !fold,
        })}
        viewBox="0 0 1024 1024"
        focusable="false"
        data-icon="caret-down"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M840.4 300H183.6c-19.7 0-30.7 20.8-18.5 35l328.4 380.8c9.4 10.9 27.5 10.9 37 0L858.9 335c12.2-14.2 1.2-35-18.5-35z" />
      </svg>
    </div>
  );
}
