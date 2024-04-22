import AntDrawer, { DrawerProps } from 'antd4x/lib/drawer';
import appendDefaultProps from '../_util/appendDefaultProps';
import React, { useContext, useEffect, useMemo } from 'react';
import { usePanelRef } from '../watermark/context';
import { ConfigContext } from 'antd4x/lib/config-provider';
import classNames from 'classnames';
import uniqueId from 'lodash/uniqueId';

appendDefaultProps();

const HlDrawer = (props: DrawerProps) => {
  const { className, ...rest } = props;
  const prefixCls = useContext(ConfigContext)?.getPrefixCls();
  const panelEvent = usePanelRef(`.${prefixCls}-drawer-content`);
  const onlyOneClassName = useMemo<string>(() => uniqueId(`${prefixCls}-drawer-`), []);

  useEffect(() => {
    // 最大尝试次数
    let count: number = 0;
    if (rest.open || rest.visible) {
      function callPanelEvent() {
        const drawer = document.querySelector(`.${onlyOneClassName}`);
        if (drawer) {
          panelEvent(drawer as HTMLElement);
        } else {
          count++;
          // 最大尝试次数
          count < 10 && setTimeout(callPanelEvent, 1000);
        }
      }

      setTimeout(callPanelEvent, 100);
    }
  }, [rest.open, rest.visible]);

  return <AntDrawer className={classNames(className, onlyOneClassName)} {...rest} />;
};

const Drawer: typeof AntDrawer = Object.assign(HlDrawer, {
  ...AntDrawer,
});

export * from 'antd4x/lib/drawer';
export default Drawer;
