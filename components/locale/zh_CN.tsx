import localeValues from 'antd4x/lib/locale/zh_CN';
import type { Locale } from 'antd4x/lib/locale-provider';

const antdLocale: Locale = {
  ...localeValues,
};

const hankliuLocale = {
  FileSelect: {
    title: '上传文件 或 拖进来',
    subtitle: '文件大小不超过 {maxsize}',
    maxsizeTip: '文件大小不超过 {maxsize}',
    maximumTip: '最多选择 {maximum} 个文件',
    acceptTip: '文件格式不对',
  },
  CheckList: {
    showMore: '更 多',
    hideMore: '收 起',
  },
  AudioPlayer: {
    prText: '播放速度',
    error: '音频加载失败',
  },
  Empty: {
    description: '暂无数据',
  },
  Captcha: {
    lang: 'zh-CN',
    initErrorTip: '初始化验证码失败',
  },
  ColorPicker: {
    defaultColor: '默认颜色',
    recentlyColor: '最近使用的颜色',
  },
  InputPhone: {
    placeholder: '请输入手机号',
  },
  VideoPlayer: {
    prText: '播放速度',
    error: '视频加载失败',
  },
  Gallery: {
    zoomIn: '放大图片',
    zoomOut: '缩小图片',
    rotate: '旋转图片',
    reset: '还原图片',
  },
  EditableText: {
    textPlaceholder: '请输入',
  },
  ImageCropper: {
    okText: '确 认',
    reuploadText: '重新上传',
  },
};

const tzLocaleValues = Object.assign(antdLocale, hankliuLocale);
export type HlLocale = typeof tzLocaleValues;
export default tzLocaleValues;
