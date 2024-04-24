// @ts-nocheck
import React, { Component } from 'react';
import dayjs from 'dayjs';
import PlayButton from './PlayButton';
import Progress from './Progress';
import VolumeButton from './VolumeButton';
import RateButton from './RateButton';
import DownloadButton from './DownloadButton';
import ErrorMask from './ErrorMask';
import Spin from '../hl-spin';
import isBrowser from '../_util/isBrowser';
import isiOS from '../_util/isiOS';

export interface AudioPlayerProps {
  source: string;
  width?: string;
  height?: string;
  autoplay?: boolean;
  loop?: boolean;
  download?: boolean;
  downloadUrl?: string;
  errorText?: string;
  loadingNode?: any;
  onError?: (e: any) => void;
}

export interface State {
  ready: boolean;
  paused: boolean;
  progressValue: string | number;
  error: boolean;
  muted: boolean;
  volume: number;
  playbackRate: number;
}

class AudioPlayer extends Component<AudioPlayerProps, State> {
  _timer: any = null;

  private audioRef: any = React.createRef();

  private progressRef: any;

  private progressTipRef: any;

  constructor(props: AudioPlayerProps) {
    super(props);
    this.state = {
      ready: false,
      paused: true,
      progressValue: '',
      error: false,
      muted: false,
      volume: 1,
      playbackRate: 1,
    };

    this.progressTipRef = React.createRef();
    this.progressRef = React.createRef();
  }

  componentDidMount() {
    // Firefox doesn't support canplaythrough listener
    if (isBrowser() && navigator.userAgent.indexOf('Firefox') > 0) {
      const audio = new Audio(this.props.source);
      audio.oncanplaythrough = this.ready;
    } else {
      this.audioRef.current.addEventListener('canplaythrough', this.ready);
    }
    this.initAudio();
    this.getProgressValue();
  }

  componentWillUnmount() {
    if (isBrowser() && navigator.userAgent.indexOf('Firefox') == -1) {
      this.audioRef.current.removeEventListener('canplaythrough', this.ready);
    }
    this.audioRef.current.removeEventListener('error', this.handleError);
    this._timer && clearInterval(this._timer);
    this.audioRef.current = null;
  }

  initAudio = () => {
    const { autoplay = false, loop = false } = this.props;
    this.audioRef.current.autoplay = autoplay;
    this.audioRef.current.loop = loop;

    if (autoplay) {
      this.play();
    }

    this.audioRef.current.addEventListener('error', this.handleError);
  };

  ready = () => {
    this.setState({ ready: true });
  };

  play = () => {
    this.audioRef.current.play();
    this.setState({ paused: false });

    this._timer = setInterval(() => {
      if (this.audioRef.current.ended) {
        this.setState({ progressValue: 0 });
        this.pause();
      } else {
        this.getProgressValue();
      }
    }, 300);

    return this.audioRef.current.play();
  };

  pause = () => {
    this.audioRef.current.pause();
    this.setState({ paused: true });
    this._timer && clearInterval(this._timer);
  };

  togglePlay = () => {
    const { paused } = this.audioRef.current;
    paused ? this.play() : this.pause();
  };

  toggleMuted = () => {
    const { muted } = this.state;
    this.setState({ muted: !muted });
    this.audioRef.current.muted = !muted;
  };

  setProgress = (e: any) => {
    const { value } = e.target;
    const { duration } = this.audioRef.current;
    const currentTime = value * duration;
    this.audioRef.current.currentTime = currentTime;
    this.setState({ progressValue: value });
  };

  setProgressTip = (e: any) => {
    const { pageX } = e;
    const { width, left } = this.progressRef.current.getBoundingClientRect();
    const p = (pageX - left) / width;
    const { duration } = this.audioRef.current;
    const str = dayjs(Math.floor(duration * p) * 1000).format('mm:ss');
    const { current } = this.progressTipRef;
    current.style.left = `${p * 100}%`;
    current.innerText = str;
  };

  getProgressValue = () => {
    const { currentTime, duration } = this.audioRef.current;
    this.setState({ progressValue: currentTime / duration || 0 });
  };

  setVolume = (value: number) => {
    this.setState({ volume: value / 100 });
    this.audioRef.current.volume = value / 100;
  };

  setPlaybackRate = (value: number) => {
    this.setState({ playbackRate: value });
    this.audioRef.current.playbackRate = value;
  };

  handleError = (e: any) => {
    this.ready();
    const { onError } = this.props;
    if (onError) onError(e);
    this.setState({ error: true });
  };

  render() {
    const { paused, muted, volume, playbackRate, progressValue, error } = this.state;
    const {
      width,
      height,
      source,
      download = true,
      downloadUrl,
      errorText,
      loadingNode,
    } = this.props;
    const customStyle = {
      width: width || '100%',
      height: height || '',
    };
    const loading = loadingNode || <Spin />;

    const showButtons = isiOS() ? true : this.state.ready;
    return (
      <div className="hlui-audio" style={customStyle}>
        <audio src={source} ref={this.audioRef} />
        {showButtons ? (
          <>
            <PlayButton paused={paused} onTogglePlay={this.togglePlay} />
            <div
              ref={this.progressRef}
              className="control-progress"
              onMouseMove={this.setProgressTip}
            >
              <Progress value={progressValue} progressChange={this.setProgress} />
              <div ref={this.progressTipRef} className="progress-tip" />
            </div>
            <VolumeButton
              muted={muted}
              volumeValue={volume}
              onToggleMuted={this.toggleMuted}
              onVolumeChange={this.setVolume}
            />
            <RateButton rateValue={playbackRate} onRateChange={this.setPlaybackRate} />
            {download && <DownloadButton source={downloadUrl || source} />}
            {error && <ErrorMask errorText={errorText} />}
          </>
        ) : (
          loading
        )}
      </div>
    );
  }
}

export default AudioPlayer;
