import React from 'react';

import Group from './group';
import Groups from './groups';
import List from './list';
import Rows from './rows';
import type { CheckListProps } from './interfaces';

function Checklist(props: CheckListProps) {
  return <List {...props} />;
}
Checklist.Group = Group;
Checklist.Groups = Groups;
Checklist.Rows = Rows;

export * from './interfaces';
export default Checklist;
