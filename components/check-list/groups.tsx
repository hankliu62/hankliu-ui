import React, { useState } from 'react';
import pick from 'lodash/pick';
import type { CheckboxChangeEvent } from '../checkbox';
import Checkbox from '../checkbox';
import Collapse from '../collapse';
import List, { isAllChecked } from './list';
import { getLocale } from './locale';
import type { CheckListGroupsProps, CheckListProps } from './interfaces';

const { Panel } = Collapse;

function stopPropagation(e: any) {
  e.stopPropagation();
}

function Groups(props: CheckListGroupsProps) {
  const [showAll, setShowAll] = useState(false);
  const toggleListSelectAll = (e: CheckboxChangeEvent, index: number) => {
    const { groups, value = [], onChange } = props;
    const { options } = groups[index];
    if (e.target.checked) {
      const result: any[] = [];
      options.forEach((opt: any) => {
        const { value: optValue, disabled } = opt;
        if (disabled) return;
        result.push(optValue);
      });
      value[index] = result;
    } else {
      value[index] = [];
    }
    onChange(value);
  };
  const renderTitle = (group: CheckListProps, idx: number) => {
    const { value, disabled: propsDisabled } = props;
    const { title, subtitle, disabled, options } = group;
    const allChecked = isAllChecked(value[idx] ?? [], options);
    return (
      <span onClick={stopPropagation}>
        <Checkbox
          disabled={propsDisabled || disabled}
          indeterminate={(!allChecked && value[idx] && value[idx].length) as boolean}
          checked={allChecked}
          onChange={(e: CheckboxChangeEvent) => toggleListSelectAll(e, idx)}
        >
          {title}
        </Checkbox>
        {subtitle ? <span className="hlui-head-subtitle">{subtitle}</span> : null}
      </span>
    );
  };
  const handleListChange = (v: any[], idx: number) => {
    const { value = [], onChange } = props;
    value[idx] = v;
    onChange(value);
  };
  const renderShowMore = () => {
    const toggleShowAll = () => {
      setShowAll((prev) => !prev);
    };
    const { groups, max, locale = {} } = props;
    if (!max || groups.length <= max) return null;
    const _locale = getLocale();
    let text: string;
    if (showAll) {
      text = locale.hideMore || _locale.hideMore;
    } else {
      text = locale.showMore || _locale.showMore;
    }
    return (
      <div className="hlui-checklist-groups-more">
        <span className="hlui-checklist-more-action" onClick={toggleShowAll}>
          {text}
        </span>
      </div>
    );
  };
  const {
    max,
    value = [],
    moreSelect,
    moreSelectProps,
    locale,
    disabled,
    groups,
    className = '',
    onCollapseChange,
  } = props;
  let classNames = className;
  const colProps = pick(props, ['style', 'activeKey', 'defaultActiveKey', 'bordered', 'accordion']);
  classNames += ' hlui-checklist-groups';
  let results: any[] = [];
  if (!max || showAll) {
    results = groups;
  } else {
    results = groups.slice(0, max);
  }
  return (
    <Collapse {...colProps} className={classNames} onChange={onCollapseChange}>
      {results.length
        ? results.map((group: any, idx: number) => (
            <Panel header={renderTitle(group, idx)} key={group.key}>
              <List
                moreSelect={moreSelect}
                moreSelectProps={moreSelectProps}
                locale={locale}
                disabled={disabled}
                {...group}
                value={value[idx] || []}
                onChange={(v: any[]) => handleListChange(v, idx)}
              />
            </Panel>
          ))
        : null}
      {renderShowMore()}
    </Collapse>
  );
}

export default Groups;
