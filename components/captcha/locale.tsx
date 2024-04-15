import defaultLocale from '../locale-provider/default';

let runtimeLocale: any = {
  ...defaultLocale.Captcha,
};

export function changeLocale(newLocale?: any) {
  if (newLocale) {
    runtimeLocale = {
      ...runtimeLocale,
      ...newLocale,
    };
  } else {
    runtimeLocale = {
      ...defaultLocale.Captcha,
    };
  }
}

export function getLocale() {
  return runtimeLocale;
}
