import selectFiles from './selectFiles';
export { ERRORS } from './selectFiles';

export default function (options: any = {}) {
  options.multiple = false;
  return selectFiles(options).then((files: File[]) => files[0]);
}
