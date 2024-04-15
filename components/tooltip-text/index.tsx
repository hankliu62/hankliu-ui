import React, { useState, useEffect, useRef, useCallback } from 'react';
import cl from 'classnames';
import type { HlTooltipProps } from '../tooltip';
import Tooltip from '../tooltip';

export type TooltipTextProps = HlTooltipProps

export default function TooltipText({ children, title, className, ...rest }: TooltipTextProps) {
  const [enabledTooltip, setEnabledTooltip] = useState(false);

  const ref = useRef<HTMLDivElement>(null);
  const parentNodeRef = useRef<HTMLDivElement>(null);

  const resize = useCallback(() => {
    const node = ref.current;
    const parentNode = parentNodeRef.current;
    if (!node || !parentNode) {
      return;
    }
    setEnabledTooltip(node.clientWidth >= parentNode.clientWidth);
  }, []);

  useEffect(() => {
    resize();
  }, [children]);

  useEffect(() => {
    window.addEventListener('resize', resize, false);
    return () => {
      window.removeEventListener('resize', resize, false);
    };
  }, []);

  return (
    <Tooltip title={title} disabled={!enabledTooltip} {...rest}>
      <div ref={parentNodeRef} className={cl('hlui-tooltip-text', className)} {...rest}>
        <span>{children}</span>
        <div ref={ref} className="hlui-tooltip-text-inner">
          {children}
        </div>
      </div>
    </Tooltip>
  );
}
