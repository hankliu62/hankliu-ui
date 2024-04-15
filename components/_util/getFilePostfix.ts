/** @module getFilePostfix */


import getFileExtension from './getFileExtension'

/**
 * 获取文件类型后缀
 * @param file { File|string } 文件或者文件名
 * @return {string} 返回值
 */
export default function getFilePostfix (file: File|string) {
  let name;
  if (typeof file === 'object') {
    name = file.name;
  } else if (typeof file === 'string') {
    name = file;
  } else {
    name = '';
  }
  return getFileExtension(name);
}
