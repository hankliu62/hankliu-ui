import type { ModalLocale } from 'antd4x/lib/modal/locale';
import { changeConfirmLocale as antdChangeConfirmLocale } from 'antd4x/lib/modal/locale';
import defaultLocale from '../locale-provider/default';

// antd 的modal.methods默认语言为英文，这里调整为中文，同 hank-ui 一致
export default function customAntdChangeConfirmLocale(newLocale?: ModalLocale) {
  antdChangeConfirmLocale(newLocale || defaultLocale.Modal);
}
