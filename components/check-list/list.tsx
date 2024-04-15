import React, { useMemo, useState } from 'react';
import remove from 'lodash/remove';
import Checkbox from '../checkbox';
import Select from '../select';

import { getLocale } from './locale';
import type { CheckListProps, CheckListOption } from './interfaces';

export function isChecked(values: (string | number)[], value: string | number) {
  return values.indexOf(value) !== -1;
}
export function isAllChecked(value: any[], options: any[]) {
  return value.length !== 0 && value.length === options.length;
}

function List(props: CheckListProps) {
  const { max, options, value, onChange, disabled } = props;
  const [showAll, setShowAll] = useState(false);

  const selectOptions = useMemo(() => options.slice(max), [max, options]);
  const currentSelectValue = value.filter((item) =>
    selectOptions.find((option) => option.value === item),
  );

  const handleMoreSelectChange = (v: any) => {
    const tmp: any = {};
    selectOptions.forEach((opt: any) => {
      tmp[opt.value] = true;
    });
    const tempVal = [...value];
    remove(tempVal, (_v: string | number) => tmp[_v]);
    const newValue = tempVal.concat(v);
    if (onChange) {
      onChange(newValue, isAllChecked(newValue, options));
    }
  };
  const renderMoreSelect = () => {
    const { moreSelectProps } = props;
    return (
      <div className="hlui-checklist-more">
        <Select
          allowClear
          style={{
            display: 'block',
            width: '100%',
          }}
          disabled={disabled}
          fieldNames={{ label: 'title', value: 'value' }}
          {...moreSelectProps}
          mode="multiple"
          value={currentSelectValue}
          // @ts-ignore
          options={selectOptions}
          onChange={handleMoreSelectChange}
        />
      </div>
    );
  };
  const toggleShowAll = () => {
    setShowAll((prev) => !prev);
  };
  const renderShowMore = () => {
    const { moreSelect, locale = {} } = props;
    if (!max || options.length <= max) return null;
    if (moreSelect) return renderMoreSelect();
    const _locale = getLocale();
    let text: string;
    if (showAll) {
      text = locale.hideMore || _locale.hideMore;
    } else {
      text = locale.showMore || _locale.showMore;
    }
    return (
      <div className="hlui-checklist-more">
        <span className="hlui-checklist-more-action" onClick={toggleShowAll}>
          {text}
        </span>
      </div>
    );
  };

  const select = (item: any, checked: boolean) => {
    const newValue = [...value]
    if (checked) {
      newValue.push(item);
    } else {
      remove(newValue, (v: string | number) => v === item);
    }
    if (onChange) {
      onChange(newValue, isAllChecked(newValue, options));
    }
  };
  const checkboxList = useMemo(() => {
    if (showAll || !max) {
      return options;
    }
    return options.slice(0, max);
  }, [showAll, max, options]);
  return (
    <div className="hlui-checklist">
      {checkboxList.map((opt: CheckListOption) => (
        <div className="hlui-checklist-list-item" key={opt.value}>
          <div className="hlui-checklist-item-title">
            <Checkbox
              disabled={opt.disabled || disabled}
              checked={isChecked(value, opt.value)}
              onChange={(e: any) => select(opt.value, e.target.checked)}
            >
              {opt.title}
            </Checkbox>
          </div>
          <span className="hlui-checklist-item-subtitle">{opt.subtitle}</span>
        </div>
      ))}
      {renderShowMore()}
    </div>
  );
}
export default List;
