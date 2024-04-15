import React, { useRef, useState } from 'react';

const GAP = 8;

export default function (props: any) {
  const { children, width, onChange } = props;
  const rootRef: any = useRef(null);
  const [movement, setMovement] = useState({ enabled: false, direction: '', width });
  function mouseDownLeft() {
    setMovement({ enabled: true, direction: 'left', width: movement.width });
  }
  function mouseDownRight() {
    setMovement({ enabled: true, direction: 'right', width: movement.width });
  }
  function mouseMove(e: any) {
    if (!movement.enabled) return;
    console.log('mouse move', movement.enabled);
    if (!(rootRef && rootRef.current)) return;
    const { clientX } = e;
    const { left, width } = rootRef.current.getBoundingClientRect();
    let result = 0;
    console.log(clientX, left, width);
    console.log(movement.direction);
    if (movement.direction === 'left') {
      result = (width - (clientX + GAP - left) * 2) / width;
    } else if (movement.direction === 'right') {
      result = (width - (width + left + GAP - clientX) * 2) / width;
    }
    if (result > 1) result = 1;
    if (result < 0.1) result = 0.1;
    setMovement({ ...movement, width: `${(result * 100).toFixed(2)}%` });
  }
  function mouseUp() {
    console.log('mouse up , true');
    setMovement({ enabled: false, direction: '', width: movement.width });
    onChange({ width: movement.width });
  }
  return (
    <div
      ref={rootRef}
      className="hlui-resize-box"
      onMouseMove={mouseMove}
      onMouseUp={mouseUp}
      onMouseLeave={mouseUp}
    >
      <div className="resize-inner" style={{ width: movement.width }}>
        {children}
        <div
          className="resize-handle resize-handle-left"
          onMouseDown={mouseDownLeft}
        />
        <div
          className="resize-handle resize-handle-right"
          onMouseDown={mouseDownRight}
        />
      </div>
    </div>
  );
}
