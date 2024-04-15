export default function isFullScreen() {
  if (typeof document !== 'object') return false;
  return !!(
    document.fullScreen ||
    document.webkitIsFullScreen ||
    document.mozFullScreen ||
    document.msFullscreenElement ||
    document.fullscreenElement
  );
}
