const Hour = 60 * 60;
const Minute = 60;
export default function secondsToMMSS(second: number) {
  let h = 0;
  let res = Math.round(second);
  if (res > Hour) {
    h = Math.floor(res / Hour);
    res %= Hour;
  }
  let m = 0;
  if (res > Minute) {
    m = Math.floor(res / Minute);
    res %= Minute;
  }
  let str = '';
  if (h) str += h > 9 ? `${h}:` : `0${h}:`;
  if (m) {
    str += m > 9 ? `${m}:` : `0${m}:`;
  } else {
    str += '00:';
  }
  str += res > 9 ? `${res}` : `0${res}`;
  return str;
}
