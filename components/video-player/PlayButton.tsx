import React from 'react';
import IconPlay from '@ant-design/icons/lib/icons/PlaySquareOutlined';
import IconSuspend from '@ant-design/icons/lib/icons/PauseOutlined';

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

export default React.memo(PlayButton)
