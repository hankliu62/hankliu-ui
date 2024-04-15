import isBrowser from './isBrowser'
export default function () {
  if(!isBrowser()) {
    return false
  }
  const ua = navigator.userAgent;
  return /Safari/.test(ua) && !/Chrome/.test(ua);
}
