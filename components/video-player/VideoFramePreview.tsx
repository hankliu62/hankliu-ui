import React, { useEffect, useRef } from 'react';
import cs from 'classnames';
import secondsToMMSS from '../_util/secondsToMMSS';
import { PreviewFrameData } from './ChaptersProgress';

class CacheImages {
  cacheImageList: HTMLImageElement[];

  cacheImageUrlList: string[];

  constructor() {
    this.cacheImageList = [];
    this.cacheImageUrlList = [];
  }

  cache(url: string) {
    if (this.cacheImageUrlList.indexOf(url) === -1) {
      this.cacheImageUrlList.push(url);
      const image = new Image();
      image.src = url;
      this.cacheImageList.push(image);
    }
  }
}

interface VideoFramePreviewProps extends PreviewFrameData {
  previewPositionProgress: number;
  rect: DOMRect;
  previewProgress: number;
  duration: number;
  show: boolean;
}
function VideoFramePreview({
  previewPositionProgress,
  rect,
  previewProgress,
  duration,
  show,
  horizontalPreviewFrameCount,
  verticalPreviewFrameCount,
  previewFrameWidth,
  previewFrameHeight,
  previewFrameGroup,
}: VideoFramePreviewProps) {
  const cacheImagesRef = useRef<CacheImages>();
  useEffect(() => {
    cacheImagesRef.current = new CacheImages();
  }, []);

  const imageFrameCount = horizontalPreviewFrameCount * verticalPreviewFrameCount;
  const left = previewPositionProgress * rect.width;
  let previewLeft = left - previewFrameWidth / 2;
  if (previewLeft < 0) {
    previewLeft = 0;
  }
  if (previewLeft > rect.width - previewFrameWidth) {
    previewLeft = rect.width - previewFrameWidth;
  }
  const previewStyle = {
    left: `${previewLeft}px`,
  };
  const currentPreviewTime = previewProgress * duration;
  const frameStyle: any = {
    width: previewFrameWidth,
    height: previewFrameHeight,
    backgroundSize: `${horizontalPreviewFrameCount * previewFrameWidth}px ${
      verticalPreviewFrameCount * previewFrameHeight
    }px`,
  };
  for (let i = 0; i < previewFrameGroup.length; i++) {
    const item = previewFrameGroup[i];
    if (currentPreviewTime >= item.startTime && currentPreviewTime <= item.endTime) {
      const cacheImages = cacheImagesRef.current;
      cacheImages?.cache(item.url);
      frameStyle.backgroundImage = `url(${item.url})`;
      const frameTotalTime = item.endTime - item.startTime; // 视频缩略帧集的总时间
      const interval = frameTotalTime / (imageFrameCount - 1); // 帧间隔时间
      const currentFrame = Math.floor((currentPreviewTime - item.startTime) / interval) + 1; // 当前是第几帧
      let frameXPosition = currentFrame % horizontalPreviewFrameCount;
      frameXPosition = frameXPosition === 0 ? horizontalPreviewFrameCount : frameXPosition;
      frameStyle.backgroundPositionX = -(frameXPosition - 1) * previewFrameWidth;
      frameStyle.backgroundPositionY =
        -(Math.ceil(currentFrame / horizontalPreviewFrameCount) - 1) * previewFrameHeight;
      break;
    }
  }
  return (
    <div
      className={cs('hlui-chapters-preview', { 'hlui-chapters-preview-hide': !show })}
      style={previewStyle}
    >
      <div className="hlui-chapters-progress-frame" style={frameStyle} />
      <div className="hlui-chapters-progress-time">
        <span className="hlui-chapters-progress-time-text">
          {secondsToMMSS(previewProgress * duration)}
        </span>
      </div>
    </div>
  );
}

export default React.memo(VideoFramePreview);
