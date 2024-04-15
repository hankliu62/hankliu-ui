// @ts-nocheck
import React from 'react';
import cs from 'classnames';
import HlModal from '../hl-modal';
import Panel from './Panel';
import Image from './Image';

export { GalleryProps } from './Panel';

function ImagePanel(props: any) {
  const { style, className, ...rest } = props;
  return (
    <div className={`hlui-gallery ${className || ''}`} style={style}>
      <Image {...rest} />
    </div>
  );
}

export default class Gallery extends React.Component<any, any> {
  static Panel = Panel;

  static ImagePanel = ImagePanel;

  static defaultProps = {
    open: false,
  };

  render() {
    const { open, sidebar, sidebarPosition = 'right', ...rest } = this.props;
    return (
      <HlModal
        className={cs('hlui-gallery-modal', {
          'with-sidebar': sidebar,
          'with-sidebar-left': sidebar && sidebarPosition === 'left',
        })}
        full
        closable={false}
        open={open}
      >
        <Panel closeable {...rest} />
        {sidebar}
      </HlModal>
    );
  }
}
