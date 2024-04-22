import React, { useEffect } from 'react';
// @ts-ignore
import { useMutateObserver } from '@rc-component/mutate-observer';
// @ts-ignore
import classNames from 'classnames';

import WatermarkContext from './context';
import type { WatermarkContextProps } from './context';
import useClips, { FontGap } from './useClips';
import useRafDebounce from './useRafDebounce';
import useWatermark from './useWatermark';
import { getPixelRatio, reRendering } from './utils';

export interface WatermarkProps {
  zIndex?: number;
  rotate?: number;
  width?: number;
  height?: number;
  image?: string;
  content?: string | string[];
  font?: {
    color?: CanvasFillStrokeStyles['fillStyle'];
    fontSize?: number | string;
    fontWeight?: 'normal' | 'light' | 'weight' | number;
    fontStyle?: 'none' | 'normal' | 'italic' | 'oblique';
    fontFamily?: string;
    textAlign?: CanvasTextAlign;
  };
  style?: React.CSSProperties;
  className?: string;
  rootClassName?: string;
  gap?: [number, number];
  offset?: [number, number];
  children?: React.ReactNode;
  inherit?: boolean;
}

/**
 * Only return `next` when size changed.
 * This is only used for elements compare, not a shallow equal!
 */
function getSizeDiff<T>(prev: Set<T>, next: Set<T>) {
  return prev.size === next.size ? prev : next;
}

const DEFAULT_GAP_X = 100;
const DEFAULT_GAP_Y = 100;

const Watermark: React.FC<WatermarkProps> = (props) => {
  const {
    zIndex = 9,
    rotate = -22,
    width,
    height,
    image,
    content,
    font = {},
    style,
    className,
    rootClassName,
    gap = [DEFAULT_GAP_X, DEFAULT_GAP_Y],
    offset,
    children,
    inherit = true,
  } = props;
  const {
    color = 'rgba(0, 0, 0, 0.18)',
    fontSize = '16px',
    fontWeight = 'normal',
    fontStyle = 'normal',
    fontFamily = 'sans-serif',
    textAlign = 'center',
  } = font;

  const [gapX = DEFAULT_GAP_X, gapY = DEFAULT_GAP_Y] = gap;
  const gapXCenter = gapX / 2;
  const gapYCenter = gapY / 2;
  const offsetLeft = offset?.[0] ?? gapXCenter;
  const offsetTop = offset?.[1] ?? gapYCenter;

  const markStyle = React.useMemo(() => {
    const mergedStyle: React.CSSProperties = {
      zIndex,
      position: 'absolute',
      left: 0,
      top: 0,
      width: '100%',
      height: '100%',
      pointerEvents: 'none',
      backgroundRepeat: 'repeat',
    };

    /** Calculate the style of the offset */
    let positionLeft = offsetLeft - gapXCenter;
    let positionTop = offsetTop - gapYCenter;
    if (positionLeft > 0) {
      // @ts-ignore
      mergedStyle.left = `${positionLeft}px`;
      // @ts-ignore
      mergedStyle.width = `calc(100% - ${positionLeft}px)`;
      positionLeft = 0;
    }
    if (positionTop > 0) {
      // @ts-ignore
      mergedStyle.top = `${positionTop}px`;
      // @ts-ignore
      mergedStyle.height = `calc(100% - ${positionTop}px)`;
      positionTop = 0;
    }
    // @ts-ignore
    mergedStyle.backgroundPosition = `${positionLeft}px ${positionTop}px`;

    return mergedStyle;
  }, [zIndex, offsetLeft, gapXCenter, offsetTop, gapYCenter]);

  const [container, setContainer] = React.useState<HTMLDivElement | null>();

  // Used for nest case like Modal, Drawer
  const [subElements, setSubElements] = React.useState(new Set<HTMLElement>());

  // Nest elements should also support watermark
  const targetElements = React.useMemo(() => {
    const list = container ? [container] : [];
    return [...list, ...Array.from(subElements)];
  }, [container, subElements]);

  // ============================ Content =============================
  /**
   * 获得每一个水印印记的高度和宽度
   * Image: [120, 64]; Content: It's calculated by content;
   */
  const getMarkSize = (ctx: CanvasRenderingContext2D) => {
    let defaultWidth = 120;
    let defaultHeight = 64;
    if (!image && ctx.measureText) {
      ctx.font = `${parseInt(fontSize.toString())}px ${fontFamily}`;
      const contents = Array.isArray(content) ? content : [content];
      const sizes = contents.map((item) => {
        // measureText()方法可以度量字体的宽度。measureText()方法返回了一个包含width属性的TextMetrics对象
        const metrics = ctx.measureText(item!);

        // fontBoundingBoxAscent + fontBoundingBoxDescent 可以获得当前渲染文本的高度
        // fontBoundingBoxAscent: 属性标明的水平线到渲染文本的所有字体的矩形最高边界顶部的距离，使用 CSS 像素计算。
        // fontBoundingBoxDescent: 属性标明的水平线到渲染文本的所有字体的矩形边界最底部的距离，使用 CSS 像素计算。
        return [metrics.width, metrics.fontBoundingBoxAscent + metrics.fontBoundingBoxDescent];
      });
      defaultWidth = Math.ceil(Math.max(...sizes.map((size) => size[0])));
      defaultHeight =
        sizes.reduce((total, [_, height]) => total + height, 0) + (contents.length - 1) * FontGap;
      // defaultHeight =
      //   Math.ceil(Math.max(...sizes.map((size) => size[1]))) * contents.length +
      //   (contents.length - 1) * FontGap;
    }
    return [width ?? defaultWidth, height ?? defaultHeight] as const;
  };

  const getClips = useClips();

  const [watermarkInfo, setWatermarkInfo] = React.useState<[base64: string, contentWidth: number]>(
    null!,
  );

  // Generate new Watermark content
  const renderWatermark = () => {
    // 主要用来判断是否能使用canvas
    const ctx = document.createElement('canvas').getContext('2d');

    if (ctx) {
      const ratio = getPixelRatio();
      // 获得每一个水印印记的大小
      const [markWidth, markHeight] = getMarkSize(ctx);

      // 绘制水印
      const drawCanvas = (
        // 水印文字或者图片
        drawContent?: NonNullable<WatermarkProps['content']> | HTMLImageElement,
      ) => {
        // 获得水印的Base64格式的图片数据，以及区域的面积
        const [nextClips, clipWidth] = getClips(
          drawContent || '',
          rotate,
          ratio,
          markWidth,
          markHeight,
          {
            color,
            fontSize,
            fontStyle,
            fontWeight,
            fontFamily,
            textAlign,
          },
          gapX,
          gapY,
        );

        setWatermarkInfo([nextClips, clipWidth]);
      };

      if (image) {
        const img = new Image();
        img.onload = () => {
          drawCanvas(img);
        };
        img.onerror = () => {
          drawCanvas(content);
        };
        img.crossOrigin = 'anonymous';
        img.referrerPolicy = 'no-referrer';
        img.src = image;
      } else {
        drawCanvas(content);
      }
    }
  };

  const syncWatermark = useRafDebounce(renderWatermark);

  // ============================= Effect =============================
  // Append watermark to the container
  const [appendWatermark, removeWatermark, isWatermarkEle] = useWatermark(markStyle);

  useEffect(() => {
    if (watermarkInfo) {
      targetElements.forEach((holder) => {
        appendWatermark(watermarkInfo[0], watermarkInfo[1], holder);
      });
    }
  }, [watermarkInfo, targetElements]);

  // ============================ Observe =============================
  const onMutate = (mutations: MutationRecord[]) => {
    mutations.forEach((mutation) => {
      if (reRendering(mutation, isWatermarkEle)) {
        syncWatermark();
      }
    });
  };

  useMutateObserver(targetElements, onMutate);

  useEffect(syncWatermark, [
    rotate,
    zIndex,
    width,
    height,
    image,
    content,
    color,
    fontSize,
    fontWeight,
    fontStyle,
    fontFamily,
    textAlign,
    gapX,
    gapY,
    offsetLeft,
    offsetTop,
  ]);

  // ============================ Context =============================
  const watermarkContext = React.useMemo<WatermarkContextProps>(
    () => ({
      add: (ele) => {
        setSubElements((prev) => {
          const clone = new Set(prev);
          clone.add(ele);
          return getSizeDiff(prev, clone);
        });
      },
      remove: (ele) => {
        removeWatermark(ele);

        setSubElements((prev) => {
          const clone = new Set(prev);
          clone.delete(ele);

          return getSizeDiff(prev, clone);
        });
      },
    }),
    [],
  );

  // ============================= Render =============================
  const childNode = inherit ? (
    <WatermarkContext.Provider value={watermarkContext}>{children}</WatermarkContext.Provider>
  ) : (
    children
  );

  return (
    <div
      ref={setContainer}
      className={classNames(className, rootClassName)}
      style={{ position: 'relative', ...style }}
    >
      {childNode}
    </div>
  );
};

if (process.env.NODE_ENV !== 'production') {
  Watermark.displayName = 'Watermark';
}

export default Watermark;
