// @ts-nocheck
import defaultLocale from '../locale-provider/default';

let runtimeLocale: any = {
  ...defaultLocale.VideoPlayer,
};

export function changeLocale(newLocale?: any) {
  if (newLocale) {
    runtimeLocale = {
      ...runtimeLocale,
      ...newLocale,
    };
  } else {
    runtimeLocale = {
      ...defaultLocale.VideoPlayer,
    };
  }
}

export function getLocale() {
  return runtimeLocale;
}
