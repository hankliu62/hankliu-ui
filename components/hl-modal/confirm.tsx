import React from 'react';

import confirm from 'antd4x/lib/modal/confirm';
import type { ModalFuncProps } from 'antd4x/lib/modal';
import DeleteOutlined from '@ant-design/icons/DeleteOutlined';
import ErrorSvg from './icon/error';
import InfoSvg from './icon/info';
import SuccessSvg from './icon/success';
import WarningSvg from './icon/warning';

export { ModalStaticFunctions } from 'antd4x/lib/modal/confirm';

export function withWarn(props: ModalFuncProps): ModalFuncProps {
  return {
    centered: true,
    icon: <WarningSvg />,
    okCancel: false,
    ...props,
    type: 'warning',
  };
}

export function withInfo(props: ModalFuncProps): ModalFuncProps {
  return {
    centered: true,
    icon: <InfoSvg />,
    okCancel: false,
    ...props,
    type: 'info',
  };
}

export function withSuccess(props: ModalFuncProps): ModalFuncProps {
  return {
    centered: true,
    icon: <SuccessSvg />,
    okCancel: false,
    ...props,
    type: 'success',
  };
}

export function withError(props: ModalFuncProps): ModalFuncProps {
  return {
    centered: true,
    icon: <ErrorSvg />,
    okCancel: false,
    ...props,
    type: 'error',
  };
}

export function withDelete(props: ModalFuncProps): ModalFuncProps {
  return {
    centered: true,
    icon: <DeleteOutlined style={{color: 'var(--color-danger)'}} />,
    okCancel: true,
    okButtonProps: {
      danger: true,
    },
    ...props,
    type: 'confirm',
  };
}

export function withConfirm(props: ModalFuncProps): ModalFuncProps {
  return {
    centered: true,
    icon: <WarningSvg />,
    okCancel: true,
    ...props,
    type: 'confirm',
  };
}
export function withAlert(props: ModalFuncProps): ModalFuncProps {
  return {
    centered: true,
    icon: null,
    okCancel: false,
    ...props,
    type: 'confirm',
  };
}

export default confirm;
