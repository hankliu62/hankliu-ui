function stopPropagation(e: any) {
  e.preventDefault();
}
const notAllowDragProps = {
  onDragStart: stopPropagation,
  onDrag: stopPropagation,
  onDragEnd: stopPropagation,
};
export default notAllowDragProps;
