import type React from 'react';

export type CheckListItemValue = string | number;

type GroupsvalueProps = string[][] | number[][] | [];

export type localeProps = {
  showMore?: React.ReactNode;
  hideMore?: React.ReactNode;
};

export type CheckListOption = {
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  value: string;
  key?: string | number;
  disabled?: boolean;
  className?: string;
  style?: object;
};
type checklistValueProps = (string | number)[];

export interface CheckListProps {
  title?: React.ReactNode;
  subtitle?: React.ReactNode;
  options: CheckListOption[];
  value: checklistValueProps;
  onChange: (arr: checklistValueProps, isAllChecked: boolean) => void;
  disabled?: boolean;
  max?: number;
  moreSelect?: boolean;
  moreSelectProps?: object;
  locale?: localeProps;
}
export type row = {
  key: string;
  title?: string;
  options?: CheckListOption[];
  disabled?: boolean;
  itemStyle?: object;
  subItemStyle?: object;
};
export interface CheckListRowsProps {
  options: CheckListOption[];
  value: GroupsvalueProps;
  className?: string;
  onChange?: (arr: checklistValueProps, bool: boolean) => void;
  disabled?: boolean;
  rows?: row[];
  itemStyle?: object;
  subItemStyle?: object;
  style?: object;
  useDropdown?: boolean;
  dropdownProps?: any;
}

export type CheckListGroupProps = {
  title?: React.ReactNode;
  subtitle?: React.ReactNode;
  options: CheckListOption[];
  value: GroupsvalueProps;
  onChange: (e: GroupsvalueProps) => void;
  key?: string;
  disabled?: boolean;
  max?: number;
  moreSelect?: boolean;
  moreSelectProps?: object;
  locale?: localeProps;
  defaultExpanded?: boolean;
};
export interface CheckListGroupsProps {
  title?: React.ReactNode;
  subtitle?: React.ReactNode;
  groups: CheckListGroupProps[];
  value: GroupsvalueProps;
  onChange: (e: GroupsvalueProps) => void;
  className?: string;
  disabled?: boolean;
  max?: number;
  locale?: localeProps;
  defaultActiveKey?: string[] | string;
  activeKey?: string[] | string;
  accordion?: boolean;
  onCollapseChange?: () => void;
  moreSelect?: boolean;
  moreSelectProps?: object;
}
