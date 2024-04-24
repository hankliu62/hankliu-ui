/** @module getFileExtensions */

/**
 * 获取文件名后缀
 * @param file { string } 文件名
 * @return {string} 返回值
 */

export default function (filename: string) {
  let ext = '';
  if (!filename) return ext;
  filename = filename.trim();
  let queryIdx = filename.indexOf('?');
  let realName = filename;
  if (queryIdx !== -1) {
    realName = filename.substring(0, queryIdx);
  }
  let dotIndex = realName.lastIndexOf('.');
  if (dotIndex === -1) return ext;
  return realName.substring(dotIndex + 1).toLowerCase();
}
