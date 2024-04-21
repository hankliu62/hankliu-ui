---
order: 0
title: 基本
---

全屏滚动组件，支持显示面板指示点，点击面板指示点会跳转到指定单页。

```jsx
import { Fullpage, Button, Divider, Breadcrumb } from '@hankliu/hankliu-ui';

const FullPageBasicDemo = () => {
  const Options = {
    activeClass: 'active', // the class that is appended to the sections links
    anchors: [
      'resume-index',
      'resume-introduction',
      'resume-skill',
      'resume-experience',
      'resume-project',
      'resume-article',
    ], // the anchors for each sections
    shortcutKey: true, // use arrow keys
    className: 'resume-properties-section-container', // the class name for the section container
    delay: 1000, // the scroll animation speed
    dots: true, // use dots navigatio
    scrollBar: false, // use the browser default scrollbar
    sectionClassName: 'resume-properties-section resume-section-container', // the section class name
    sectionPaddingTop: '0', // the section top padding
    sectionPaddingBottom: '0', // the section bottom padding
    verticalAlign: false, // align the content of each section vertical
    touchable: true,
  };

  const Items = [
    'ResumeIndex',
    'ResumeIntroduction',
    'ResumeSkill',
    'ResumeExperience',
    'ResumeProject',
    'ResumeArticle',
  ];

  const Colors = ['#fcba85', '#e1105e', '#e6f952', '#23d2a6', '#4414bf', '#2899aa'];

  const renderResumeItem = (item, index) => {
    const divStyled = {
      backgroundColor: `${Colors[index]}`,
      mixBlendMode: 'difference',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      boxSizing: 'border-box',
    };
    return <div key={item} style={divStyled}>{item}</div>;
  };

  const outStyled = {
    height: '100vh',
    border: '1px solid #ddd',
    borderRadius: '2px',
    overflowY: 'hidden',
  };

  React.useEffect(() => {
    function reset() {
      if (document.querySelector('body')!.style.overflow === 'hidden') {
        document.querySelector('body')!.style.overflow = 'auto';
      }
      setTimeout(() => {
        reset();
      }, 300);
    }

    reset();
  }, []);

  const onFullScreen = () => {
    document.querySelector('.hlui-fullpage').requestFullscreen();
  };

  return (
    <>
      <Breadcrumb>
        {Items.map((item) => (<Breadcrumb.Item key={item}>{item}</Breadcrumb.Item>))}
      </Breadcrumb>

      <Divider />

      <div style={outStyled}>
        <Fullpage {...Options}>
          {Items.map((item, index) => (
            <Fullpage.Section
              id={item}
              className={item.replace(/(?!\b)([A-Z])/g, '-$1').toLowerCase()}
              key={item}
            >
              {renderResumeItem(item, index)}
            </Fullpage.Section>
          ))}
        </Fullpage>
      </div>

      <Divider />

      <Button style={{ marginTop: '10px' }} onClick={onFullScreen}>
        全屏
      </Button>
    </>
  );
}

ReactDOM.render(<FullPageBasicDemo />, mountNode);
```
