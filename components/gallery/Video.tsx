import * as React from 'react';
import VideoPlayer, { VideoPlayerProps } from '../video-player';

const Video = ({ src }: { src: VideoPlayerProps['source'] }) => {
  return <VideoPlayer width="100%" height="100%" fit="flex" source={src} />;
};

export default Video;
