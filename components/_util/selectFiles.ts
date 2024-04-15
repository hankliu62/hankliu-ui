import isString from 'lodash/isString';
import checkFileAccept from './checkFileAccept';

export const ERRORS = {
  EXCEED_MAXSIZE: 'EXCEED_MAXSIZE',
  EXCEED_MAXIMUM: 'EXCEED_MAXIMUM',
  ACCEPT_FAILED: 'ACCEPT_FAILED',
  CANCELED: 'CANCELED'
}

export function validFiles(files: File[], options: any) {
  const { accept, maxsize, maximum } = options;
  if (maximum && files.length > maximum) {
    return ERRORS.EXCEED_MAXIMUM;
  }
  let result;
  files.some(file => {
    if (file.size > maxsize) {
      result = ERRORS.EXCEED_MAXSIZE;
      return true;
    }
    if (!checkFileAccept(file, accept)) {
      result = ERRORS.ACCEPT_FAILED;
      return true;
    }
  })
  return result;
}

export default function(options: any = {}) {
  return new Promise<File[]>(function (resolve, reject) {
    const { accept, maxsize, maximum, webkitdirectory, multiple = true } = options;
    let element = document.createElement('input');
    element.type = 'file';
    element.multiple = multiple;
    element.webkitdirectory = !!webkitdirectory;
    element.style.position = 'fixed';
    element.style.top = '0';
    element.style.left = '99999px';
    if (isString(accept)) {
      element.accept = accept;
    }
    document.body.appendChild(element);
    if (isMSBrowser()) {
      window.addEventListener('focus', msGetFiles, false);
    } else {
      element.onchange = getFiles;
    }
    element.click();
    function getFiles() {
      const files: File[] = Array.from((element as any).files);
      document.body.removeChild(element);
      if (files.length === 0) return reject(ERRORS.CANCELED);
      const error = validFiles(files, { accept, maxsize, maximum })
      if (error) {
        reject(error);
      } else {
        resolve(files);
      }
    }
    function msGetFiles() {
      setTimeout(getFiles, 300);
      window.removeEventListener('focus', msGetFiles, false);
    }
  });
}


function isMSBrowser() {
  const ua = navigator.userAgent; //取得浏览器的userAgent字符串
  const ltIE11 = ua.indexOf("compatible") > -1 && ua.indexOf("MSIE") > -1; //判断是否IE<11浏览器
  const isIE11 = ua.indexOf('Trident') > -1;
  const isEdge = ua.indexOf("Edge") > -1 ; //判断是否IE的Edge浏览器
  return ltIE11 || isIE11 || isEdge;
}
