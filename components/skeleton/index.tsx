import Skeleton from 'antd4x/lib/skeleton';
import appendDefaultProps from '../_util/appendDefaultProps';
import Block from './Block';

export * from 'antd4x/lib/skeleton';
appendDefaultProps();

type HlSkeletonType = typeof Skeleton & {
  Block: typeof Block;
};

const HlSkeleton: HlSkeletonType = Object.assign(Skeleton, {
  Block,
});

export default HlSkeleton;
