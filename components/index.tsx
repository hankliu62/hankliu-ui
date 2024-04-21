/* @remove-on-es-build-begin */
// this file is not used if use https://github.com/ant-design/babel-plugin-import
const ENV = process.env.NODE_ENV;
if (
  ENV !== 'production' &&
  ENV !== 'test' &&
  typeof console !== 'undefined' &&
  console.warn && // eslint-disable-line no-console
  typeof window !== 'undefined'
) {
  // eslint-disable-next-line no-console
  console.warn(
    'You are using a whole package of hankliu ui, ' +
      'please use https://www.npmjs.com/package/babel-plugin-import to reduce app bundle size.',
  );
}
/* @remove-on-es-build-end */

export { default as Upload } from './upload';
export type { UploadProps } from './upload';

export { default as Affix } from './affix';
export type { AffixProps } from './affix';
export { default as Alert } from './alert';
export type { AlertProps } from './alert';
export { default as Anchor } from './anchor';
export type { AnchorLinkProps, AnchorProps } from './anchor';
export { default as AutoComplete } from './auto-complete';
export type { AutoCompleteProps } from './auto-complete';
export { default as Avatar } from './avatar';
export type { AvatarProps } from './avatar';
export { default as BackTop } from './back-top';
export type { BackTopProps } from './back-top';
export { default as Badge } from './badge';
export type { BadgeProps } from './badge';
export { default as Breadcrumb } from './breadcrumb';
export type { BreadcrumbItemProps, BreadcrumbProps } from './breadcrumb';
export { default as Button } from './button';
export type { ButtonProps } from './button';
export { default as Calendar } from './calendar';
export type { CalendarProps } from './calendar';
export { default as Card } from './card';
export type { CardProps } from './card';
export { default as HlCarousel } from './hl-carousel';
export type { HlCarouselProps } from './hl-carousel';
export { default as Carousel } from './carousel';
export type { CarouselProps } from './carousel';
export { default as Cascader } from './cascader';
export type { CascaderProps } from './cascader';

export type {
  CheckListProps,
  CheckListRowsProps,
  CheckListGroupsProps,
  CheckListGroupProps,
} from './check-list';
export { default as CheckList } from './check-list';

export { default as Checkbox } from './checkbox';
export type { CheckboxOptionType, CheckboxProps } from './checkbox';

export { default as Col } from './col';
export type { ColProps } from './col';
export { default as Collapse } from './collapse';
export type { CollapsePanelProps, CollapseProps } from './collapse';
export { default as Comment } from './comment';
export type { CommentProps } from './comment';
export { default as ConfigProvider } from './config-provider';
export { default as DatePicker } from './date-picker';
export type { DatePickerProps } from './date-picker';
export { default as Descriptions } from './descriptions';
export type { DescriptionsProps } from './descriptions';
export { default as Divider } from './divider';
export type { DividerProps } from './divider';
export { default as Drawer } from './drawer';
export type { DrawerProps } from './drawer';
export { default as Dropdown } from './dropdown';
export type { DropDownProps } from './dropdown';
export { default as Empty } from './empty';
export type { EmptyProps } from './empty';
export { default as Form } from './form';
export type { FormInstance, FormItemProps, FormProps } from './form';
export { default as Grid } from './grid';
export { default as HlImage } from './hl-image';
export type { HlImageProps } from './hl-image';
export { default as Input } from './input';
export type { HlInputProps } from './input';
export { default as InputNumber } from './input-number';
export type { InputNumberProps } from './input-number';
export { default as Layout } from './layout';
export type { LayoutProps } from './layout';
export { default as List } from './list';
export type { ListProps } from './list';
export { default as Mentions } from './mentions';
export type { MentionProps } from './mentions';
export { default as Menu } from './menu';
export type { MenuItemProps, MenuProps, MenuTheme, SubMenuProps } from './menu';
export { default as message } from './message';
export type { ArgsProps as MessageArgsProps } from './message';
export { default as Modal } from './modal';
export type { ModalFuncProps, ModalProps } from './modal';
export { default as notification } from './notification';
export { default as PageHeader } from './page-header';
export type { PageHeaderProps } from './page-header';
export { default as Pagination } from './pagination';
export type { PaginationProps } from './pagination';
export { default as Popconfirm } from './popconfirm';
export type { PopconfirmProps } from './popconfirm';
export { default as HlPopover } from './hl-popover';
export type { HlPopoverProps } from './hl-popover';
export { default as Popover } from './popover';
export type { PopoverProps } from './popover';
export { default as Progress } from './progress';
export type { ProgressProps } from './progress';
export { default as Radio } from './radio';
export type { RadioChangeEvent, RadioGroupProps, RadioProps } from './radio';
export { default as Rate } from './rate';
export type { RateProps } from './rate';
export { default as Result } from './result';
export type { ResultProps } from './result';
export { default as Row } from './row';
export type { RowProps } from './row';
export { default as Select } from './select';
export type { SelectProps } from './select';
export { default as HlSelect } from './hl-select';
export type { HlSelectProps } from './hl-select';
export { default as Skeleton } from './skeleton';
export type { SkeletonProps } from './skeleton';
export { default as Slider } from './slider';
export type { SliderSingleProps } from './slider';
export { default as Space } from './space';
export type { SpaceProps } from './space';

export { default as Statistic } from './statistic';
export type { StatisticProps } from './statistic';
export { default as Steps } from './steps';
export type { StepProps, StepsProps } from './steps';
export { default as Switch } from './switch';
export type { SwitchProps } from './switch';
export { default as Table } from './table';
export type {
  ColumnGroupType as TableColumnGroupType,
  ColumnProps as TableColumnProps,
  ColumnsType as TableColumnsType,
  ColumnType as TableColumnType,
  TablePaginationConfig,
  TableProps,
} from './table';
export { default as Tabs } from './tabs';
export type { TabPaneProps, TabsProps } from './tabs';
export { default as Tag } from './tag';
export type { TagProps, TagType } from './tag';
export { default as TimePicker } from './time-picker';
export type { TimePickerProps, TimeRangePickerProps } from './time-picker';
export { default as Timeline } from './timeline';
export type { TimelineItemProps, TimelineProps } from './timeline';
export { default as Tooltip } from './tooltip';
export type { HlTooltipProps } from './tooltip';
export { default as Transfer } from './transfer';
export type { TransferProps } from './transfer';
export { default as Tree } from './tree';
export type {
  AntTreeNodeProps as TreeNodeProps,
  DataNode as TreeDataNode,
  TreeProps,
} from './tree';
export { default as TreeSelect } from './tree-select';
export type { TreeSelectProps } from './tree-select';

export { default as HlTreeSelect } from './hl-tree-select';
export type { HlTreeSelectProps } from './hl-tree-select';

export { default as Typography } from './typography';
export type { TypographyProps } from './typography';
export { default as version } from './version';

export { default as Clipboard } from './clipboard';
export type { ClipboardProps } from './clipboard';

export { default as VideoPlayer } from './video-player';
export type { VideoPlayerProps } from './video-player';

export { default as CheckCard } from './check-card';
export type { CheckCardProps } from './check-card';

export type { MenuSelectProps } from './menu-select';
export { default as MenuSelect } from './menu-select';

export type { LoadMoreProps } from './load-more';
export { default as LoadMore } from './load-more';

export type { SimpleMenuSelectProps } from './simple-menu-select';
export { default as SimpleMenuSelect } from './simple-menu-select';

export type { SimpleMonthPickerProps } from './simple-month-picker';
export { default as SimpleMonthPicker } from './simple-month-picker';

export type { SimpleTreeSelectProps } from './simple-tree-select';
export { default as SimpleTreeSelect } from './simple-tree-select';

export { default as HlModal } from './hl-modal';

export { default as ScrollContainer } from './scroll-container';

export type { AngleInputProps } from './angle-input';
export { default as AngleInput } from './angle-input';

export type { AudioPlayerProps } from './audio-player';
export { default as AudioPlayer } from './audio-player';

export { default as captcha } from './captcha';

export type { FileSelectProps } from './file-select';
export { default as FileSelect } from './file-select';

export type { GalleryProps } from './gallery';
export { default as Gallery } from './gallery';

export type { ImageCropperProps } from './image-cropper';
export { default as ImageCropper } from './image-cropper';

export type { MarqueeProps } from './marquee';
export { default as Marquee } from './marquee';

export type { PullToRefreshProps } from './pull-to-refresh';
export { default as PullToRefresh } from './pull-to-refresh';

export type { TagInputProps } from './tag-input';
export { default as TagInput } from './tag-input';

export type { DropSelectProps } from './drop-select';
export { default as DropSelect } from './drop-select';

export type { VirtualListProps } from './virtual-list';
export { default as VirtualList } from './virtual-list';

export type { ColorPickerProps } from './color-picker/interfaces';
export { default as ColorPicker } from './color-picker';

export type { CategoryTreeSelectProps } from './category-tree-select';
export { default as CategoryTreeSelect } from './category-tree-select';

export type { CardSpriteProps } from './card-sprite';
export { default as CardSprite } from './card-sprite';

export type { HlTagProps } from './hl-tag';
export { default as HlTag } from './hl-tag';

export { default as HlSpin } from './hl-spin';
export type { HlSpinProps } from './hl-spin';

export { default as Responsive } from './responsive';

export { default as InputPhone } from './input-phone';
export type { InputPhoneProps } from './input-phone';

export { default as TooltipText } from './tooltip-text';
export type { TooltipTextProps } from './tooltip-text';

export { default as HlTable } from './hl-table';
export type { HlTableProps } from './hl-table';

export { default as EditableText } from './editable-text';
export type { EditableTextProps } from './editable-text';

// export { default as MonacoEditor } from './monaco-editor';
// export type { IMonacoEditorProps as MonacoEditorProps, MonacoEditorMethods } from './monaco-editor';
