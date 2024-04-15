import React from 'react';
import QueueAnim from 'rc-queue-anim';
import { useIntl } from 'react-intl';
import { Link } from 'bisheng/router';
import lottie from 'lottie-web';
import * as utils from '../utils';

const caseAnData = require('./case.json');

function Banner(props) {
  const { className = 'banner', location } = props;
  const { locale } = useIntl();
  const isZhCN = locale === 'zh-CN';
  const caseRef = React.useRef(null);
  React.useEffect(() => {
    document.getElementById('header')?.classList.add('home-page-header');
    const params = {
      container: caseRef.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: caseAnData,
    };
    lottie.loadAnimation(params);
    return () => {
      document.getElementById('header')?.classList.remove('home-page-header');
    };
  }, []);
  return (
    <div className="home-page-wrapper banner-wrapper" id="banner">
      <div className={`${className} page`}>
        <QueueAnim className="text-wrapper" key="text" type="left">
          <h1 key="h1">HankLiu UI</h1>
          <p key="p">
            简单灵活，让开发变得更高效
          </p>
          <div>
            <Link to={utils.getLocalizedPathname('/components/button/', isZhCN)}>
              <span className="btn">开始使用</span>
            </Link>

          </div>
        </QueueAnim>
        <div ref={caseRef} className="home-img" />
      </div>
    </div>
  );
}

export default Banner;
