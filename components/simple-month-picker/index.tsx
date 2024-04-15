// @ts-nocheck
import React from 'react';
import * as dayjs from 'dayjs';
import find from 'lodash/find';
import times from 'lodash/times';
import cls from 'classnames';
import IconSelectUpMin from '@ant-design/icons/UpOutlined';
import IconSelectDownMin from '@ant-design/icons/DownOutlined';
import Popover from '../popover';

function formatValue(value: any) {
  if (value.hitherto) return '至今';
  return `${value.year}年${value.month}月`;
}

function createYears(startYear?: number, disableYear?: any) {
  const years: any[] = [];
  const YEAR = dayjs().year();
  let iterateeCount = 30;
  if (!startYear) {
    startYear = 1980;
  }
  if (startYear && startYear < YEAR) {
    iterateeCount = YEAR - startYear + 1;
  }
  times(iterateeCount, (index: number) => {
    const value = YEAR - index;
    let disabled = false;
    if (disableYear) disabled = disableYear(value);
    years.push({ value, disabled });
  });
  return years;
}

function createMonths(year: any, disableMonth?: any) {
  if (year.disabled) return [];
  let start = 1;
  const months: any = [];
  times(12, () => {
    start += 1;
    const value = start;
    let disabled = false;
    if (disableMonth) disabled = disableMonth(value, year.value);
    months.push({ value, disabled, label: `${value}月` });
  });
  return months;
}

export interface SimpleMonthPickerProps {
  value?: any;
  onChange?: (value: any) => void;
  placeholder?: string;
  disableYear?: (year: number) => boolean;
  disableMonth?: (month: number, yaer: number) => boolean;
  hitherto?: boolean;
  block?: boolean;
  startYear?: number;
  getTooltipContainer?: () => any;
}

export default class SimpleMonthPicker extends React.Component<SimpleMonthPickerProps, any> {
  static getDerivedStateFromProps(nextProps: SimpleMonthPickerProps, prevState: any) {
    let nextValue = nextProps.value;
    if (!nextValue) nextValue = {};
    if (nextValue !== prevState.value) {
      return nextValue;
    }
  }

  constructor(props: SimpleMonthPickerProps) {
    super(props);
    this.state = {
      value: props.value ? props.value : {},
    };
    this.toggleWrap = this.toggleWrap.bind(this);
    this.setHithertoValue = this.setHithertoValue.bind(this);
    this.handleOutsideClick = this.handleOutsideClick.bind(this);
  }

  componentDidMount() {
    window.addEventListener('click', this.handleOutsideClick);
  }

  componentWillUnmount() {
    window.removeEventListener('click', this.handleOutsideClick);
  }

  handleOutsideClick() {
    if (this.state.wrapVisible) this.setState({ wrapVisible: false });
  }

  render() {
    let {
      placeholder,
      disableYear,
      disableMonth,
      hitherto,
      block,
      startYear,
      getTooltipContainer,
    } = this.props;
    placeholder = placeholder || '请选择日期';
    const { value, wrapVisible } = this.state;
    const years = createYears(startYear, disableYear);
    const year = find(years, (item: any) => item.value === value.year);
    let showHitherto: any;
    if (hitherto) {
      showHitherto = (
        <div
          className={cls({
            'hlui-smp-date-value hlui-smp-year-value': true,
            active: value.hitherto,
          })}
          onClick={this.setHithertoValue}
        >
          至今
        </div>
      );
    }

    const wrap = (
      <div className="hlui-smp-wrap">
        <div className="hlui-smp-years">
          {showHitherto}
          {years.map((item, index) => (
            <div
              key={index}
              className={cls({
                'hlui-smp-date-value hlui-smp-year-value': true,
                disabled: item.disabled,
                active: item.value === value.year,
              })}
              onClick={(e) => {
                e.stopPropagation();
                e.nativeEvent.stopImmediatePropagation();
                if (item.disabled) return false;
                this.changeYear(item);
              }}
            >
              {item.value}
            </div>
          ))}
        </div>
        {this.renderMonths(year, disableMonth)}
      </div>
    );
    let inner = null;
    if (value.hitherto || (value.month && value.year)) {
      inner = <div className="hlui-smp-value">{formatValue(value)}</div>;
    } else {
      inner = <div className="hlui-smp-placeholder">{placeholder}</div>;
    }
    const popoverProps: any = {
      content: wrap,
      visible: wrapVisible,
      placement: 'bottomLeft',
      overlayClassName: 'hlui-smp-popover',
      trigger: 'click',
    };
    if (getTooltipContainer) popoverProps.getTooltipContainer = getTooltipContainer;
    return (
      <Popover {...popoverProps}>
        <div
          ref="root"
          className={cls({
            'hlui-smp': true,
            'display-block': block,
          })}
          onClick={this.toggleWrap}
        >
          <div className="hlui-smp-inner">{inner}</div>
          {wrapVisible ? (
            <IconSelectUpMin className="hlui-smp-active-icon" />
          ) : (
            <IconSelectDownMin className="hlui-smp-icon" />
          )}
        </div>
      </Popover>
    );
  }

  renderMonths(year: any, disableMonth?: any) {
    if (!year) {
      return (
        <div className="hlui-smp-months">
          <div className="hlui-smp-empty-block">请选择年份</div>
        </div>
      );
    }
    const months = createMonths(year, disableMonth);
    const { value } = this.state;
    return (
      <div className="hlui-smp-months">
        {months.map((item: any, index: number) => (
          <div
            key={index}
            className={cls({
              'hlui-smp-date-value hlui-smp-month-value': true,
              disabled: item.disabled,
              active: item.value === value.month,
            })}
            onClick={(e) => {
              e.stopPropagation();
              e.nativeEvent.stopImmediatePropagation();
              if (item.disabled) return false;
              this.changeMonth(item);
            }}
          >
            {item.label}
          </div>
        ))}
      </div>
    );
  }

  toggleWrap(e: any) {
    e.stopPropagation();
    e.nativeEvent.stopImmediatePropagation();
    const { wrapVisible } = this.state;
    this.setState({ wrapVisible: !wrapVisible });
  }

  changeYear(year: any) {
    const { value } = this.state;
    value.month = undefined;
    value.hitherto = false;
    value.year = year.value;
    this.setState({ value });
  }

  changeMonth(month: any) {
    const { value } = this.state;
    value.month = month.value;
    this.setValue(value);
  }

  setHithertoValue(e: any) {
    e.stopPropagation();
    e.nativeEvent.stopImmediatePropagation();
    const value = { hitherto: true };
    this.setValue(value);
  }

  setValue(value: any) {
    this.setState({ value, wrapVisible: false });
    const { onChange } = this.props;
    if (onChange) onChange(value);
  }
}
