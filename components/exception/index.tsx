import InnerException from '@hankliu/rc-exception/lib';
import appendDefaultProps from '../_util/appendDefaultProps';

appendDefaultProps();

export * from '@hankliu/rc-exception/lib';

const Exception: typeof InnerException & { displayName?: string } = InnerException;

if (process.env.NODE_ENV !== 'production') {
  Exception.displayName = 'Fullpage';
}

export default Exception;
