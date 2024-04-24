import React, { useEffect, useRef, useState, useLayoutEffect } from 'react';

let globalImg;

export interface ISprite {
  block_size: [number, number];
  groups: {
    file_url: string;
    end_at: number;
  }[];
}

function useWidth(ref: React.RefObject<HTMLDivElement>) {
  const [width, setWidth] = useState<number | undefined>(undefined);
  useLayoutEffect(() => {
    if (ref.current) {
      const el = ref.current;
      const observer = new ResizeObserver(() => {
        setWidth(el.clientWidth);
      });
      observer.observe(el);
      return () => {
        observer.disconnect();
      };
    }
    setWidth(undefined);
  }, [ref]);

  return width;
}

function cacheImage(url: string, onLoad: () => void) {
  if (!url) return () => {};
  globalImg = new Image();
  let canceled = false;
  globalImg.onload = () => {
    if (canceled) return;
    onLoad();
  };
  globalImg.src = url;

  return () => {
    canceled = true;
  };
}

export interface CardSpriteProps {
  sprite: ISprite;
}
export default function CardSprite({ sprite }: CardSpriteProps) {
  const [percent, setPercent] = useState(0);
  const [hover, setHover] = useState(false);
  const [{ src, left, top, width, height }, setSrc] = useState({
    src: '',
    left: 0,
    top: 0,
    width: 0,
    height: 0,
  });
  const ref = useRef(null);
  const containerWidth = useWidth(ref);

  useEffect(() => {
    const { length } = sprite.groups;
    if (!containerWidth || !length || percent < 0) return;
    const groupIndex = Math.floor(percent * length);
    if (groupIndex === length) return;
    const group = sprite.groups[groupIndex];
    const [rawWidth, rawHeight] = sprite.block_size;
    const times = containerWidth / rawWidth;
    const blockIndex = Math.floor((percent * length - groupIndex) * 25);
    const yIndex = Math.floor(blockIndex / 5);
    const xIndex = blockIndex % 5;

    return cacheImage(group.file_url, () => {
      setSrc({
        src: group.file_url,
        left: -xIndex * rawWidth * times || 0,
        top: -yIndex * rawHeight * times || 0,
        width: rawWidth * 5 * times,
        height: rawHeight * 5 * times,
      });
    });
  }, [percent, sprite.block_size, sprite.groups, containerWidth]);

  return (
    <div
      ref={ref}
      style={{
        background: `no-repeat url(${src}) ${left}px ${top}px / ${width}px ${height}px`,
        opacity: hover ? 1 : 0,
      }}
      className="hlui-card-sprite"
      onMouseOver={() => {
        setHover(true);
      }}
      onFocus={() => {}}
      onMouseMove={(e) => {
        const { left: bLeft, width: bWidth } = e.currentTarget.getBoundingClientRect();
        setPercent((e.clientX - bLeft) / bWidth);
      }}
      onMouseLeave={() => {
        setHover(false);
      }}
    >
      <div
        className="hlui-card-sprite-progress"
        style={{ width: `${(percent * 100).toFixed(2)}%` }}
      />
    </div>
  );
}
