// @ts-nocheck
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import destroyFns from 'antd4x/lib/modal/destroyFns';
import type { HlModalProps } from './Modal';
import HlModal from './Modal';

type ConfigUpdate = HlModalProps | ((prevConfig: HlModalProps) => HlModalProps);

type ShowHlModalProps = HlModalProps & {content?: React.ReactNode}
export default function show(config: ShowHlModalProps) {
  const container = document.createDocumentFragment();
  let currentConfig: HlModalProps;

  function render({
    closable = false, open = true, footer, children, content, ...props
  }: ShowHlModalProps) {
    let finalFooter: HlModalProps['footer'];
    // 兼容以前的问题：Modal.show 默认不显示 footer
    if (props.ternary) {
      finalFooter = footer;
    } else {
      finalFooter = footer === undefined ? null : footer;
    }
    /**
     * https://github.com/ant-design/ant-design/issues/23623
     *
     * Sync render blocks React event. Let's make this async.
     */
    setTimeout(() => {
      ReactDOM.render(
        <HlModal
          closable={closable}
          open={open}
          footer={finalFooter}
          {...props}
        >
          {content || children}
        </HlModal>,
        container,
      );
    });
  }

  function innerOnCancel(...args: any[]) {
    currentConfig = {
      ...currentConfig,
      open: false,
      afterClose: () => {
        if (typeof config.afterClose === 'function') {
          config.afterClose();
        }
        destroy.apply(this, args);
      },
    };
    render(currentConfig);
  }

  function destroy(...args: any[]) {
    ReactDOM.unmountComponentAtNode(container);
    const triggerCancel = args.some((param) => param && param.triggerCancel);
    if (config.onCancel && triggerCancel) {
      config.onCancel(...args);
    }
    for (let i = 0; i < destroyFns.length; i++) {
      const fn = destroyFns[i];
      // eslint-disable-next-line @typescript-eslint/no-use-before-define
      if (fn === innerOnCancel) {
        destroyFns.splice(i, 1);
        break;
      }
    }
  }

  function update(configUpdate: ConfigUpdate) {
    if (typeof configUpdate === 'function') {
      currentConfig = configUpdate(currentConfig);
    } else {
      currentConfig = {
        ...currentConfig,
        ...configUpdate,
      };
    }
    render(currentConfig);
  }

  currentConfig = { ...config, onCancel: innerOnCancel, open: true };

  render(currentConfig);

  destroyFns.push(innerOnCancel);

  return {
    destroy: innerOnCancel,
    update,
  };
}
