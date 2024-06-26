import * as React from 'react';
import classNames from 'classnames';
import { FormattedMessage } from 'react-intl';
import { Link } from 'bisheng/router';
import { UnorderedListOutlined } from '@hankliu/icons';
import { Menu } from '@hankliu/hankliu-ui';
import { getEcosystemGroup } from './More';
import * as utils from '../../utils';
import { SharedProps } from './interface';

import './Navigation.less';

export interface NavigationProps extends SharedProps {
  isMobile: boolean;
  isRTL: boolean;
  pathname: string;
  responsive: null | 'narrow' | 'crowded';
  location: { pathname: string; query: any };
  directionText: string;
  showTechUIButton: boolean;
  onLangChange: () => void;
  onDirectionChange: () => void;
}

export default ({
  isZhCN,
  isMobile,
  pathname,
  responsive,
  location,
  directionText,
  showTechUIButton,
  onLangChange,
  onDirectionChange,
}: NavigationProps) => {
  const menuMode = isMobile ? 'inline' : 'horizontal';

  const module = pathname.split('/').slice(0, -1).join('/');
  let activeMenuItem = module || 'home';
  if (location.pathname === 'changelog' || location.pathname === 'changelog-cn') {
    activeMenuItem = 'docs/react';
  } else if (location.pathname === 'docs/resources' || location.pathname === 'docs/resources-cn') {
    activeMenuItem = 'docs/resources';
  }

  let additional: React.ReactNode = null;
  const additionalItems = [
    <Menu.Item key="github">
      <a href="https://github.com/hankliu62/hankliu-ui" target="_blank" rel="noopener noreferrer">
        Github
      </a>
    </Menu.Item>,
    <Menu.Item key="switch-lang" onClick={onLangChange}>
      <FormattedMessage id="app.header.lang" />
    </Menu.Item>,
    <Menu.Item key="switch-direction" onClick={onDirectionChange}>
      {directionText}
    </Menu.Item>,
    getEcosystemGroup(),
  ];

  if (isMobile) {
    additional = additionalItems;
  } else if (responsive === 'crowded') {
    additional = (
      <Menu.SubMenu key="additional" title={<UnorderedListOutlined />}>
        {additionalItems}
      </Menu.SubMenu>
    );
  }

  return (
    <Menu
      className={classNames('menu-site')}
      mode={menuMode}
      selectedKeys={[activeMenuItem]}
      id="nav"
      disabledOverflow
    >
      <Menu.Item key="docs/react">
        <Link to={utils.getLocalizedPathname('/docs/react/introduce', isZhCN, location.query)}>
          <FormattedMessage id="app.header.menu.documentation" />
        </Link>
      </Menu.Item>
      <Menu.Item key="components">
        <Link to={utils.getLocalizedPathname('/components/overview/', isZhCN, location.query)}>
          <FormattedMessage id="app.header.menu.components" />
        </Link>
      </Menu.Item>
      <Menu.Item key="update-tips">
        <Link to={utils.getLocalizedPathname('/update/', isZhCN, location.query)}>
          <FormattedMessage id="app.header.menu.update" />
        </Link>
      </Menu.Item>
      <Menu.Item key="gitlab">
        <a href="https://github.com/hankliu62/hankliu-ui" target="_blank" rel="noreferrer">
          github仓库
        </a>
      </Menu.Item>
      {additional}
    </Menu>
  );
};
