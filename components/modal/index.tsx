import AntModal, { ModalProps } from 'antd4x/lib/modal';
import appendDefaultProps from '../_util/appendDefaultProps';
import React, { useContext, useEffect, useMemo } from 'react';
import { usePanelRef } from '../watermark/context';
import { ConfigContext } from 'antd4x/lib/config-provider';
import classNames from 'classnames';
import uniqueId from 'lodash/uniqueId';

appendDefaultProps();

const HlModal = (props: ModalProps) => {
  const { wrapClassName, ...rest } = props;
  const prefixCls = useContext(ConfigContext)?.getPrefixCls();
  const panelEvent = usePanelRef(`.${prefixCls}-modal-content`);
  const onlyOneClassName = useMemo<string>(() => uniqueId(`${prefixCls}-modal-`), []);

  useEffect(() => {
    // 最大尝试次数
    let count: number = 0;
    if (rest.open || rest.visible) {
      function callPanelEvent() {
        const modal = document.querySelector(`.${onlyOneClassName}`);
        if (modal) {
          panelEvent(modal as HTMLElement);
        } else {
          count++;
          // 最大尝试次数
          count < 10 && setTimeout(callPanelEvent, 1000);
        }
      }

      setTimeout(callPanelEvent, 100);
    }
  }, [rest.open, rest.visible]);

  return <AntModal wrapClassName={classNames(wrapClassName, onlyOneClassName)} {...rest} />;
};

const Modal: typeof AntModal = Object.assign(HlModal, {
  ...AntModal,
});

export * from 'antd4x/lib/modal';
export default Modal;
