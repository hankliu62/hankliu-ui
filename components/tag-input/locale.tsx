import defaultLocale from '../locale-provider/default';

let runtimeLocale: any = {
  ...defaultLocale.Select,
};

export function changeLocale(newLocale?: any) {
  if (newLocale) {
    runtimeLocale = {
      ...runtimeLocale,
      ...newLocale,
    };
  } else {
    runtimeLocale = {
      ...defaultLocale.Select,
    };
  }
}

export function getLocale() {
  return runtimeLocale;
}
