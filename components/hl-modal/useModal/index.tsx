import * as React from 'react';
import HookModal, { HookModalRef } from 'antd4x/lib/modal/useModal/HookModal';
import usePatchElement from 'antd4x/lib/_util/hooks/usePatchElement';
import type { ModalFuncProps } from 'antd4x/lib/modal';
import { withConfirm, withInfo, withSuccess, withError, withWarn } from '../confirm';

let uuid = 0;

interface ElementsHolderRef {
  patchElement: ReturnType<typeof usePatchElement>[1];
}
type WithFunc = (config: ModalFuncProps) => ModalFuncProps;
const ElementsHolder = React.memo(
  React.forwardRef<ElementsHolderRef>((_props, ref) => {
    const [elements, patchElement] = usePatchElement();
    React.useImperativeHandle(
      ref,
      () => ({
        patchElement,
      }),
      [],
    );
    // eslint-disable-next-line react/jsx-no-useless-fragment
    return <>{elements}</>;
  }),
);

export default function useModal() {
  const holderRef = React.useRef<ElementsHolderRef>(null as any);

  // ========================== Effect ==========================
  const [actionQueue, setActionQueue] = React.useState<(() => void)[]>([]);

  React.useEffect(() => {
    if (actionQueue.length) {
      const cloneQueue = [...actionQueue];
      cloneQueue.forEach((action) => {
        action();
      });

      setActionQueue([]);
    }
  }, [actionQueue]);

  // =========================== Hook ===========================
  const getConfirmFunc = React.useCallback(
    (withFunc: WithFunc) =>
      function hookConfirm(config: ModalFuncProps) {
        uuid += 1;

        const modalRef = React.createRef<HookModalRef>();

        let closeFunc: Function;
        const modal = (
          <HookModal
            key={`hlui-modal-${uuid}`}
            config={withFunc(config)}
            ref={modalRef}
            afterClose={() => {
              closeFunc();
            }}
          />
        );

        closeFunc = holderRef.current?.patchElement(modal);

        return {
          destroy: () => {
            function destroyAction() {
              modalRef.current?.destroy();
            }

            if (modalRef.current) {
              destroyAction();
            } else {
              setActionQueue((prev) => [...prev, destroyAction]);
            }
          },
          update: (newConfig: ModalFuncProps) => {
            function updateAction() {
              modalRef.current?.update(newConfig);
            }

            if (modalRef.current) {
              updateAction();
            } else {
              setActionQueue((prev) => [...prev, updateAction]);
            }
          },
        };
      },
    [],
  );

  const fns = React.useMemo(
    () => ({
      info: getConfirmFunc(withInfo),
      success: getConfirmFunc(withSuccess),
      error: getConfirmFunc(withError),
      warning: getConfirmFunc(withWarn),
      confirm: getConfirmFunc(withConfirm),
    }),
    [],
  );

  return [fns, <ElementsHolder ref={holderRef} />];
}
