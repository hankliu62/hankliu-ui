export default function getScrollbarWidth($current?: HTMLElement) {
  // 在非浏览器环境返回 0
  if (document === undefined) return 0;
  if (!$current) $current = document.body;
  // Create the measurement node
  const scrollDiv = document.createElement('div');
  scrollDiv.className = 'hlui-scrollbar-measure';
  scrollDiv.innerHTML = '<div></div>';
  $current.appendChild(scrollDiv);
  // Get the scrollbar width
  const width = scrollDiv.offsetWidth - scrollDiv.clientWidth;
  // Delete the DIV
  $current.removeChild(scrollDiv);
  return width;
}
