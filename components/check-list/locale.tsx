import defaultLocale from '../locale-provider/default';

let runtimeLocale: any = {
  ...defaultLocale.CheckList,
};

export function changeLocale(newLocale?: any) {
  if (newLocale) {
    runtimeLocale = {
      ...runtimeLocale,
      ...newLocale,
    };
  } else {
    runtimeLocale = {
      ...defaultLocale.CheckList,
    };
  }
}

export function getLocale() {
  return runtimeLocale;
}
