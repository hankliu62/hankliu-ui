const reg = /[^.]+(\.[^?#]+)?/;
export default function getFileName(file: File | string) {
  let name;
  if (typeof file === 'object') {
    return file.name;
  } else if (typeof file === 'string') {
    name = file;
  } else {
    return '';
  }
  name = name.substring(name.lastIndexOf('/') + 1);
  return (name.match(reg) || [])[0];
}
