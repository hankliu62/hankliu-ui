import * as React from 'react';
import collect from 'bisheng/collect';
import { useIntl } from 'react-intl';
import Article from '../Content/Article';
import Footer from '../Layout/Footer';
import * as utils from '../utils';
import './index.less';

type ContentUnit = string | Record<string, any> | ContentUnit[];

interface PageData {
  meta: {
    order?: number;
    title: string;
    filename: string;
  };
  content: ContentUnit[];
  toc: any[];
}

interface PagesData {
  'docs/resources': {
    docs: {
      resources: {
        [locale: string]: () => Promise<PageData>;
      };
    };
  };
}

interface ResourcesProps {
  location: {
    pathname: string;
    query: object;
  };
  data: PagesData;
  localizedPageData: PageData;
  utils: {
    toReactComponent: (content: any[]) => React.ReactElement;
    get: (data: PagesData, path: string[]) => any;
  };
}

function Resources(props: ResourcesProps) {
  const { localizedPageData, location } = props;
  const { locale } = useIntl();

  return (
    <div id="single-page">
      <Article
        {...props}
        content={{
          ...localizedPageData,
        }}
        intl={{ locale }}
        titleRegionClassName="title-region"
      />

      <Footer location={location} />
    </div>
  );
}
function isUpdate(pathname: string) {
  return pathname.indexOf('update') >= 0;
}
export default collect(async (nextProps: ResourcesProps) => {
  const { pathname } = nextProps.location;
  const pageDataPath = pathname.replace('-cn', '').split('/');
  const pageData = isUpdate(pathname) ? nextProps.data.update.UPDATE : nextProps.utils.get(nextProps.data, pageDataPath);

  const locale = utils.isZhCN(pathname) ? 'zh-CN' : 'en-US';
  const pageDataPromise = pageData[locale]();
  return { localizedPageData: await pageDataPromise };
})(Resources);
