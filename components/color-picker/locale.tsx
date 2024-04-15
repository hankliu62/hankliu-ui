interface Local {
  defaultColor: string;
  recentlyColor: string;
}

let runtimeLocale: Local = {
  defaultColor: '默认颜色',
  recentlyColor: '最近使用的颜色',
};

export function changeLocale(newLocale?: Local) {
  if (newLocale) {
    runtimeLocale = {
      ...runtimeLocale,
      ...newLocale,
    };
  } else {
    runtimeLocale = {
      ...runtimeLocale,
    };
  }
}

export function getLocale() {
  return runtimeLocale;
}
