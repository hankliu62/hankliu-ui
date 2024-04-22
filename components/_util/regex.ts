export default {
  EMAIL: /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/,
  URL: /((http|ftp|https):\/\/)?[\w-]+(\.[a-zA-Z\-]+)+([\w.,@?^=%&amp;:\/~+#-]*[\w@?^=%&amp;\/~+#-])?/,
  STRICTLY_URL:
    /((http|ftp|https):\/\/)[\w-]+(\.[a-zA-Z\-]+)+([\w.,@?^=%&amp;:\/~+#-]*[\w@?^=%&amp;\/~+#-])?/,
  HTTP: /^(http|https|ftp).*/,
  TEL: /^[\d\-\+]+$/,
  PERCENT_INTEGER: /(^[0-9]\d?(\.\d{0,5})?$)|(^100(\.0{0,5})?$)/,
  PHONE: /^\d{11}$/,
  HANS: /^[\u4e00-\u9fa5]$/,
  EMOJI: /\uD83C[\uDF00-\uDFFF]|\uD83D[\uDC00-\uDE4F]/,
  ID_CARD: /(^\d{15}$)|(^\d{17}[0-9Xx]{1}$)/,
  INT: /^[\d]+$/,
  NUMBER: /^-?[\d\.]+$/,
  WORD: /[a-zA-Z]+/,
  PASSWORD: /^[\w\-\+\._@]{8,16}$/,
  IMAGE_TYPE_POSTFIX: /^(png|jpg|svg|jpeg|bmp|gif|tif|tiff|heic|pic)$/i,
  AUDIO_TYPE_POSTFIX: /^(mp3|wav|ogg|wma|aac|ape|m4a)$/i,
  VIDEO_TYPE_POSTFIX: /^(avi|rm|rmvb|flv|mov|mp4|3gp|wmv|mpg|mkv|m4v|ts)/i,
  DOCUMENT_TYPE_POSTFIX: /^(pdf|zip|rar|ppt|pptx|key)$/i,
  IMAGES: /^.*\.(png|jpg|svg|jpeg|bmp|gif|tif|tiff|heic|pic)$/,
  CURRENCY: /^\d+\.?\d{0,2}$/,
};