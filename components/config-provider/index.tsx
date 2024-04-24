import * as React from 'react';
import ConfigProvider from 'antd4x/lib/config-provider';
import type { ConfigProviderProps } from 'antd4x/lib/config-provider';

import customAntdChangeConfirmLocale from '../hl-modal/customAntdChangeConfirmLocale';
import { changeConfirmLocale } from '../hl-modal/locale';
import { changeLocale as changeFileSelectLocale } from '../file-select/locale';
import { changeLocale as changeCaptchaLocale } from '../captcha/locale';
import { changeLocale as changeVPLocale } from '../video-player/locale';
import { changeLocale as changeGalleryLocale } from '../gallery/locale';
import { changeLocale as changeCheckListLocale } from '../check-list/locale';
import { changeLocale as changeColorPickerLocale } from '../color-picker/locale';
import { changeLocale as changeInputPhoneLocale } from '../input-phone/locale';

import type { HlLocale } from '../locale/zh_CN';

export * from 'antd4x/lib/config-provider';

interface HlConfigProviderProps extends ConfigProviderProps {
  locale: HlLocale;
}

function initLocale(locale: HlLocale) {
  customAntdChangeConfirmLocale(locale?.Modal);
  changeConfirmLocale(locale?.Modal);
  changeFileSelectLocale(locale?.FileSelect);
  changeCaptchaLocale(locale?.Captcha);
  changeVPLocale(locale?.VideoPlayer);
  changeGalleryLocale(locale?.Gallery);
  changeCheckListLocale(locale?.CheckList);
  changeColorPickerLocale(locale?.ColorPicker);
  changeInputPhoneLocale(locale?.InputPhone);
}

const HlConfigProvider: React.FC<HlConfigProviderProps> = (props) => {
  const { locale } = props;
  initLocale(locale);
  React.useEffect(
    () => () => {
      setTimeout(() => {
        initLocale(locale);
      }, 10);
    },
    [],
  );
  return <ConfigProvider {...props} />;
};

const { ConfigContext, SizeContext, config } = ConfigProvider;
const HlInnerConfigProvider = Object.assign(HlConfigProvider, {
  ConfigContext,
  SizeContext,
  config,
});

export default HlInnerConfigProvider;
