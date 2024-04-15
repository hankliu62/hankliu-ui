import * as React from 'react';
import { Link } from 'bisheng/router';
import * as utils from '../../utils';
import packageJson from '../../../../../package.json';
import './Logo.less';
import logo from './logo.svg'

export interface LogoProps {
  isZhCN: boolean;
  location: any;
}

const Logo = ({ isZhCN, location }: LogoProps) => (
  <h1>
    <Link to={utils.getLocalizedPathname('/', isZhCN, location.query)} id="logo">
      <img alt="logo" src={logo} />
      <div className="web-version">{packageJson.version}</div>
    </Link>
  </h1>
);

export default Logo;
