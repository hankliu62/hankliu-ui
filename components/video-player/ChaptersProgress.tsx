import React, {
  useState,
  useRef,
  useEffect,
  useCallback,
  useMemo,
  useImperativeHandle,
  ForwardRefRenderFunction,
  forwardRef,
} from 'react';
import cs from 'classnames';
import notAllowDragProps from './notAllowDragProps';
import VideoFramePreview from './VideoFramePreview';

interface ChaptersProgressItemState {
  enableSlideIndicator: boolean;
  seeking: boolean;
  hover: boolean;
}

const CHAPTER_BAR_SPACING = 2;
const SNAP_THRESHOLD = 10;

function getFixed2Number(val: number) {
  return Number.parseFloat(val.toFixed(2));
}

function isChapterItemActive(index: number, previewCurrentTime: number, item: VideoChapterItem) {
  const { startTime, endTime } = item;
  return (
    (index === 0
      ? getFixed2Number(previewCurrentTime) >= getFixed2Number(startTime)
      : getFixed2Number(previewCurrentTime) > getFixed2Number(startTime)) &&
    getFixed2Number(previewCurrentTime) <= getFixed2Number(endTime)
  );
}

function getWidthIndexByIndicatorOffset(indicatorOffset: number, chaptersWidthList: number[]) {
  let start = 0;
  let end = 0;
  for (let i = 0; i < chaptersWidthList.length; i++) {
    const needSpacing = i !== chaptersWidthList.length - 1;
    const width = chaptersWidthList[i] + (needSpacing ? CHAPTER_BAR_SPACING : 0);
    end += width;
    if (indicatorOffset >= start && indicatorOffset <= end) {
      return {
        index: i,
        chapterRangeOffset: indicatorOffset - start,
      };
    }
    start += width;
  }
  return {
    index: -1,
    chapterRangeOffset: 0,
  };
}

// 通过视频进度获取进度指示器位置进度
function getIndicatorProgressByVideoProgress(
  videoProgress: number,
  indicatorContainerWidth: number,
  chaptersWidthList: number[],
) {
  const availableWidth =
    indicatorContainerWidth - (chaptersWidthList.length - 1) * CHAPTER_BAR_SPACING;
  const videoOffset = availableWidth * videoProgress;
  let compareWidth = 0;
  let passSpacing = 0;
  for (let i = 0; i < chaptersWidthList.length - 1; i++) {
    compareWidth += chaptersWidthList[i];
    if (videoOffset > compareWidth) {
      passSpacing++;
    }
  }
  return (videoOffset + passSpacing * CHAPTER_BAR_SPACING) / indicatorContainerWidth;
}

interface ProgressGroup {
  currentVideoProgress: number;
  currentIndicatorProgress: number;
}

// 通过指示器位置偏移获取视频进度和指示器显示进度
function getProgressGroupByIndicatorOffset(
  indicatorOffset: number,
  indicatorContainerWidth: number,
  chaptersWidthList: number[],
): ProgressGroup {
  const availableWidth =
    indicatorContainerWidth - (chaptersWidthList.length - 1) * CHAPTER_BAR_SPACING;
  let compareChapterWidth = 0;
  let passSpacing = 0;
  let currentIndicatorProgress;
  let currentVideoProgress;
  let passedChapterWidth = 0;
  for (let i = 0; i < chaptersWidthList.length; i++) {
    compareChapterWidth += chaptersWidthList[i];
    passedChapterWidth += chaptersWidthList[i];
    if (
      indicatorOffset >= compareChapterWidth &&
      indicatorOffset <= compareChapterWidth + CHAPTER_BAR_SPACING
    ) {
      currentVideoProgress = passedChapterWidth / availableWidth;
      currentIndicatorProgress = compareChapterWidth / indicatorContainerWidth;
      break;
    } else {
      compareChapterWidth += CHAPTER_BAR_SPACING;
    }
    if (indicatorOffset > compareChapterWidth) {
      passSpacing++;
    }
  }
  if (!currentIndicatorProgress) {
    currentIndicatorProgress = indicatorOffset / indicatorContainerWidth;
  }

  if (currentIndicatorProgress > 1) {
    currentIndicatorProgress = 1;
  } else if (currentIndicatorProgress < 0) {
    currentIndicatorProgress = 0;
  }

  if (!currentVideoProgress) {
    currentVideoProgress = (indicatorOffset - passSpacing * CHAPTER_BAR_SPACING) / availableWidth;
  }
  if (currentVideoProgress > 1) {
    currentVideoProgress = 1;
  } else if (currentVideoProgress < 0) {
    currentVideoProgress = 0;
  }
  return {
    currentVideoProgress,
    currentIndicatorProgress,
  };
}

const defaultRect: DOMRect = {
  width: 0,
  height: 0,
  x: 0,
  y: 0,
  bottom: 0,
  left: 0,
  right: 0,
  top: 0,
  toJSON() {},
};

interface ChaptersProgressItemProps {
  currentTime: number;
  width: string;
  start: number;
  end: number;
  active: boolean;
}
function ChaptersProgressItem({
  width,
  start,
  end,
  currentTime,
  active,
}: ChaptersProgressItemProps) {
  const progress = useMemo(() => {
    if (currentTime >= start && currentTime <= end) {
      return (currentTime - start) / (end - start);
    }
    if (currentTime < start) {
      return 0;
    }
    if (currentTime > end) {
      return 1;
    }
    return -1;
  }, [currentTime, start, end]);

  const itemRef = useRef<HTMLDivElement>(null);

  const excludeStyle = {
    width: `${progress * 100}%`,
  };

  return (
    <div
      className={cs('hlui-chapters-progress-item-wrap', {
        'hlui-chapters-progress-item-wrap-active': active,
      })}
      style={{
        width,
      }}
      {...notAllowDragProps}
    >
      <div className="hlui-chapters-progress-item" ref={itemRef} />
      <div className="hlui-chapters-progress-item-exclude" style={excludeStyle} />
    </div>
  );
}

export interface VideoChapterItem {
  startTime: number;
  endTime: number;
}

interface ClientXEvent {
  clientX: number;
}
interface PreviewFrameItem {
  startTime: number;
  endTime: number;
  url: string;
}

export interface PreviewFrameData {
  horizontalPreviewFrameCount: number;
  verticalPreviewFrameCount: number;
  previewFrameWidth: number;
  previewFrameHeight: number;
  previewFrameGroup: PreviewFrameItem[];
}

interface ChaptersProgressProps {
  currentTime: number;
  duration: number;
  onSeek: (time: number) => void;
  onSeeking: (isSeeking: boolean) => void;
  videoChapterList?: VideoChapterItem[];
  previewFrameData?: PreviewFrameData;
}

export interface ChaptersProgressHandles {
  handleResize: () => void;
}
const ChaptersProgress: ForwardRefRenderFunction<ChaptersProgressHandles, ChaptersProgressProps> = (
  { onSeek, onSeeking, duration, currentTime, videoChapterList, previewFrameData },
  ref,
) => {
  const [clientX, setClientX] = useState(0);

  const [hover, setHover] = useState(false);
  const [seeking, setSeeking] = useState(false);

  const chaptersWidthListRef = useRef<number[]>([]);
  const stateRef = useRef<ChaptersProgressItemState>({
    enableSlideIndicator: false,
    seeking: false,
    hover: false,
  });

  const itemRef = useRef<HTMLDivElement>(null);
  const rectRef = useRef<DOMRect>();

  function getProgress(x: number): ProgressGroup | undefined {
    const currentRect = rectRef.current;
    if (!currentRect) {
      return undefined;
    }
    const chaptersWidthList = chaptersWidthListRef.current;
    const currentIndicatorOffset = x - currentRect.left;

    return getProgressGroupByIndicatorOffset(
      currentIndicatorOffset,
      currentRect.width,
      chaptersWidthList,
    );
  }

  function handleMouseDown() {
    const state = stateRef.current;
    state.enableSlideIndicator = true;
    state.seeking = true;
    onSeeking(true);
    setSeeking(true);
  }
  const handleMouseUp = useCallback(function handleMouseUp<T extends ClientXEvent>(e: T) {
    setSeeking(false);
    const state = stateRef.current;
    const { enableSlideIndicator } = state;
    state.enableSlideIndicator = false;
    state.seeking = false;
    if (enableSlideIndicator) {
      onSeeking(false);
      setClientX(e.clientX);
      const currentRect = rectRef.current;
      if (!currentRect) {
        return;
      }
      const chaptersWidthList = chaptersWidthListRef.current;
      let snapClientX = e.clientX;
      // 视频章节数大于2时，启动进度条边缘吸附
      if (chaptersWidthList.length > 1) {
        const offset = snapClientX - currentRect.left;
        const { index, chapterRangeOffset } = getWidthIndexByIndicatorOffset(
          offset,
          chaptersWidthList,
        );
        if (index === -1) {
          return;
        }
        let passedChapterWidth = 0;
        for (let i = 0; i <= index; i++) {
          passedChapterWidth += chaptersWidthList[i] + CHAPTER_BAR_SPACING;
        }

        if (chapterRangeOffset <= SNAP_THRESHOLD) {
          snapClientX =
            currentRect.left + passedChapterWidth - chaptersWidthList[index] - CHAPTER_BAR_SPACING;
        } else if (chaptersWidthList[index] - chapterRangeOffset <= SNAP_THRESHOLD) {
          snapClientX = passedChapterWidth + currentRect.left;
        }
      }

      const progressGroup = getProgress(snapClientX);
      if (progressGroup) {
        const { currentVideoProgress } = progressGroup;
        onSeek(currentVideoProgress);
      }
    }
  }, []);

  const handleMouseMove = useCallback(function handleMouseMove<T extends ClientXEvent>(e: T) {
    const state = stateRef.current;
    const { hover: stateHover } = state;
    if (stateHover) {
      setClientX(e.clientX);
    }
  }, []);

  const [rect, setRect] = useState(defaultRect);
  const handleResize = useCallback(function handleResize() {
    if (itemRef.current) {
      rectRef.current = itemRef.current.getBoundingClientRect();
      setRect(rectRef.current);
    }
  }, []);

  useImperativeHandle(
    ref,
    () => ({
      handleResize,
    }),
    [],
  );

  useEffect(() => {
    handleResize();
  }, []);

  useEffect(() => {
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  const currentVideoChapterList = useMemo(() => {
    const actualVideoChapterList =
      videoChapterList && videoChapterList.length > 0
        ? videoChapterList
        : [{ startTime: 0, endTime: duration }];
    const availableWidth = rect.width - (actualVideoChapterList.length - 1) * CHAPTER_BAR_SPACING;
    chaptersWidthListRef.current = [];
    return actualVideoChapterList.map((item) => {
      const { startTime, endTime } = item;
      const length = endTime - startTime;
      const width = Math.round(availableWidth * (length / duration));
      chaptersWidthListRef.current.push(width);
      return {
        ...item,
        width,
        key: Math.random(),
      };
    });
  }, [videoChapterList, rect, duration]);

  const containerWidth = rect.width;
  const isShowPreview = hover || seeking;

  const currentVideoProgress = currentTime / duration;

  const previewProgressGroup = getProgress(clientX);
  let previewVideoProgress = 0;
  if (previewProgressGroup) {
    previewVideoProgress = previewProgressGroup.currentVideoProgress;
  }

  const actualVideoProgress = seeking ? previewVideoProgress : currentVideoProgress;

  const currentPreviewIndicatorProgress = getIndicatorProgressByVideoProgress(
    previewVideoProgress,
    containerWidth,
    chaptersWidthListRef.current,
  );

  const currentIndicatorProgress = getIndicatorProgressByVideoProgress(
    currentVideoProgress,
    containerWidth,
    chaptersWidthListRef.current,
  );
  const actualIndicatorProgress = seeking
    ? currentPreviewIndicatorProgress
    : currentIndicatorProgress;
  const previewIndicatorStyle = {
    transform: `translate(${currentPreviewIndicatorProgress * containerWidth}px, 0)`,
  };

  const actualShowCurrentTime = actualVideoProgress * duration;
  const previewCurrentTime = previewVideoProgress * duration;

  const { index } = getWidthIndexByIndicatorOffset(
    clientX - rect.left,
    chaptersWidthListRef.current,
  );
  const isIndicatorActive =
    index === -1
      ? false
      : isChapterItemActive(index, actualShowCurrentTime, currentVideoChapterList[index]);
  const indicatorStyle = {
    transform: `translate(${actualIndicatorProgress * containerWidth}px, 0)${
      isIndicatorActive && hover && currentVideoChapterList.length > 1 ? ' scale(1.75)' : ''
    }`,
  };

  return (
    <div
      className={cs('hlui-chapters-video-progress', {
        'hlui-chapters-video-progress-active': isShowPreview,
      })}
      ref={itemRef}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
      onMouseDown={handleMouseDown}
      onMouseEnter={() => {
        setHover(true);
        stateRef.current.hover = true;
      }}
      onMouseLeave={() => {
        setHover(false);
        stateRef.current.hover = false;
      }}
    >
      <div className="hlui-chapters-video-progress-chapter">
        {currentVideoChapterList.map((item, itemIndex) => {
          return (
            <ChaptersProgressItem
              key={item.key}
              active={
                hover &&
                currentVideoChapterList.length > 1 &&
                isChapterItemActive(itemIndex, previewCurrentTime, item)
              }
              currentTime={actualShowCurrentTime}
              start={item.startTime}
              end={item.endTime}
              width={`${item.width}px`}
            />
          );
        })}
      </div>
      <div className="hlui-chapters-progress-item-indicator" style={indicatorStyle} />
      <div
        className="hlui-chapters-progress-item-preview-indicator"
        style={previewIndicatorStyle}
      />
      {previewFrameData ? (
        <VideoFramePreview
          horizontalPreviewFrameCount={previewFrameData.horizontalPreviewFrameCount}
          verticalPreviewFrameCount={previewFrameData.verticalPreviewFrameCount}
          previewFrameWidth={previewFrameData.previewFrameWidth}
          previewFrameHeight={previewFrameData.previewFrameHeight}
          previewFrameGroup={previewFrameData.previewFrameGroup}
          show={isShowPreview}
          previewPositionProgress={currentPreviewIndicatorProgress}
          rect={rect}
          previewProgress={currentPreviewIndicatorProgress}
          duration={duration}
        />
      ) : null}
    </div>
  );
};

export default forwardRef(ChaptersProgress);
