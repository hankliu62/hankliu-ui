import * as React from 'react';

export type BoxProps = {
  width?: string | number;
  height?: string | number;
  ratio?: number;
  style?: any;
  className?: string;
  children?: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>;

const InnerStyle: React.CSSProperties = {
  position: 'absolute',
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
};

// todo 修改 2 个地址 内联样式，relative
export default class Box extends React.Component<BoxProps, any> {
  static defaultProps = {
    width: '100%',
  };

  constructor(props: any) {
    super(props);
    this.state = {};
  }

  render() {
    const { width, height, style = {}, ratio, children, ...rest } = this.props;
    if (width) style.width = width;
    if (height) style.height = height;
    style.position = 'relative';
    if (ratio) {
      if (typeof width === 'number') {
        console.warn && console.warn('你不需要用这个组件');
        style.height = width / ratio;
      } else {
        style.height = 0;
        style.paddingTop = `${(1 / ratio) * 100}%`;
      }
    }
    return (
      <div style={style} {...rest}>
        <div style={InnerStyle}>{children}</div>
      </div>
    );
  }
}
