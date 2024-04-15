import collect from 'bisheng/collect';
import MainContent from './MainContent';
import * as utils from '../utils';

function isChangelog(pathname) {
  return pathname.indexOf('changelog') >= 0;
}
function isUpdate(pathname) {
  return pathname.indexOf('update') >= 0;
}

export default collect(async (nextProps) => {
  const { pathname } = nextProps.location;
  const pageDataPath = pathname.replace('-cn', '').split('/');
  let pageData;
  if (isChangelog(pathname)) {
    pageData = nextProps.data.changelog.CHANGELOG;
  } else if (isUpdate(pathname)) {
    pageData = nextProps.data.update.UPDATE;
  } else {
    pageData = nextProps.utils.get(nextProps.data, pageDataPath);
  }

  const errorLabel = '====== error';
  const errorLabelEnd = '====== error end';
  if (!pageData) {
    console.log(errorLabel, 404);
    console.log('pathname', pathname);
    console.log(errorLabelEnd);
    throw 404; // eslint-disable-line no-throw-literal
  }

  const locale = utils.isZhCN(pathname) ? 'zh-CN' : 'en-US';
  let pageDataPromise;
  if (typeof pageData === 'function') {
    pageDataPromise = pageData();
  } else {
    const getData = (pageData[locale] || pageData.index[locale] || pageData.index);
    if (!getData) {
      console.log(errorLabel, '!getData');
      console.log('pathname', pathname);
      console.log('locale', locale);
      console.log(errorLabelEnd);
      throw 404; // eslint-disable-line no-throw-literal
    } else {
      try {
        pageDataPromise = getData();
      } catch (e) {
        console.log(errorLabel, 'getData() error ');
        console.log('pathname', pathname);
        console.log('locale', locale);
        console.log(errorLabelEnd);
        throw 404;
      }
    }
  }

  const demosFetcher = nextProps.utils.get(nextProps.data, [...pageDataPath, 'demo']);
  if (demosFetcher) {
    const [localizedPageData, demos] = await Promise.all([pageDataPromise, demosFetcher()]);
    return { localizedPageData, demos };
  }
  return { localizedPageData: await pageDataPromise };
})(MainContent);
