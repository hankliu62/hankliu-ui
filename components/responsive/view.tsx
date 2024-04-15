import * as React from 'react';

export default function (props: React.HTMLAttributes<HTMLDivElement>) {
  const { className, ...rest } = props;
  return <div className={`hlui-responsive-view ${className || ''}`} {...rest} />;
}
