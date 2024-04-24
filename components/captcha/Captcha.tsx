// @ts-nocheck
import React from 'react';
import littleLoad from 'little-loader';
import cs from 'classnames';
import message from '../message';
import { getLocale } from './locale';

declare global {
  interface Window {
    initNECaptcha: any;
  }
}

const YIDUN_SDK_URL = '//cstaticdun.126.net/load.min.js?t=201903281201';
const CAPTCHA_ID = 'fcd9d70927f6d07d36b7ba374da8a4da9dab27eb74ce5734578796a4e781d5e4'
  .split('')
  .filter((item, index) => index % 2 === 0)
  .join('');

export interface CaptchaProps {
  className?: string;
  style?: any;
  mode?: string;
  lang?: string;
  onSuccess?: (code?: any) => void;
  onError?: (err?: any) => void;
}

export default class Captcha extends React.Component<CaptchaProps, any> {
  static defaultProps = {
    mode: 'embed',
  };

  NECaptcha: any;

  captchaEle: any;

  constructor(props: CaptchaProps) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.perInit()
      .then(() => this.init())
      .catch(() => {
        const { onSuccess } = this.props;
        message.error('初始化网易云盾失败');
        if (onSuccess) onSuccess();
      });
  }

  componentWillUnmount() {
    this.NECaptcha && this.NECaptcha.destroy();
  }

  private saveEle = (captchaEle: any) => {
    this.captchaEle = captchaEle;
  };

  perInit() {
    if (window.hasOwnProperty('initNECaptcha')) return Promise.resolve();
    return new Promise<void>((resolve, reject) => {
      littleLoad(YIDUN_SDK_URL, (err: any) => {
        if (err) return reject(err);
        resolve();
      });
    });
  }

  init() {
    const { initNECaptcha } = window;
    const { lang = getLocale().lang, mode } = this.props;
    return new Promise<void>((resolve, reject) => {
      initNECaptcha(
        {
          captchaId: CAPTCHA_ID,
          element: this.captchaEle,
          mode,
          onVerify: this.validateHandler,
          lang,
        },
        (instance: any) => {
          // 初始化成功后得到验证实例instance，可以调用实例的方法
          this.NECaptcha = instance;
          resolve();
        },
        (err: any) => {
          // 初始化失败后触发该函数，err对象描述当前错误信息
          reject(err);
        },
      );
    });
  }

  validateHandler = (err: any, ret: any) => {
    const { onSuccess, onError } = this.props;
    if (err) {
      if (onError) onError(err);
    } else {
      const { validate } = ret;
      if (onSuccess) onSuccess(validate);
    }
  };

  render() {
    const { style, className } = this.props;
    const cls = cs('hlui-captcha-wrap', className);
    return <div ref={this.saveEle} className={cls} style={style} />;
  }
}
