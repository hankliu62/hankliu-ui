export default function generateRandomClass() {
  // Math.random() 生成随机数字, eg: 0.123456
  // .toString(36) 转化成36进制 : "0.4fzyo82mvyr"
  // .slice(-8); 截取最后八位 : "yo82mvyr"
  const str = Math.random().toString(36).slice(-6);
  return `hlui-${str}`;
}
