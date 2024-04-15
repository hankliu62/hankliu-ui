import React from 'react';
import IconMute from '@ant-design/icons/MutedOutlined';
import IconSound from '@ant-design/icons/SoundOutlined';
import Slider from '../slider';
import Dropdown from '../dropdown';

export interface VolumeButtonProps {
  muted: boolean;
  volumeValue: number;
  onVolumeChange: (value: any) => void;
  onToggleMuted: (e: any) => void;
}

export interface State {
  volumeSliderVisible: boolean,
}

class VolumeButton extends React.Component<VolumeButtonProps, State> {

  state = {
    volumeSliderVisible: false,
  }

  setVolume = (value: any) => {
    this.props.onVolumeChange(value);
  }

  toggleMuted = (e: any) => {
    const { onToggleMuted } = this.props;
    onToggleMuted(e);
  }

  handleVisibleChange = (open: boolean) => {
    this.setState({ volumeSliderVisible: open })
  }

  render() {
    const { muted, volumeValue } = this.props;
    const value = Math.round(muted ? 0 : volumeValue * 100)

    const overlay = (
      <div className="hlui-audio-sound-slider">
        <div className="sound-value">{value}</div>
        <div className="slider-inner">
          <Slider
            vertical
            tooltipVisible={false}
            disabled={muted}
            value={value}
            onChange={this.setVolume}
          />
        </div>
      </div>
    )

    return (
      <Dropdown overlay={overlay} placement="top"
        onOpenChange={this.handleVisibleChange} open={this.state.volumeSliderVisible}>
        <div className="control-btn" onClick={this.toggleMuted}>
          {muted?<IconMute />: <IconSound/>}
        </div>
      </Dropdown>
    );
  }
}

export default VolumeButton;
