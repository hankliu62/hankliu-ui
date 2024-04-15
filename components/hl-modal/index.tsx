import Modal, { destroyFns } from './Modal';
import type { ModalFuncProps } from './Modal';
import useModal from './useModal';
import confirm, {
  withWarn,
  withInfo,
  withSuccess,
  withError,
  withConfirm,
  withAlert,
  withDelete
} from './confirm';
import show from './showModal';

function infoFn(props: ModalFuncProps) {
  return confirm(withInfo(props));
}

function successFn(props: ModalFuncProps) {
  return confirm(withSuccess(props));
}

function errorFn(props: ModalFuncProps) {
  return confirm(withError(props));
}

function warningFn(props: ModalFuncProps) {
  return confirm(withWarn(props));
}

function confirmFn(props: ModalFuncProps) {
  return confirm(withConfirm(props));
}

function alertFn(props: ModalFuncProps) {
  return confirm(withAlert(props));
}

function deleteFn(props: ModalFuncProps) {
  return confirm(withDelete(props));
}

function destroyAllFn() {
  while (destroyFns.length) {
    const close = destroyFns.pop();
    if (close) {
      close();
    }
  }
}

const HlModal = Object.assign(Modal, {
  useModal,
  show,
  info: infoFn,
  success: successFn,
  error: errorFn,
  warning: warningFn,
  confirm: confirmFn,
  alert: alertFn,
  delete: deleteFn,
  destroyAll: destroyAllFn,
});
export default HlModal;
