import React from 'react';
import IconVideoPlay from '@hankliu/icons/PlaySquareOutlined';
import IconSuspend from '@hankliu/icons/PauseOutlined';

export interface PlayButtonProps {
  paused: boolean;
  onTogglePlay: (e: any) => void;
}

class PlayButton extends React.Component<PlayButtonProps, any> {
  togglePlay = (e: any) => {
    const { onTogglePlay } = this.props;
    onTogglePlay && onTogglePlay(e);
  };

  render() {
    const { paused } = this.props;

    return (
      <div onClick={this.togglePlay} className="control-btn">
        {paused ? <IconVideoPlay /> : <IconSuspend />}
      </div>
    );
  }
}

export default PlayButton;
