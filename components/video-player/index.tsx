// @ts-nocheck
import React, {
  CSSProperties,
  ForwardRefRenderFunction,
  useCallback,
  useEffect,
  useRef,
  useState,
  forwardRef,
  useImperativeHandle,
} from 'react';
import cs from 'classnames';
import debounce from 'lodash/debounce';

import ChaptersProgress, {
  ChaptersProgressHandles,
  PreviewFrameData,
  VideoChapterItem,
} from './ChaptersProgress';

import PlaybackRateTips from './PlaybackRateTips';
import VideoMainControl from './VideoMainControl';
import VolumeButton from './VolumeButton';
import PlayButton from './PlayButton';
import DownLoadVideo from './DownLoadVideo';
import ControlPlaybackRate from './ControlPlaybackRate';
import FullScreenButton from './FullScreenButton';
import VideoError from './VideoError';

import isiOS from '../_util/isiOS';
import isFullScreen from '../_util/isFullScreen';
import secondsToMMSS from '../_util/secondsToMMSS';
import isIE from '../_util/isIE';
import isSafari from '../_util/isSafari';

declare global {
  interface Document {
    mozFullScreenEnabled: any;
    msFullscreenEnabled: any;
    webkitSupportsFullscreen: any;
    webkitFullscreenEnabled: any;
    fullScreen: any;
    webkitIsFullScreen: any;
    mozFullScreen: any;
    msFullscreenElement: any;
    fullscreenElement: any;
    mozCancelFullScreen: any;
    webkitCancelFullScreen: any;
    msExitFullscreen: any;
  }
}

interface ComputeVideoSizeParams {
  containerWidth: number;
  containerHeight: number;
  videoOriginWidth: number;
  videoOriginHeight: number;
  fit?: string;
  filled: boolean;
}

function computeVideoSize({
  containerWidth,
  containerHeight,
  videoOriginWidth,
  videoOriginHeight,
  fit,
  filled,
}: ComputeVideoSizeParams) {
  let videoWidth;
  let videoHeight;
  const containerRatio = containerWidth / containerHeight;
  const videoRatio = videoOriginWidth / videoOriginHeight;
  if (containerWidth === videoOriginWidth && containerHeight === videoOriginHeight) {
    videoWidth = videoOriginWidth;
    videoHeight = videoOriginHeight;
  } else if (containerWidth < videoOriginWidth || containerWidth < videoOriginWidth) {
    if (containerRatio > videoRatio) {
      videoWidth = containerWidth;
      videoHeight = containerWidth / containerRatio;
    } else {
      videoWidth = containerWidth;
      videoHeight = (containerHeight * containerRatio) / videoRatio;
    }
  } else if (fit === 'flex' && !filled) {
    videoWidth = videoOriginWidth;
    videoHeight = videoOriginHeight;
  } else if (containerRatio > videoRatio) {
    videoWidth = (containerWidth * videoRatio) / containerRatio;
    videoHeight = containerHeight;
  } else {
    videoWidth = containerWidth;
    videoHeight = containerWidth / containerRatio;
  }
  return {
    videoWidth,
    videoHeight,
  };
}

let FC_EVENT_NAME = 'fullscreenchange';
if (isSafari()) {
  FC_EVENT_NAME = 'webkitfullscreenchange';
} else if (isIE()) {
  FC_EVENT_NAME = 'MSFullscreenChange';
}

type HTMLElementRequestFullscreen = HTMLElement['requestFullscreen'];
interface PolyfillHTMLElement extends HTMLDivElement {
  mozRequestFullScreen?: HTMLElementRequestFullscreen;
  webkitRequestFullScreen?: HTMLElementRequestFullscreen;
  msRequestFullscreen?: HTMLElementRequestFullscreen;
}

export interface VideoPlayerProps {
  source: string;
  poster?: string;
  autoplay?: boolean;
  loop?: boolean;
  muted?: boolean;
  ratio?: number;
  width?: string | number;
  height?: string | number;
  className?: string;
  fit?: string;
  layout?: string;
  filled?: boolean;
  download?: boolean;
  onEnded?: (e: React.SyntheticEvent<HTMLVideoElement>) => void;
  onError?: (e: React.SyntheticEvent<HTMLVideoElement>) => void;
  onTimeUpdate?: (time: number) => void;
  customToggleFS?: (isFullScreen: boolean) => void;
  videoChapterList?: VideoChapterItem[];
  previewFrameData?: PreviewFrameData;
}

interface VideoPlayerHandles {
  toggleFS: () => void;
  play: () => void;
  pause: () => void;
  setPlayerCurrentTime: (time: number) => void;
}
const VideoPlayer: ForwardRefRenderFunction<VideoPlayerHandles, ChaptersVideoPlayerProps> = (
  props,
  ref,
) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const videoSourceRef = useRef<HTMLSourceElement>(null);
  const wrapRef = useRef<PolyfillHTMLElement>(null);
  const chaptersProgressRef = useRef<ChaptersProgressHandles>(null);

  const [ready, setReady] = useState(false);
  const [videoMuted, setVideoMuted] = useState(false);
  const [videoVolume, setVideoVolume] = useState(0);
  const [paused, setPaused] = useState(true);
  const [currentTime, setCurrentTime] = useState(0);
  const [playbackRate, setPlaybackRate] = useState(1);
  const [duration, setDuration] = useState(0);
  const [isSeeking, setIsSeeking] = useState(false);
  const [filled, setFilled] = useState(false);
  const [error, setError] = useState(false);

  function handlePlay() {
    setPaused(false);
  }

  function handlePause() {
    setPaused(true);
  }

  const setPlayerCurrentTime = useCallback((time: number) => {
    const videoEl = videoRef.current;
    setCurrentTime(time);
    if (videoEl) {
      videoEl.currentTime = time;
    }
  }, []);

  const setPlayerCurrentTimeByVideoProgress = useCallback(
    (videoProgress: number) => {
      const time = duration * videoProgress;
      setPlayerCurrentTime(time);
    },
    [duration],
  );

  const handleFC = useCallback(() => {
    setFilled(isFullScreen());
  }, []);

  function handleTimeUpdate(e: React.SyntheticEvent<HTMLVideoElement>) {
    const { currentTime: time } = e.currentTarget;
    const { onTimeUpdate } = props;
    setCurrentTime(time);
    if (onTimeUpdate) {
      onTimeUpdate(time);
    }
  }

  function handleEnd(e: React.SyntheticEvent<HTMLVideoElement>) {
    const { onEnded } = props;
    if (onEnded) onEnded(e);
  }

  function handleError(e: React.SyntheticEvent<HTMLVideoElement>) {
    const { onError } = props;
    if (onError) onError(e);
    setError(true);
  }

  function handleCanPlay(e: React.SyntheticEvent<HTMLVideoElement>) {
    setError(false);
    setReady(true);
    setDuration(e.currentTarget.duration);
    setPlaybackRate(e.currentTarget.playbackRate);
  }

  function handleRateChange(e: React.SyntheticEvent<HTMLVideoElement>) {
    setPlaybackRate(e.currentTarget.playbackRate);
  }

  function setPlayerVolume(value: number) {
    const videoEl = videoRef.current;
    if (videoEl) {
      videoEl.volume = value / 100;
      setVideoVolume(videoEl.volume);
    }
  }

  function setVideoPlaybackRate(value: number) {
    const videoEl = videoRef.current;
    if (videoEl) {
      videoEl.playbackRate = value;
    }
  }

  function play() {
    const videoEl = videoRef.current;
    if (videoEl) {
      videoEl.play();
      setPaused(false);
    }
  }

  function pause() {
    const videoEl = videoRef.current;
    if (videoEl) {
      videoEl.pause();
      setPaused(true);
    }
  }

  function togglePlay() {
    const videoEl = videoRef.current;
    if (videoEl) {
      const { paused: videoElPaused } = videoEl;
      if (videoElPaused) {
        videoEl.play();
      } else {
        videoEl.pause();
      }
    }
  }

  function toggleMuted() {
    const videoEl = videoRef.current;
    if (videoEl) {
      const { muted } = videoEl;
      videoEl.muted = !muted;
      setVideoMuted(videoEl.muted);
    }
  }

  function toggleFS() {
    const wrapEl = wrapRef.current;
    if (!wrapEl) {
      return;
    }
    const isFS = isFullScreen();
    const { customToggleFS } = props;
    if (customToggleFS) {
      customToggleFS(isFS);
      return;
    }

    if (isFS) {
      if (document.exitFullscreen) document.exitFullscreen();
      else if (document.mozCancelFullScreen) document.mozCancelFullScreen();
      else if (document.webkitCancelFullScreen) document.webkitCancelFullScreen();
      else if (document.msExitFullscreen) document.msExitFullscreen();
      // @ts-ignore
      else if (videoRef.current.webkitExitFullscreen) videoRef.current.webkitExitFullscreen();
    } else {
      // eslint-disable-next-line no-lonely-if
      if (wrapEl.requestFullscreen) wrapEl.requestFullscreen();
      else if (wrapEl.mozRequestFullScreen) {
        wrapEl.mozRequestFullScreen();
      } else if (wrapEl.webkitRequestFullScreen) {
        wrapEl.webkitRequestFullScreen();
      } else if (wrapEl.msRequestFullscreen) {
        wrapEl.msRequestFullscreen();
        // @ts-ignore
      } else if (videoRef.current.webkitEnterFullScreen) {
        // @ts-ignore
        videoRef.current.webkitEnterFullScreen();
      }
    }
  }

  const setVideoStyle = useCallback(() => {
    const wrapEl = wrapRef.current;
    const videoEl = videoRef.current;
    if (!wrapEl || !videoEl) {
      return;
    }
    const { fit, height } = props;
    const { width: containerWidth, height: containerHeight } = wrapEl.getBoundingClientRect();
    const { videoWidth: videoOriginWidth, videoHeight: videoOriginHeight } = videoEl;
    let currentVideoWidth;
    let currentVideoHeight;

    if (height === 'auto') {
      currentVideoWidth = containerWidth;
      currentVideoHeight = containerWidth / (videoOriginWidth / videoOriginHeight);
    } else {
      const { videoHeight, videoWidth } = computeVideoSize({
        containerHeight,
        containerWidth,
        videoOriginWidth,
        videoOriginHeight,
        fit,
        filled,
      });
      currentVideoWidth = videoWidth;
      currentVideoHeight = videoHeight;
    }
    videoEl.style.width = `${currentVideoWidth}px`;
    videoEl.style.height = `${currentVideoHeight}px`;
    if (chaptersProgressRef.current) {
      chaptersProgressRef.current.handleResize();
    }
  }, [ready]);

  const debounceSetVideoStyle = useCallback(debounce(setVideoStyle, 30), []);

  useEffect(() => {
    document.addEventListener(FC_EVENT_NAME, handleFC, false);
    const videoEl = videoRef.current;

    if (videoEl) {
      setVideoVolume(videoEl.volume);
      if (isiOS()) {
        videoEl.load();
      }
    }
    window.addEventListener('resize', debounceSetVideoStyle);
    return () => {
      document.removeEventListener(FC_EVENT_NAME, handleFC, false);
      window.removeEventListener('resize', debounceSetVideoStyle);
    };
  }, []);
  useEffect(() => {
    if (ready) {
      setVideoStyle();
    }
  });

  useImperativeHandle(
    ref,
    () => ({
      toggleFS,
      play,
      pause,
      setPlayerCurrentTime,
    }),
    [],
  );
  const {
    width,
    height,
    className,
    source,
    poster,
    ratio = 16 / 9,
    autoplay = false,
    loop = false,
    muted = false,
    videoChapterList,
    previewFrameData,
    download,
  } = props;
  const wrapStyle: CSSProperties = { width };
  if (height) {
    wrapStyle.height = height;
  } else {
    wrapStyle.height = 0;
    wrapStyle.paddingTop = `${(1 / ratio) * 100}%`;
  }
  if (filled) {
    wrapStyle.paddingTop = 0;
    wrapStyle.width = '100%';
    wrapStyle.height = '100%';
  }

  const videoEl = videoRef.current;
  const wrapEl = wrapRef.current;
  return (
    <div
      ref={wrapRef}
      style={wrapStyle}
      className={cs('hlui-chapters-video-wrap', className, {
        'hlui-chapters-video-height-auto': height === 'auto',
      })}
    >
      {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
      <video
        className="hlui-chapters-video-el"
        ref={videoRef}
        playsInline
        crossOrigin="anonymous"
        webkit-playsinline="true"
        x5-video-player-type="h5-page"
        autoPlay={autoplay}
        loop={loop}
        muted={muted}
        poster={poster}
        src={source}
        onCanPlay={handleCanPlay}
        onTimeUpdate={handleTimeUpdate}
        onEnded={handleEnd}
        onError={handleError}
        onPlay={handlePlay}
        onPause={handlePause}
        onRateChange={handleRateChange}
      >
        <source src={source} type="video/mp4" />
      </video>
      {poster ? (
        <img
          alt="video-poster"
          src={poster}
          className={`hlui-chapters-video-poster ${
            videoEl && videoEl.paused && videoEl.currentTime === 0
              ? 'hlui-chapters-video-poster-active'
              : ''
          }`}
        />
      ) : null}
      {error ? <VideoError /> : null}
      {ready ? (
        <>
          <VideoMainControl togglePlay={togglePlay} show={paused && !isSeeking && ready} />
          <div className="hlui-chapters-video-control-bar">
            <ChaptersProgress
              ref={chaptersProgressRef}
              previewFrameData={previewFrameData}
              onSeek={setPlayerCurrentTimeByVideoProgress}
              currentTime={currentTime}
              duration={duration}
              videoChapterList={videoChapterList}
              onSeeking={setIsSeeking}
            />
            {videoEl && (
              <div className="hlui-chapters-video-controls">
                <div className="hlui-chapters-video-play-btn-wrap">
                  <PlayButton paused={paused} onTogglePlay={togglePlay} />
                  <span>{`${secondsToMMSS(currentTime)}/${secondsToMMSS(duration)}`}</span>
                </div>
                <div className="hlui-chapters-video-controls-btn-group">
                  <VolumeButton
                    volume={videoVolume}
                    onVolumeChange={setPlayerVolume}
                    getPopupContainer={() => wrapEl!}
                    muted={videoMuted}
                    onToggleMuted={toggleMuted}
                  />
                  <ControlPlaybackRate
                    playbackRate={playbackRate}
                    onChange={setVideoPlaybackRate}
                    getPopupContainer={() => wrapEl!}
                  />
                  {download && <DownLoadVideo source={source} />}
                  <FullScreenButton onToggleFullScreen={toggleFS} />
                </div>
              </div>
            )}
          </div>
        </>
      ) : null}
      <PlaybackRateTips playbackRate={playbackRate} />
    </div>
  );
};

export default forwardRef(VideoPlayer);
