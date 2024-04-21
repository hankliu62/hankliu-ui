## @hankliu/hankliu-ui

[![NPM version][npm-image]][npm-url] [![npm download][download-image]][download-url] [![build status][github-actions-image]][github-actions-url] [![Codecov][codecov-image]][codecov-url] [![bundle size][bundlephobia-image]][bundlephobia-url] [![dumi][dumi-image]][dumi-url]

[npm-image]: http://img.shields.io/npm/v/@hankliu/hankliu-ui.svg?style=flat-square
[npm-url]: https://www.npmjs.com/package/@hankliu/hankliu-ui
[travis-image]: https://img.shields.io/travis/hankliu62/hankliu-ui/master?style=flat-square
[github-actions-image]: https://github.com/hankliu62/hankliu-ui/workflows/CI/badge.svg
[github-actions-url]: https://github.com/hankliu62/hankliu-ui/actions
[codecov-image]: https://img.shields.io/codecov/c/github/hankliu62/hankliu-ui/master.svg?style=flat-square
[codecov-url]: https://app.codecov.io/gh/hankliu62/hankliu-ui
[download-image]: https://img.shields.io/npm/dm/@hankliu/hankliu-ui.svg?style=flat-square
[download-url]: https://npmjs.org/package/@hankliu/hankliu-ui
[bundlephobia-url]: https://bundlephobia.com/package/@hankliu/hankliu-ui
[bundlephobia-image]: https://badgen.net/bundlephobia/minzip/@hankliu/hankliu-ui
[dumi-url]: https://github.com/umijs/dumi
[dumi-image]: https://img.shields.io/badge/docs%20by-dumi-blue?style=flat-square

🥭 基于 `AntDesign@4.x` 的一个 `UI` 组件库，一套企业级 `UI` 设计语言和 `React` 组件库

### 安装

```
npm install @hankliu/hankliu-ui --save-dev
```

或者

```
yarn add -D @hankliu/hankliu-ui
```

或者

```
pnpm add -D @hankliu/hankliu-ui
```

### 使用

```tsx
import { Button, ImageCropper } from '@hankliu/hankliu-ui';

const DEFAULT_PROPS = {
  aspectRatios: [
    {
      title: 'free',
    },
    {
      value: 1 / 1,
      title: '1:1',
    },
    {
      value: 2 / 1,
      title: '2:1',
    },
    {
      value: 4 / 3,
      title: '4:3',
    },
  ],
  title: '图像裁剪',
  previewTitle: '此为预览图片',
  tip: (
    <div>
      <div>
        平台支持 JPG、PNG 图片格式;
        <br />
        每张图片文件请保持在 10Mb 以内
      </div>
    </div>
  ),
};

class ImageCropperDefault extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      url: 'https://github.com/hankliu62/hankliu62.github.com/assets/8088864/91a13d0f-4685-411e-90bf-d8ecbec2ab56',
    };
  }

  onChooseImage = () => {
    ImageCropper.selectImage().then((img) => this.setState({ url: img.url }));
  };

  onUpload = (data) => {
    this.setState({
      okButtonProps: { loading: true },
    });

    // 上传操作
    setTimeout(() => {
      this.setState({
        cropperVisible: false,
        okButtonProps: { loading: false },
      });
    }, 3000);
  };

  render() {
    const { cropperProps, okButtonProps, cropperVisible, url } = this.state;
    return (
      <div>
        {cropperVisible && (
          <ImageCropper
            {...cropperProps}
            url={url}
            open={cropperVisible}
            onCancel={() => this.setState({ cropperVisible: false })}
            onOk={this.onUpload}
            onReupload={this.onChooseImage}
            okButtonProps={okButtonProps}
          />
        )}
        <Button
          className="mr-8"
          onClick={() =>
            ImageCropper.selectImage().then((img) => {
              this.setState({ url: img.url, cropperProps: DEFAULT_PROPS, cropperVisible: true });
            })
          }
        >
          裁剪图片
        </Button>
      </div>
    );
  }
}

ReactDOM.render(<ImageCropperDefault />, mountNode);
```

## 特性

- 🍉 基于 `AntDesign@4.x`，具有其所有特性。
- 🍑 新增更多的高质量 `React` 组件，开箱即用。

## 兼容环境

- 现代浏览器和 IE11（需要 [polyfills](https://4x.ant.design/docs/react/getting-started-cn#兼容性)）。
- 支持服务端渲染。
- [Electron](https://www.electronjs.org/)

| [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt="IE / Edge" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br>IE / Edge | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br>Firefox | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br>Chrome | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br>Safari | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/electron/electron_48x48.png" alt="Electron" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br>Electron |
| --- | --- | --- | --- | --- |
| IE11, Edge | last 2 versions | last 2 versions | last 2 versions | last 2 versions |

## 链接

- [首页](https://hankliu62.github.io/hankliu-ui/index-cn)

## 本地开发

克隆到本地开发:

```bash
$ git clone https://github.com/hankliu62/hankliu-ui.git hankliu-ui
$ cd hankliu-ui
$ npm install
$ npm start
```

打开浏览器访问 http://127.0.0.1:6200 。

## 免责声明

本项目只做个人练习以及私人项目使用，非商业用途，如有侵权，请告知本人进行删除。

非商业用途产品，如过 `Fork` 本项目使用于商业用途，造成法律责任，请自行解决，与本人无关。
