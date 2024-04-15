// @ts-nocheck
import React from 'react';
import Button from '../button';
import LocaleReceiver from '../locale-provider/LocaleReceiver';
import Popover from '../popover';
import type { ColorPickerProps } from './interfaces';
import Panel from './Panel';

export interface ColorPickerPopoverProps extends ColorPickerProps {
  open: boolean;
  placement?:
    | 'top'
    | 'left'
    | 'right'
    | 'bottom'
    | 'topLeft'
    | 'topRight'
    | 'bottomLeft'
    | 'bottomRight'
    | 'leftTop'
    | 'leftBottom'
    | 'rightTop'
    | 'rightBottom';
  children: React.ReactNode;
  footer?: React.ReactNode;
  onCancel?: () => void;
  onOk?: () => void;
  cancelText?: string;
  okText?: string;
}

function ColorPickerPopover(props: ColorPickerPopoverProps) {
  const {
    children,
    placement,
    open,
    onCancel,
    cancelText,
    onOk,
    okText,
    footer = true,
    ...rest
  } = props;

  const renderFooterInner = (locale: any) => (
      <div className="hlui-popover-foot">
        <Button key="cancel" ghost="solid" type="neutral" width={80} onClick={onCancel}>
          {cancelText || locale.cancelText}
        </Button>
        <Button key="ok" width={80} onClick={onOk}>
          {okText || locale.okText}
        </Button>
      </div>
    );

  const renderFooter = () => {
    if (footer !== true) {
      return footer;
    }
    return <LocaleReceiver componentName="Modal">{renderFooterInner}</LocaleReceiver>;
  };

  const renderContent = (props: ColorPickerProps) => {
    const { width, ...rest } = props;
    return (
      <div className="hlui-color-picker-popover">
        <Panel {...rest} />
        {renderFooter()}
      </div>
    );
  };

  return (
    <Popover
      open={open}
      trigger="click"
      onOpenChange={(newVisible: boolean) => {
        if (!newVisible && onCancel) onCancel();
      }}
      placement={placement}
      content={renderContent(rest)}
    >
      {children}
    </Popover>
  );
}

ColorPickerPopover.defaultProps = {
  footer: true,
};

export default ColorPickerPopover;
