import * as React from 'react';
import type { RefSelectProps } from 'antd4x/lib/select';
import { useEffect, useMemo, useRef } from 'react';
import cl from 'classnames';
import Select from '../select';
import type { SelectProps } from '../select';
import appendDefaultProps from '../_util/appendDefaultProps';
import generateRandomClass from '../_util/generateRandomClass';

appendDefaultProps();

export * from 'antd4x/lib/select';

export interface HlSelectProps extends SelectProps {
  lockHeight?: boolean;
}

const HlSelect = React.forwardRef<RefSelectProps, HlSelectProps>((props, ref) => {
  const { lockHeight, mode, className, ...rest } = props;

  const randomClass = useMemo(() => generateRandomClass(), []);
  const observerRef = useRef<MutationObserver>();
  useEffect(() => {
    if (!lockHeight || !mode) {
      return undefined;
    }
    const containerDom = document.querySelector(`.${randomClass} .hlui-select-selector`);
    const contentDom = document.querySelector(`.${randomClass} .hlui-select-selection-overflow`);

    function scrollAction() {
      const width = contentDom?.getBoundingClientRect().width;
      if (width) {
        containerDom?.scrollTo(width, 0);
      }
    }
    scrollAction();
    observerRef.current = new MutationObserver(scrollAction);
    if (!containerDom) {
      return undefined;
    }
    observerRef.current.observe(containerDom, {
      childList: true,
      subtree: true,
      characterData: true,
    });
    return () => {
      observerRef.current?.disconnect();
    };
  }, [lockHeight, mode]);
  // eslint-disable-next-line react/jsx-props-no-spreading
  return (
    <Select
      {...rest}
      mode={mode}
      className={cl(randomClass, className, {
        'hl-select-lock-height': lockHeight,
      })}
      ref={ref}
    />
  );
});

// @ts-ignore
export default Object.assign(HlSelect, {
  SECRET_COMBOBOX_MODE_DO_NOT_USE: Select.SECRET_COMBOBOX_MODE_DO_NOT_USE,
  Option: Select.Option,
  OptGroup: Select.OptGroup,
});
