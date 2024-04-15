export default function () {
  if (typeof window !== 'object') return false
  return "ActiveXObject" in window;
}
