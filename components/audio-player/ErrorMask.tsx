import React from 'react';
import { getLocale } from './locale';
import IconRemind from '@hankliu/icons/CloseCircleOutlined';

export interface ErrorMaskProps {
  errorText?: string;
}

class ErrorMask extends React.Component<ErrorMaskProps, any> {
  render() {
    const locale = getLocale();
    const { errorText = locale.error } = this.props;

    return (
      <div className="hlui-audio-error">
        <IconRemind className="error-icon" />
        <div className="error-text">{errorText}</div>
      </div>
    );
  }
}

export default ErrorMask;
