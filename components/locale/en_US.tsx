import localeValues from 'antd4x/lib/locale/default';
import type { Locale } from 'antd4x/lib/locale-provider';
import type { HlLocale } from './zh_CN'

const antdLocale: Locale = {
  ...localeValues,
}
const hankliuLocale = {
  FileSelect: {
    title: 'Click to choose files or dragged in',
    subtitle: "The file size can't more than {maxsize}",
    maxsizeTip: "The file size can't more than {maxsize}",
    maximumTip: 'Choose a maximum of {maximum} files',
    acceptTip: 'File format is not supported',
  },
  Gallery: {
    zoomIn: 'Zoom in',
    zoomOut: 'Zoom out',
    rotate: 'Rotate',
    reset: 'Reset',
  },
  CheckList: {
    showMore: 'Show More',
    hideMore: 'Hide More',
  },
  AudioPlayer: {
    prText: 'Play Speed',
    error: 'Audio load failure',
  },

  Empty: {
    description: 'No Data',
  },
  Captcha: {
    lang: 'en',
    initErrorTip: 'Initialize the captcha failed',
  },
  ColorPicker: {
    defaultColor: 'Default',
    recentlyColor: 'Recently used',
  },
  InputPhone: {
    placeholder: 'Phone number',
  },
  VideoPlayer: {
    prText: 'Play Speed',
    error: 'Video load failure',
  },
  EditableText: {
    textPlaceholder: 'Enter words',
  },
  ImageCropper: {
    okText: "OK",
    reuploadText: "Re Upload",
  },
}
const tzLocaleValues: HlLocale = Object.assign(antdLocale, hankliuLocale);
export default tzLocaleValues;
