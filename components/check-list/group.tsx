// @ts-nocheck
import React from 'react';
import Checkbox from '../checkbox';
import Collapse from '../collapse';
import List, { isAllChecked } from './list';
import type { CheckListGroupProps } from './interfaces';

const { Panel } = Collapse;
export type option = {
  title: string | number;
  value: PropertyKey;
};
function stopPropagation(e: any) {
  e.stopPropagation();
}
function Group(props: CheckListGroupProps) {
  const toggleSelectAll = (e: any) => {
    // e.stopPropagation()
    const { options, onChange } = props;
    if (e.target.checked) {
      const result: PropertyKey[] = [];
      options.forEach((opt: any) => {
        const { value, disabled } = opt;
        if (disabled) return;
        result.push(value);
      });
      onChange(result, true);
    } else {
      onChange([]);
    }
  };
  const renderTitle = () => {
    const { title, subtitle, disabled, value, options } = props;
    const allChecked: boolean = isAllChecked(value, options);
    return (
      <span onClick={stopPropagation}>
        <Checkbox
          disabled={disabled}
          indeterminate={!allChecked && value.length}
          checked={allChecked}
          onChange={toggleSelectAll}
        >
          {title}
        </Checkbox>
        {subtitle ? <span className="hlui-head-subtitle">{subtitle}</span> : null}
      </span>
    );
  };
  const { defaultExpanded = true } = props;
  return (
    <Collapse
      className="hlui-checklist-group"
      defaultActiveKey={defaultExpanded ? 'check-list' : ''}
    >
      <Panel header={renderTitle()} key="check-list">
        <List {...props} />
      </Panel>
    </Collapse>
  );
}

export default Group;
