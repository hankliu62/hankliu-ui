import React from 'react';
import IconPlay from '@hankliu/icons/lib/icons/IconPlay';
import IconSuspend from '@hankliu/icons/lib/icons/IconSuspend';

interface PlayButtonProps {
  paused: boolean;
  onTogglePlay: React.MouseEventHandler<HTMLSpanElement>;
}
function PlayButton({ paused, onTogglePlay }: PlayButtonProps) {
  return (
    <div className="hlui-chapters-video-control-btn">
      {paused ? (
        <IconPlay onClick={onTogglePlay} className="hlui-chapters-video-icon" />
      ) : (
        <IconSuspend onClick={onTogglePlay} className="hlui-chapters-video-icon" />
      )}
    </div>
  );
}

export default React.memo(PlayButton);
