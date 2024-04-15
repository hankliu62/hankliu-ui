---
order: 2
title: 手动触发
---

可以通过 open 方法触发用户选择文件

````jsx
import { Button, FileSelect, HlImage as Image } from '@hankliu/hankliu-ui';

class BasiceDemo extends React.Component {

  state = {

  };

  openFileSelect = () => {
    this.refs.fs.open();
  }

  handleSelect = (files) => {
    console.log(files);
  }

  render() {
    return (
      <div>
        <FileSelect ref="fs" onSelect={this.handleSelect} accept="image/*" maximum={3}>
          <div className="text-center">
            <Image src="" block className="mb-15"/>
            自定义文案类容，请选择图片上传
          </div>
        </FileSelect>
        <div className="text-center">
          <Button onClick={this.openFileSelect}>FileSelect open</Button>
        </div>
      </div>
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
