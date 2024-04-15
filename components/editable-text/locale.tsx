import defaultLocale from '../locale-provider/default';

let runtimeLocale: any = {
  ...defaultLocale.EditableText,
};

export function changeLocale(newLocale?: any) {
  if (newLocale) {
    runtimeLocale = {
      ...runtimeLocale,
      ...newLocale,
    };
  } else {
    runtimeLocale = {
      ...defaultLocale.EditableText,
    };
  }
}

export function getLocale() {
  return runtimeLocale;
}
