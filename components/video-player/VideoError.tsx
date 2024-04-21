import React from 'react';
import IconRemind from '@hankliu/icons/lib/icons/WarningOutlined';
import { getLocale } from './locale';

function VideoError() {
  const locale = getLocale();
  return (
    <div className="hlui-chapters-video-error">
      <IconRemind className="hlui-chapters-video-error-icon" />
      <div className="hlui-chapters-video-error-text">{locale.error}</div>
    </div>
  );
}

export default React.memo(VideoError);
