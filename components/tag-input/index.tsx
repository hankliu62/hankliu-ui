import * as React from 'react';
import Select from '../select';
import type { SelectProps, RefSelectProps } from '../select';
import { getLocale } from './locale';
import message from '../message';

declare global {
  interface Window {
    clipboardData: any;
  }
}

export type SelectValue = string[];

const regBoth = /(^\s*)|(\s*$)/g;

const DEFAULT_SEPARATORS = ['\t', '\r', '\n'];

function getSplitReg(tokenSeparators: string[] = []) {
  const separators = DEFAULT_SEPARATORS.concat(tokenSeparators).join('');
  return new RegExp(`[${separators}]+`);
}

export interface TagInputProps extends SelectProps {
  max?: number;
  maxMessage?: string;
  maxTagTextLengthMessage?: string;
  wrapStyle?: any;
  wrapClass?: string;
  showArrow?: boolean;
}

function TagInput({
  filterOption = false,
  open = false,
  showArrow = false,
  value = [],
  style,
  tokenSeparators,
  maxTagTextLength,
  max,
  maxMessage,
  maxTagTextLengthMessage,
  onChange,
  wrapStyle,
  wrapClass,
  ...rest
}: TagInputProps) {
  const selectRef = React.useRef<RefSelectProps>(null);
  const handlePaste = (e: React.ClipboardEvent<HTMLDivElement>) => {
    e.stopPropagation();
    e.preventDefault();
    const locale = getLocale();
    if (max && value.length >= max) return;
    const data = e.clipboardData || window.clipboardData;
    const text = data.getData('text');
    const reg = getSplitReg(tokenSeparators);
    const values = text.replace(regBoth, '').split(reg);
    const results: string[] = [];
    values.forEach((item: string) => {
      let tempItem = item;
      if (maxTagTextLength && item.length > maxTagTextLength) {
        message.error(maxTagTextLengthMessage || locale.maxTagTextLengthMessage);
        tempItem = item.substring(0, maxTagTextLength);
      }
      // 去除重复
      if (value.indexOf(tempItem) === -1 && results.indexOf(tempItem) === -1) {
        results.push(tempItem);
      }
    });
    let finalValue = value.concat(results);
    if (max && finalValue.length > max) {
      finalValue = finalValue.slice(0, max);
      message.error(maxMessage || locale.maxMessage.replace('{max}', max));
    }
    if (onChange) {
      onChange(finalValue, []);
    }
  };
  const handleInput = (e: any) => {
    const { keyCode, target } = e;
    const select = selectRef.current;
    if (keyCode === 13 && target.value) {
      select!.blur();
      setTimeout(() => {
        if (select) {
          select.focus();
        }
      }, 300);
    }
  };

  return (
    <div onPasteCapture={handlePaste} className={wrapClass} style={wrapStyle}>
      <Select
        ref={selectRef}
        filterOption={filterOption}
        open={open}
        mode="tags"
        onInputKeyDown={handleInput}
        value={value}
        tokenSeparators={tokenSeparators}
        maxTagTextLength={maxTagTextLength}
        onChange={onChange}
        style={{ width: '100%', ...style }}
        {...rest}
      />
    </div>
  );
}

export default TagInput;
