import React, { useMemo } from 'react';
import IconVideoFullscreen from '@hankliu/icons/lib/icons/FullscreenOutlined';
import IconVideoNarrow from '@hankliu/icons/lib/icons/NodeExpandOutlined';

import isFullScreen from '../_util/isFullScreen';
import isFullScreenEnabled from '../_util/isFullScreenEnabled';

interface FullScreenButtonProps {
  onToggleFullScreen: () => void;
}
function FullScreenButton({ onToggleFullScreen }: FullScreenButtonProps) {
  const isSupportFullScreen = useMemo(isFullScreenEnabled, []);
  if (!isSupportFullScreen) {
    return null;
  }
  return (
    <div onClick={onToggleFullScreen} className="hlui-chapters-video-control-btn">
      {isFullScreen() ? (
        <IconVideoNarrow className="hlui-chapters-video-icon" />
      ) : (
        <IconVideoFullscreen className="hlui-chapters-video-icon" />
      )}
    </div>
  );
}

export default React.memo(FullScreenButton);
