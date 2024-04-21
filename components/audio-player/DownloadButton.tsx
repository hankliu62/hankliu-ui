import React from 'react';
import IconDownload from '@hankliu/icons/DownloadOutlined';

export interface DownloadButtonProps {
  source: string;
}

export default function (props: DownloadButtonProps) {
  const { source } = props;
  return (
    <a download href={source} target="_blank" className="control-btn">
      <IconDownload />
    </a>
  );
}
