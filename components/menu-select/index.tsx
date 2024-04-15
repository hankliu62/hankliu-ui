import React from 'react';
import appendDefaultProps from '../_util/appendDefaultProps';

appendDefaultProps();

import Dropdown from './dropdown';
import Panel from './panel';
import Input from './input';
import { EShowCheckedStrategy, MenuSelectProps } from './interfaces';

function MenuSelect(props: MenuSelectProps) {
  const { type, children } = props;

  if (type === 'dropdown' || children) {
    return (<Dropdown {...props} />);
  }
  if (type === 'input') {
    return (<Input {...props} />);
  }
  return (<Panel {...props} />);
}

const GenericMenuSelect = MenuSelect as unknown as ((props: MenuSelectProps) => React.ReactElement) & {
  SHOW_ALL: typeof EShowCheckedStrategy.SHOW_PARENT
  SHOW_PARENT: typeof EShowCheckedStrategy.SHOW_CHILD
  SHOW_CHILD: typeof EShowCheckedStrategy.SHOW_ALL
};

MenuSelect.SHOW_PARENT = EShowCheckedStrategy.SHOW_PARENT;
MenuSelect.SHOW_CHILD = EShowCheckedStrategy.SHOW_CHILD;
MenuSelect.SHOW_ALL = EShowCheckedStrategy.SHOW_ALL;

export * from './interfaces';

export default GenericMenuSelect;