import ConfigProvider from 'antd4x/lib/config-provider';

const defaultGetPrefixCls = (suffixCls?: string, customizePrefixCls?: string) => {
  if (customizePrefixCls) return customizePrefixCls;

  return suffixCls ? `hlui-${suffixCls}` : 'hlui';
};

let isSetDefaultGetPrefixCls = false;
function appendDefaultProps(): void {
  if (isSetDefaultGetPrefixCls) {
    return;
  }
  ConfigProvider.config({
    prefixCls: 'hlui',
  });
  // @ts-ignore
  // eslint-disable-next-line no-underscore-dangle
  ConfigProvider.ConfigContext._currentValue.getPrefixCls = defaultGetPrefixCls;
  // @ts-ignore
  // eslint-disable-next-line no-underscore-dangle
  ConfigProvider.ConfigContext._currentValue2.getPrefixCls = defaultGetPrefixCls;
  isSetDefaultGetPrefixCls = true;
}
export default appendDefaultProps;
