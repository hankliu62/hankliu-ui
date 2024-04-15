import defaultLocale from '../locale-provider/default';

let runtimeLocale: any = {
  ...defaultLocale.FileSelect,
};

export function changeLocale(newLocale?: any) {
  if (newLocale) {
    runtimeLocale = {
      ...runtimeLocale,
      ...newLocale,
    };
  } else {
    runtimeLocale = {
      ...defaultLocale.FileSelect,
    };
  }
}

export function getLocale() {
  return runtimeLocale;
}
