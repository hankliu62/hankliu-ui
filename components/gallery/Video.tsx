import * as React from 'react';
import VideoPlayer from '../video-player';

export default class Video extends React.Component<any, any> {
  state: any = { loading: true };

  render() {
    const { src } = this.props;
    return (
      <VideoPlayer width="100%" height="100%" fit="flex" source={src} />
    );
  }
}
