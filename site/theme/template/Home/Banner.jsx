import React from 'react';
import QueueAnim from 'rc-queue-anim';
import { useIntl } from 'react-intl';
import ScrollParallax from 'rc-scroll-anim/lib/ScrollParallax';
import Hitu from '@ant-design/hitu';
import BannerImage from './BannerImage';
import { Link } from 'bisheng/router';
import lottie from 'lottie-web';
import * as utils from '../utils';

const ICON_IMAGES = [
  'https://gw.alipayobjects.com/zos/basement_prod/fef2f3d5-9326-48e3-a8f3-a99584efd425.svg',
  'https://gw.alipayobjects.com/zos/basement_prod/95736b64-de90-4fcd-bae9-a827091a247d.svg',
  'https://gw.alipayobjects.com/zos/basement_prod/7002f57b-bf16-4640-8373-2c4cfcfa7f8c.svg',
  'https://gw.alipayobjects.com/zos/basement_prod/29aa8cd8-de97-42b8-a370-f901be43e18a.svg',
  'https://gw.alipayobjects.com/zos/basement_prod/d7bc5cdf-07f9-4ddf-8135-78d3cc6ca009.svg',
  'https://gw.alipayobjects.com/zos/basement_prod/8737ccb7-3b5d-40ca-ae36-6a904047caa4.svg',
  'https://gw.alipayobjects.com/zos/basement_prod/1fdf5981-2d9d-4315-bb84-4590d5c5b989.svg',
  'https://gw.alipayobjects.com/zos/basement_prod/b9d17ebc-2af1-4926-ba1b-c1376ddaa479.svg',
  'https://gw.alipayobjects.com/zos/basement_prod/dcb1b8f8-becd-4f90-ba32-574260a7b18d.svg',
  'https://gw.alipayobjects.com/zos/basement_prod/ba0958ce-b194-4910-84de-7e3274742dbb.svg',
  'https://gw.alipayobjects.com/zos/basement_prod/ad510b94-5f85-4b30-b929-2e3a34ad673c.svg',
  'https://gw.alipayobjects.com/zos/basement_prod/43d010fa-71ac-44e3-8475-bb77d95c331c.svg',
];

const caseAnData = require('./case.json');

// caseAnData.assets = caseAnData.assets.slice(4);

const HanLiuDesign = () => (
  <svg>
    <circle cx="16" cy="16" r="9" fill="#F74455" />
  </svg>
);

HanLiuDesign.width = 32;
HanLiuDesign.height = 32;

const ICONS = ICON_IMAGES.map(href => {
  function Icon() {
    return (
      <svg viewBox="0 0 32 32">
        {/* Image size will follow outer svg size, let's cut to half here */}
        <image href={href} height="16" width="16" />
      </svg>
    );
  }

  Icon.width = 32;
  Icon.height = 32;

  return Icon;
});

function Banner(props) {
  const { className = 'banner', location } = props;
  const { locale } = useIntl();
  const isZhCN = locale === 'zh-CN';
  const caseRef = React.useRef(null);

  const hituRef = React.useRef(null);
  const [loop, setLoop] = React.useState(false);
  const [iconIndex, setIconIndex] = React.useState(-1);
  const Icon = ICONS[iconIndex] || HanLiuDesign;

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
          <h1
            key="h1"
            onMouseEnter={() => {
              setLoop(true);
              if (hituRef.current) {
                hituRef.current.triggerMotion(true);
              }
            }}
            onMouseLeave={() => {
              setLoop(false);
            }}
          >
            HankLiu UI
          </h1>
          <Hitu
            ref={hituRef}
            width={64}
            height={64}
            className="home-card-logo-icon"
            loop={loop}
            defaultPlay={false}
            frames={6}
            onFrame={frame => {
              if (frame === 5) {
                const newIndex = (iconIndex + 1) % ICONS.length;
                setIconIndex(newIndex);
              }
            }}
            shapes={[
              {
                type: 'shape',
                source: Icon,
                frames: [
                  {
                    frame: 0,
                    x: 32,
                    y: 32,
                    scaleX: 1,
                    scaleY: 1,
                    opacity: 1,
                    cubic: Hitu.CUBIC_EASE,
                  },
                ],
              },
            ]}
          />
          <p key="p">
            简单灵活，让开发者变得更高效，让设计者专注于更好的用户体验，创造愉悦的工作体验。
          </p>
          <div>
            <Link to={utils.getLocalizedPathname('/components/button/', isZhCN)}>
              <span className="btn">开始使用</span>
            </Link>

          </div>
        </QueueAnim>
        <div ref={caseRef} className="home-img" />
        <div className="img-wrapper" key="image">
          <ScrollParallax
            location="banner"
            component={BannerImage}
            animation={{ playScale: [1, 1.5], y: 80 }}
          />
        </div>
      </div>
    </div>
  );
}

export default Banner;
