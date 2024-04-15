import * as React from 'react';
import modal from '../hl-modal';
import Captcha from './Captcha';

export default {
  verify(options: any = {}) {
    const { lang } = options;
    // eslint-disable-next-line compat/compat
    return new Promise((resolve, reject) => {
      const mod = modal.show({
        width: 400,
        centered: true,
        closable: true,
        content: (
          <Captcha
            lang={lang || 'zh-CN'}
            onSuccess={(code) => {
              resolve(code);
              mod.destroy();
            }}
            onError={(err) => reject(err)}
          />
        ),
      });
    });
  },
};
