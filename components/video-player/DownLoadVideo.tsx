import React from 'react';
import IconDownload from '@ant-design/icons/lib/icons/DownloadOutlined';

interface DownLoadVideoProps {
  source: string;
}
function DownLoadVideo({ source }: DownLoadVideoProps) {
  return (
    <a
      download
      href={source}
      target="_blank"
      className="hlui-chapters-video-control-btn"
      rel="noreferrer"
    >
      <IconDownload className="hlui-chapters-video-icon" />
    </a>
  );
}

export default React.memo(DownLoadVideo)
