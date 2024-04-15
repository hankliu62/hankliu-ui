---
order: 1
title: 自定义容器
---

可以自定义容器

````jsx
import { FileSelect, Button, HlImage as Image } from '@hankliu/hankliu-ui';

class BasiceDemo extends React.Component {

  state = {

  };

  handleSelect = (files) => {
    console.log(files);
  }

  render() {
    return (
      <FileSelect onSelect={this.handleSelect} accept=".jpg" drawable={false}>
        <div className="text-center">
          <Image src="" block className="mb-15"/>
          <p className="mb-10">自定义文案类容，请选择图片上传</p>
          <Button>点击上传</Button>
        </div>
      </FileSelect>
    );
  }
}

ReactDOM.render(<BasiceDemo />, mountNode);

````

<style>
.text-center {
  text-align: center;
}
</style>
