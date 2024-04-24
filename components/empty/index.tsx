// @ts-nocheck
import LibEmpty, { EmptyProps as LibEmptyProps } from 'antd4x/lib/empty';
import cs from 'classnames';
import * as React from 'react';
import appendDefaultProps from '../_util/appendDefaultProps';
import EmptyNoCollection from './icon/no-collection.svg';
import EmptyNoComment from './icon/no-commentt.svg';
import EmptyNoData from './icon/no-data.svg';
import EmptyNoEvaluate from './icon/no-evaluate.svg';
import EmptyNoLink from './icon/no-link.svg';
import EmptyNoMaterial from './icon/no-material.svg';
import EmptyNoPermission from './icon/no-permission.svg';
import EmptyNoPersonnel from './icon/no-personnel.svg';
import EmptyNoPersonnels from './icon/no-personnels.svg';
import EmptyNoPicture from './icon/no-picture.svg';
import EmptyNoProject from './icon/no-project.svg';
import EmptyNoSearchResult from './icon/no-search-result.svg';
import EmptyNoSelect from './icon/no-select.svg';
import EmptyNoTag from './icon/no-tag.svg';

appendDefaultProps();

export * from 'antd4x/lib/empty';
export interface EmptyProps extends LibEmptyProps {
  height?: string | number;
  size?: 'small' | 'large' | 'normal';
}

const IMAGES = {
  NO_COLLECTION: EmptyNoCollection,
  NO_DATA: EmptyNoData,
  NO_EVALUATE: EmptyNoEvaluate,
  NO_LINK: EmptyNoLink,
  NO_MATERIAL: EmptyNoMaterial,
  NO_PERMISSION: EmptyNoPermission,
  NO_PERSONNEL: EmptyNoPersonnel,
  NO_PICTURE: EmptyNoPicture,
  NO_PROJECT: EmptyNoProject,
  NO_COMMENT: EmptyNoComment,
  NO_PERSONNELS: EmptyNoPersonnels,
  NO_SEARCH_RESULT: EmptyNoSearchResult,
  NO_SELECT: EmptyNoSelect,
  NO_TAG: EmptyNoTag,
};

function Empty(props: EmptyProps) {
  const { height, size, className, children, ...rest } = props;
  let { style } = props;
  style = style || {};
  let emptyHeight: string | number = '100%';
  if (height) {
    emptyHeight = height;
  } else if (style.height) {
    emptyHeight = style.height;
  }
  const cls = cs(className, { [`empty-size-${size}`]: size });
  return (
    <LibEmpty {...rest} className={cls} style={{ ...style, height: emptyHeight }}>
      {children}
    </LibEmpty>
  );
}

Empty.defaultProps = { height: '100%', size: 'default' };
Empty.IMAGES = IMAGES;
export default Empty;
