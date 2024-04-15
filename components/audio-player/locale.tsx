import defaultLocale from '../locale-provider/default';

let runtimeLocale: any = {
  ...defaultLocale.AudioPlayer,
};

export function changeLocale(newLocale?: any) {
  if (newLocale) {
    runtimeLocale = {
      ...runtimeLocale,
      ...newLocale,
    };
  } else {
    runtimeLocale = {
      ...defaultLocale.AudioPlayer,
    };
  }
}

export function getLocale() {
  return runtimeLocale;
}
