import React from 'react';

interface PlaybackRateTipsProps {
  playbackRate: number;
}
function PlaybackRateTips({ playbackRate }: PlaybackRateTipsProps) {
  const isShowBackProgress = playbackRate !== 1;
  if (!isShowBackProgress || !playbackRate) {
    return null;
  }
  return <div className="hlui-chapters-video-tip-pr">{`${playbackRate.toFixed(1)} x`}</div>;
}

export default PlaybackRateTips
