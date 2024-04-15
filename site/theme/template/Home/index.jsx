import React from 'react';
import { injectIntl } from 'react-intl';
import Banner from './Banner';

// To store style which is only for Home and has conflicts with others.
function getStyle() {
  return `
    .page-wrapper {
      padding: 0;
      height: 100%;
    }
    #logo img { filter: invert(100%); }
    #react-content { background: #000 }
    #header {
      position: fixed;
      box-shadow: none;
      max-width: 1200px;
      width: 100%;
      margin: 20px auto 0;
      padding: 0 24px;
      top: 0;
      left: 0;
      right: 0;
    }
    #header,
    #header .ant-select-selection,
    #header .ant-menu {
      background: transparent;
    }
    #header .ant-menu { display: none; }
    #header #logo {
      padding: 0;
    }
    #header #logo .web-version {
      left: 166px;
    }
    #header #nav .ant-menu-item {
      border-color: transparent;
    }
    #header #nav .ant-menu-item.hide-in-home-page {
      display: none;
    }
    #header .ant-row > div:last-child .header-lang-button {
      margin-right: 0;
    }
    footer .footer-wrap {
      width: 100%;
      padding: 0;
    }
    footer .footer-wrap .ant-row {
      width: 100%;
      max-width: 1200px;
      padding: 86px 24px 93px 24px;
      margin: auto;
    }
    @media only screen and (max-width: 767.99px) {
      #footer .footer-wrap{
        padding: 40px 24px
      }
      footer .footer-wrap .ant-row {
        padding: 0;
      }
    }
  `;
}

/* eslint-disable react/prefer-stateless-function */
class Home extends React.Component {
  render() {
    return (
      <>
          <style dangerouslySetInnerHTML={{ __html: getStyle() }} /> {/* eslint-disable-line */}
          <Banner />
        </>
    );
  }
}

export default injectIntl(Home);
