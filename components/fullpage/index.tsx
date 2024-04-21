import InnerFullpage from '@hankliu/rc-fullpage/lib';
import appendDefaultProps from '../_util/appendDefaultProps';

appendDefaultProps();

export * from '@hankliu/rc-fullpage/lib';

const Fullpage: typeof InnerFullpage & { displayName?: string } = InnerFullpage;

if (process.env.NODE_ENV !== 'production') {
  Fullpage.displayName = 'Fullpage';
}

export default Fullpage;
