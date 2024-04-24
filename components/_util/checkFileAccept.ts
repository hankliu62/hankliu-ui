import getFilePostfix from './getFilePostfix';
import isImage from './isImage';
import isAudio from './isAudio';
import isVideo from './isVideo';
import isFunction from 'lodash/isFunction';
import isRegExp from 'lodash/isRegExp';
import isString from 'lodash/isString';

const reg_jpg = /^jpe?g$/;

const reg_split = /[\/\.]/;

export function getAcceptTypes(accept = '') {
  let types = accept.split(reg_split);
  if (types.length === 1) types.unshift('*');
  return types;
}

export function checkFilenameAccept(filename: string, accept: string) {
  let [acceptPrefix, acceptPostfix] = getAcceptTypes(accept);
  if (acceptPostfix !== '*') {
    const pf = getFilePostfix(filename);
    // jpg jpeg 匹配
    if (reg_jpg.test(pf) && reg_jpg.test(acceptPostfix)) return true;
    return acceptPostfix === pf;
  }
  if (acceptPrefix === 'image') {
    return isImage(filename);
  }
  if (acceptPrefix === 'audio') {
    return isAudio(filename);
  }
  if (acceptPrefix === 'video') {
    return isVideo(filename);
  }
  //todo 添加更多类型检测
  return true;
}

function checkFileAccept(file: File | string, accept: string) {
  if (typeof file === 'string') return checkFilenameAccept(file, accept);
  if (file instanceof File) return checkFilenameAccept(file.name, accept);
  return false;
}

const reg_space = /\s/g;

/**
 * 判断是否是接收的文件类型
 * @function
 * @param file { File|string } 文件或者文件名
 * @param accept {string} 接受的文件类型，多个文件类型以逗号(,)分隔，
 * @return {boolean} 判断结果
 */
export default function (file: File | string, accept: string) {
  if (isFunction(accept)) return accept(file);
  if (isRegExp(accept)) {
    if (isString(file)) return accept.test(file);
    if (file instanceof File) return accept.test(file.name);
    return false;
  }
  if (isString(accept)) {
    const as = accept.replace(reg_space, '').split(',');
    if (as.length > 1) {
      return as.some((item) => checkFileAccept(file, item));
    } else {
      return checkFileAccept(file, accept);
    }
  }
  return true;
}
