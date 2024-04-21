import React from 'react';
import { Tooltip } from '@hankliu/hankliu-ui';
import { EditOutlined } from '@hankliu/icons';

const branchUrl = 'https://github.com/ant-design/ant-design/edit/master/';

export interface EditButtonProps {
  title: React.ReactNode;
  filename?: string;
}

export default function EditButton({ title, filename }: EditButtonProps) {
  return (
    <Tooltip title={title}>
      <a
        className="edit-button"
        href={`${branchUrl}${filename}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <EditOutlined />
      </a>
    </Tooltip>
  );
}
