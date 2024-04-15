export default function isFullScreenEnabled() {
  if (typeof document !== 'object') return false;
  const videoEl = document.createElement('video');
  return !!(
    document.fullscreenEnabled ||
    document.mozFullScreenEnabled ||
    document.msFullscreenEnabled ||
    document.webkitSupportsFullscreen ||
    document.webkitFullscreenEnabled ||
    // @ts-ignore
    videoEl.webkitEnterFullScreen
  );
}
