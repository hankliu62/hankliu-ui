// @ts-nocheck
import { ReactNode } from 'react';

export type SimpleTreeOptionValue = string | number;
export interface SimpleTreeSelectOption {
  title?: ReactNode;
  label?: string;
  value: SimpleTreeOptionValue;
  disabled?: boolean;
  checkable?: boolean;
  children?: SimpleTreeSelectOption[];
}

export interface SimpleTreeSelectInnerOption {
  title: ReactNode;
  value: SimpleTreeOptionValue;
  disabled?: boolean;
  checkable: boolean;
  key: string;
  position: number[];
  children?: SimpleTreeSelectInnerOption[];
}

export interface CheckTreeNode {
  checked: boolean;
  children: CheckTreeNode[];
}

export function stopPropagation(e: any) {
  e.stopPropagation();
  e.preventDefault();
}

export function getTreeNode(tree: CheckTreeNode[], position: number[]): CheckTreeNode | undefined {
  let node;
  const { length } = position;
  for (let i = 0; i < length; i++) {
    const val = position[i];
    if (i === 0) {
      node = tree[val];
    } else if (node?.children?.length) {
      node = node.children[val];
    }
  }
  return node;
}

interface AbstractTree {
  value: any;
  children?: AbstractTree[];
}
export function walkTree<T extends AbstractTree>(
  tree: T[],
  callback: (item: T, parent?: T) => void,
  parent?: T,
): void {
  tree.forEach(item => {
    callback(item, parent);
    if (item.children && item.children.length) {
      walkTree(item.children, callback, item);
    }
  });
}

export function generateCheckTree(options: AbstractTree[], values: any[]): CheckTreeNode[] {
  return options.map(item => {
    const { children, value } = item;
    let newChildren: CheckTreeNode[] = [];
    if (children?.length) {
      newChildren = generateCheckTree(children, values);
    }
    return {
      checked: values.indexOf(value) > -1,
      children: newChildren,
    };
  });
}

export function setTreeNodePosition(
  options: SimpleTreeSelectOption[],
  parentPosition?: number[],
): SimpleTreeSelectInnerOption[] {
  return options.map((item, itemIndex) => {
    const { children, value, title, label, disabled, checkable } = item;
    let position: number[];
    if (parentPosition !== undefined) {
      position = [...parentPosition, itemIndex];
    } else {
      position = [itemIndex];
    }
    let currentChildren;

    if (children?.length) {
      currentChildren = setTreeNodePosition(children, position);
    }

    return {
      value,
      title: label || title || '',
      disabled,
      position,
      key: position.join('-'),
      checkable: checkable === undefined ? true : checkable,
      children: currentChildren,
    };
  });
}

export function getTreeTitle(
  tree: SimpleTreeSelectInnerOption[],
  value: SimpleTreeOptionValue[],
): ReactNode[] {
  const title: ReactNode[] = [];
  walkTree(tree, function(node) {
    if (value.includes(node.value)) {
      title.push(node.title as ReactNode);
    }
  });
  return title;
}
