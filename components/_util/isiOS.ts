import isBrowser from './isBrowser';

export default function isiOS() {
  if (!isBrowser()) {
    return false;
  }
  return navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
}
