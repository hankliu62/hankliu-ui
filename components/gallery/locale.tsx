// @ts-nocheck
import defaultLocale from '../locale-provider/default';

let runtimeLocale: any = {
  ...defaultLocale.Gallery,
};

export function changeLocale(newLocale?: any) {
  if (newLocale) {
    runtimeLocale = {
      ...runtimeLocale,
      ...newLocale,
    };
  } else {
    runtimeLocale = {
      ...defaultLocale.Gallery,
    };
  }
}

export function getLocale() {
  return runtimeLocale;
}
