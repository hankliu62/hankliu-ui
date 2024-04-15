// @ts-nocheck
import defaultLocale from '../locale-provider/default';

let runtimeLocale: any = {
  ...defaultLocale.Input,
};

export function changeLocale(newLocale?: any) {
  if (newLocale) {
    runtimeLocale = {
      ...runtimeLocale,
      ...newLocale,
    };
  } else {
    runtimeLocale = {
      ...defaultLocale.Input,
    };
  }
}

export function getLocale() {
  return runtimeLocale;
}
