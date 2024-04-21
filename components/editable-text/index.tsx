import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import type { ChangeEvent, FocusEvent, KeyboardEvent } from 'react';
import cs from 'classnames';
import IconEdit from '@hankliu/icons/EditOutlined';
import { getLocale } from './locale';

function getValue(value: string, max?: number) {
  return max && value ? value.slice(0, max) : value;
}

export interface EditableTextProps {
  value: string;
  controlled?: boolean;
  autoSelect?: boolean;
  onChange?: (value: string) => void;
  onInputBlur?: (e: FocusEvent<HTMLInputElement>) => boolean | Promise<boolean>;
  onInputFocus?: (e: FocusEvent<HTMLInputElement>) => void;
  max?: number;
  fixedValueWidth?: boolean;
  placeholder?: string;
  style?: React.CSSProperties;
  className?: string;
}

export default function EditableText({
  value = '',
  controlled = false,
  autoSelect = true,
  onChange,
  onInputBlur,
  onInputFocus,
  max,
  fixedValueWidth,
  placeholder,
  style,
  className,
}: EditableTextProps) {
  const locale = getLocale();
  const inputRef = useRef<HTMLInputElement>(null);
  const [innerValue, setInnerValue] = useState('');
  const [editing, setEditing] = useState(false);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const inputValue = getValue(e.target.value, max);
    setInnerValue(inputValue);
    if (controlled && typeof onChange === 'function') {
      onChange(inputValue);
    }
  };

  const handleInputBlur = (e: FocusEvent<HTMLInputElement>) => {
    if (typeof onInputBlur === 'function') {
      e.preventDefault();
      e.stopPropagation();
      const res = onInputBlur(e);
      if (typeof res === 'boolean') {
        if (res) {
          setEditing(false);
        } else {
          inputRef.current!.focus();
        }
      } else {
        res.then(
          () => {
            setEditing(false);
          },
          () => {
            inputRef.current!.focus();
          },
        );
      }
    } else {
      if (onChange) {
        onChange(e.target.value);
      }
      setEditing(false);
    }
  };

  const handleInputFocus = (e: FocusEvent<HTMLInputElement>) => {
    if (typeof onInputFocus === 'function') {
      onInputFocus(e);
    }
  };

  const handleInputKeyUp = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.keyCode === 13) {
      inputRef.current!.blur();
    }
  };

  const setInputSelect = () => {
    inputRef.current!.select();
  };

  const editCallback = () => {
    inputRef.current!.focus();
    if (autoSelect) {
      setTimeout(setInputSelect, 50);
    }
  };

  const edit = () => {
    setInnerValue(value);
    setEditing(true);
  };
  useLayoutEffect(() => {
    if (editing) {
      editCallback();
    }
  }, [editing]);

  useEffect(() => {
    if (controlled) {
      setInnerValue(value);
    }
  }, [controlled, value]);

  return (
    <span
      className={cs(
        'hlui-editable-text',
        {
          'hlui-editable-text-editing': editing,
        },
        className,
      )}
      style={style}
    >
      <span
        className={cs('hlui-editable-text-value', {
          'hlui-editable-text-full-width': fixedValueWidth,
        })}
      >
        {value || (
          <span className="hlui-editable-text-placeholder">
            {placeholder || locale.textPlaceholder}
          </span>
        )}
        <IconEdit className="hlui-editable-text-icon" onClick={edit} />
      </span>
      <input
        className="hlui-editable-text-input"
        type="text"
        ref={inputRef}
        value={innerValue}
        onBlur={handleInputBlur}
        onFocus={handleInputFocus}
        onChange={handleInputChange}
        onKeyUp={handleInputKeyUp}
      />
    </span>
  );
}
