import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'bisheng/router';
import { useIntl } from 'react-intl';
import debounce from 'lodash/debounce';
import { Input, Divider, Row, Col, Card, Typography, Tag, Space } from '@hankliu/hankliu-ui';
import { SearchOutlined } from '@hankliu/icons';
import { getChildren } from 'jsonml.js/lib/utils';
import { getMetaDescription, getLocalizedPathname, getThemeConfig, getMenuItems } from '../utils';
import './ComponentOverview.less';

const onClickCard = pathname => {
  if (window.gtag) {
    window.gtag('event', '点击', {
      event_category: '组件总览卡片',
      event_label: pathname,
    });
  }
};

const reportSearch = debounce(value => {
  if (window.gtag) {
    window.gtag('event', '搜索', {
      event_category: '组件总览卡片',
      event_label: value,
    });
  }
}, 2000);

const { Title } = Typography;
const ComponentOverview = ({
  componentsData = [],
  doc: {
    meta: { title },
    content,
  },
  location,
  utils: { toReactComponent },
}) => {
  const { locale, formatMessage } = useIntl();
  const documentTitle = `${title} - HankLiu Design`;
  const contentChild = getMetaDescription(getChildren(content));
  const themeConfig = getThemeConfig();
  const menuItems = getMenuItems(
    componentsData,
    locale,
    themeConfig.categoryOrder,
    themeConfig.typeOrder,
  );
  const [search, setSearch] = useState('');

  // keydown.enter goto first component
  const sectionRef = React.createRef();
  const onKeyDown = event => {
    if (event.keyCode === 13 && search.trim().length) {
      sectionRef.current?.querySelector('.components-overview-card')?.click();
    }
  };

  return (
    <section className="markdown" ref={sectionRef}>
      <Helmet encodeSpecialCharacters={false}>
        <title>{documentTitle}</title>
        <meta property="og:title" content={documentTitle} />
        {contentChild && <meta name="description" content={contentChild} />}
      </Helmet>
      <h1>{title}</h1>
      {toReactComponent(['section', { className: 'markdown' }].concat(getChildren(content)))}
      <Divider />
      <Input
        value={search}
        placeholder={formatMessage({ id: 'app.components.overview.search' })}
        className="components-overview-search"
        onChange={e => {
          setSearch(e.target.value);
          reportSearch(e.target.value);
        }}
        onKeyDown={onKeyDown}
        autoFocus // eslint-disable-line jsx-a11y/no-autofocus
        suffix={<SearchOutlined />}
      />
      <Divider />
      {menuItems
        .filter(i => i.order > -1)
        .map(group => {
          const components = group.children.filter(
            component =>
              !search.trim() ||
              component.title.toLowerCase().includes(search.trim().toLowerCase()) ||
              (component.subtitle || '').toLowerCase().includes(search.trim().toLowerCase()),
          );
          return components.length ? (
            <div key={group.title} className="components-overview">
              <Title level={2} className="components-overview-group-title">
                <Space align="center">
                  {group.title}
                  <Tag style={{ display: 'block' }}>{components.length}</Tag>
                </Space>
              </Title>
              <Row gutter={[24, 24]}>
                {components
                  .sort((a, b) => a.title.charCodeAt(0) - b.title.charCodeAt(0))
                  .map(component => {
                    const url = `${component.filename
                      .replace(/(\/index)?((\.zh-cn)|(\.en-us))?\.md$/i, '')
                      .toLowerCase()}/`;
                    const href = getLocalizedPathname(url, locale === 'zh-CN', location.query);
                    return (
                      <Col xs={24} sm={12} lg={8} xl={6} key={component.title}>
                        <Link to={href} onClick={() => onClickCard(href.onClickCard)}>
                          <Card
                            size="small"
                            className="components-overview-card"
                            title={
                              <div className="components-overview-title">
                                {component.title} {component.subtitle}
                              </div>
                            }
                          >
                            <div className="components-overview-img">
                              <img src={component.cover || 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAkACQAAD/2wBDAAIBAQIBAQICAgICAgICAwUDAwMDAwYEBAMFBwYHBwcGBwcICQsJCAgKCAcHCg0KCgsMDAwMBwkODw0MDgsMDAz/2wBDAQICAgMDAwYDAwYMCAcIDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAz/wAARCADhALQDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD9zKKKK0AKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKR3WNCzMqqoyWY4AHqTQAtFR291HdRq8Ukcit0Z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'} alt={component.title} />
                            </div>
                          </Card>
                        </Link>
                      </Col>
                    );
                  })}
              </Row>
            </div>
          ) : null;
        })}
    </section>
  );
};

export default ComponentOverview;
