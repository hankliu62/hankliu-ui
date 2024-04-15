import * as React from 'react';
import type { ModalProps } from 'antd4x/lib/modal/Modal';
import Modal from 'antd4x/lib/modal/Modal';
import cs from 'classnames';
import IconClose from '@ant-design/icons/lib/icons/CloseOutlined';
import type { HlButtonProps, HlButtonType } from '../button';
import Button from '../button';
import ScrollContainer from '../scroll-container';
import { getConfirmLocale } from './locale';

export { default as destroyFns } from 'antd4x/lib/modal/destroyFns';
export { ModalFuncProps } from 'antd4x/lib/modal/Modal';

export interface HlModalProps extends Omit<ModalProps, 'okType'> {
  // 添加自定义 icon，三元操作下有效
  icon?: React.ReactNode;
  // 是否是三元操作
  ternary?: boolean;
  scroll?: string | boolean;
  okType?: HlButtonType;

  onSecondly?: (e: React.MouseEvent<HTMLElement>) => void;

  secondText?: React.ReactNode;

  secondType?: HlButtonType;

  secondButtonProps?: HlButtonProps;

  cancelType?: HlButtonType;
  cancelButtonVisible?: boolean;
  // 底部额外内容
  footerExtraContent?: React.ReactNode;
  full?: boolean;
  layout?: string;
  /** 是否固定关闭按钮的位置 */
  fixedCloseBtn?: boolean;
}

function getWindowSize() {
  if (typeof document !== 'object') return { width: 0, height: 0 };
  const width = Math.max(document.documentElement.clientWidth, window.innerWidth);
  const height = Math.max(document.documentElement.clientHeight, window.innerHeight);
  return { width, height };
}

type HlModalChildrenProps = Pick<
  HlModalProps,
  'title' | 'icon' | 'ternary' | 'scroll' | 'children'
>;

function HlModalChildren(props: HlModalChildrenProps) {
  const {
    children, title, scroll, ternary, icon,
  } = props;
  if (scroll === true) {
    return (
      // eslint-disable-next-line no-use-before-define
      <ScrollContainer maxHeight={HlModal.getMaxHeight(true, true, true)}>
        {children}
      </ScrollContainer>
    );
  }
  if (ternary) {
    return (
      <div className={cs('hlui-modal-ternary-content', { 'with-icon': icon })}>
        {icon && <div className="hlui-modal-ternary-icon-wrap">{icon}</div>}
        <div className="hlui-modal-ternary-title">{title}</div>
        {children}
      </div>
    );
  }
  // eslint-disable-next-line react/jsx-no-useless-fragment
  return <>{children}</>;
}
type HlModalFooterProps = Pick<
  HlModalProps,
  | 'ternary'
  | 'secondText'
  | 'secondType'
  | 'secondButtonProps'
  | 'onSecondly'
  | 'okText'
  | 'okButtonProps'
  | 'confirmLoading'
  | 'onCancel'
  | 'onOk'
  | 'okType'
  | 'cancelText'
  | 'cancelType'
  | 'cancelButtonProps'
  | 'cancelButtonVisible'
  | 'footerExtraContent'
>;
function HlModalFooter(props: HlModalFooterProps) {
  const {
    ternary,
    onSecondly,
    secondText,
    secondType = 'secondary',
    secondButtonProps,
    onOk,
    okText,
    okType = 'primary',
    okButtonProps,
    confirmLoading,
    onCancel,
    cancelText,
    cancelType = 'secondary',
    cancelButtonProps,
    cancelButtonVisible,
    footerExtraContent,
  } = props;
  const locale = getConfirmLocale();
  const result: any[] = [];
  if (cancelButtonVisible) {
    result.push(
      <Button key="cancel" size='medium' type={cancelType} onClick={onCancel} {...cancelButtonProps}>
        {cancelText || locale.cancelText}
      </Button>,
    );
  }
  if (ternary) {
    result.push(
      <Button key="second" size='medium' type={secondType} onClick={onSecondly} {...secondButtonProps}>
        {secondText}
      </Button>,
    );
  }
  result.push(
    <Button key="ok" size='medium' type={okType} onClick={onOk} loading={confirmLoading} {...okButtonProps}>
      {okText || locale.okText}
    </Button>,
  );
  return (
    <div className="footer-inner">
      <div className="footer-extra">{footerExtraContent}</div>
      {result}
    </div>
  );
}

function HlModal(props: HlModalProps) {
  const {
    children,
    icon,
    ternary,
    scroll,
    layout,
    secondText,
    secondType,
    secondButtonProps,
    onSecondly,
    full,
    fixedCloseBtn = true,
    footerExtraContent,
    cancelButtonVisible = true,
  } = props;
  const {
    open,
    confirmLoading,
    title,
    closable,
    onOk,
    onCancel,
    afterClose,
    centered,
    width,
    footer,
    okText,
    okType,
    cancelText,
    maskClosable,
    forceRender,
    okButtonProps,
    cancelButtonProps,
    destroyOnClose,
    style,
    wrapClassName,
    maskTransitionName,
    transitionName,
    className,
    getContainer,
    zIndex,
    bodyStyle,
    maskStyle,
    mask,
    keyboard,
    wrapProps,
    prefixCls,
    closeIcon = <IconClose />,
    modalRender,
    focusTriggerAfterClose,
  } = props;
  let finalWidth = width;

  let finalClassName = className || '';
  let finalLayout = layout;
  let finalClosable = closable;
  let finalMaskClosable = maskClosable;
  let finalTitle = title;
  let finalCentered = centered;
  let finalFooter = footer;
  let finalDestroyOnClose = destroyOnClose;
  finalClassName += ' hlui-custom-modal';
  if (fixedCloseBtn) {
    finalClassName += ' modal-fixed-close-btn';
  }
  if (full) {
    finalClassName += ' full';
    finalWidth = '100%';
    finalLayout = 'filled';
  }
  if (ternary) {
    finalClassName += ' hlui-modal-ternary';
    finalTitle = '';
    finalClosable = closable || false;
    finalMaskClosable = closable || false;
    finalWidth = width || 400;
    finalCentered = centered === undefined ? true : centered;
  }
  finalWidth = finalWidth || 750;
  if (finalLayout === 'filled') {
    finalClassName += ' layout-filled';
    finalTitle = null;
    finalFooter = null;
  }

  if (scroll) {
    finalClassName += ' has-scroll-body';
    finalDestroyOnClose = true;
  }

  if (finalFooter === undefined) {
    finalFooter = (
      <HlModalFooter
        cancelButtonVisible={cancelButtonVisible}
        ternary={ternary}
        secondText={secondText}
        secondType={secondType}
        secondButtonProps={secondButtonProps}
        onSecondly={onSecondly}
        okText={okText}
        okType={okType}
        okButtonProps={okButtonProps}
        confirmLoading={confirmLoading}
        footerExtraContent={footerExtraContent}
        onCancel={onCancel}
        onOk={onOk}
      />
    );
  }
  return (
    <Modal
      open={open}
      confirmLoading={confirmLoading}
      onOk={onOk}
      onCancel={onCancel}
      afterClose={afterClose}
      cancelText={cancelText}
      forceRender={forceRender}
      okButtonProps={okButtonProps}
      cancelButtonProps={cancelButtonProps}
      style={style}
      maskTransitionName={maskTransitionName}
      transitionName={transitionName}
      getContainer={getContainer}
      zIndex={zIndex}
      bodyStyle={bodyStyle}
      maskStyle={maskStyle}
      mask={mask}
      keyboard={keyboard}
      wrapProps={wrapProps}
      prefixCls={prefixCls}
      closeIcon={closeIcon}
      modalRender={modalRender}
      focusTriggerAfterClose={focusTriggerAfterClose}
      wrapClassName={wrapClassName}
      width={finalWidth}
      className={finalClassName}
      destroyOnClose={finalDestroyOnClose}
      title={finalTitle}
      footer={finalFooter}
      closable={finalClosable}
      maskClosable={finalMaskClosable}
      centered={finalCentered}
    >
      <HlModalChildren title={title} icon={icon} ternary={ternary} scroll={scroll}>
        {children}
      </HlModalChildren>
    </Modal>
  );
}

HlModal.GAP_TOP = 24;
HlModal.GAP_BOTTOM = 48;
HlModal.GAP_SCROLL_BODY = 16;
HlModal.HEAD_HEIGHT = 77;
HlModal.FOOT_HEIDHT = 84;
HlModal.getMaxHeight = (head?: boolean, foot?: boolean, bodyScrollPadding?: boolean) => {
  const { height } = getWindowSize();
  let h = height - HlModal.GAP_TOP - HlModal.GAP_BOTTOM;
  if (head) h -= HlModal.HEAD_HEIGHT;
  if (foot) h -= HlModal.FOOT_HEIDHT;
  if (bodyScrollPadding) h -= HlModal.GAP_SCROLL_BODY;
  return h;
};

export default HlModal;
