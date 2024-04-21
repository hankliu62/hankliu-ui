import * as React from 'react';
import cl from 'classnames';
import IconMore from '@hankliu/icons/MoreOutlined';
import Checkbox from '../checkbox';
import SimpleTreeNodeFoldButton from './SimpleTreeNodeFoldButton';

export interface SimpleTreeNodeProps {
  title: React.ReactNode;
  fold: boolean;
  checked: boolean;
  disabled?: boolean;
  hasChildren?: boolean;
  onlyParentChecked?: boolean;
  onClick(): void;
  onFoldClick?(): void;
  onOnlyParentClick?(): void;
}

function SimpleTreeNode({
  fold,
  title,
  checked,
  disabled,
  hasChildren,
  onlyParentChecked,
  onClick,
  onFoldClick,
  onOnlyParentClick,
}: SimpleTreeNodeProps) {
  return (
    <div className="hlui-simple-tree-select-node">
      {hasChildren ? <SimpleTreeNodeFoldButton fold={fold} onClick={onFoldClick} /> : null}
      <div
        className={cl('hlui-simple-tree-select-item', {
          'hlui-simple-tree-select-item-disabled': disabled,
        })}
      >
        <div
          className="hlui-simple-tree-select-item-content"
          onClick={disabled ? undefined : onClick}
        >
          <Checkbox disabled={disabled} checked={checked} className="hlui-simple-tree-node-box" />
          {title}
        </div>
        {hasChildren ? (
          <div className="hlui-simple-tree-select-actions">
            <IconMore className="hlui-simple-tree-select-actions-icon" />
            <div
              className="hlui-simple-tree-select-actions-item"
              onClick={disabled ? undefined : onOnlyParentClick}
            >
              <Checkbox disabled={disabled} checked={onlyParentChecked} />
              <span className="hlui-simple-tree-actions-text">只选父级</span>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default SimpleTreeNode;
