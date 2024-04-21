import React from 'react';
import IconVideoPlay from '@hankliu/icons/lib/icons/PlayCircleOutlined';

interface VideoMainControlProps {
  togglePlay: React.MouseEventHandler<HTMLDivElement>;
  show: boolean;
}
function VideoMainControl({ togglePlay, show }: VideoMainControlProps) {
  return (
    <div
      onClick={togglePlay}
      className={`hlui-chapters-video-main-control ${
        show ? '' : 'hlui-chapters-video-main-control-hide'
      }`}
    >
      <IconVideoPlay className="hlui-chapters-video-play-icon" />
    </div>
  );
}
export default React.memo(VideoMainControl);
