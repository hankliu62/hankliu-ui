import * as React from 'react';
import cs from 'classnames';
import HlModal from '../hl-modal';
import Panel, { GalleryProps } from './Panel';
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

const InnerGallery = ({
  open = false,
  sidebarPosition = 'right',
  sidebar,
  ...rest
}: GalleryProps & {
  open?: boolean;
  sidebarPosition: 'left' | 'right';
  sidebar: any;
}) => {
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
};

const Gallery: typeof InnerGallery & {
  Panel: typeof Panel;
  ImagePanel: typeof ImagePanel;
} = Object.assign(InnerGallery, {
  Panel,
  ImagePanel,
});

export default Gallery;
