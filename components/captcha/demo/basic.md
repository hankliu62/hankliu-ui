---
order: 0
title: 基本
---

基本用法。

````jsx
import { captcha, Button } from '@hankliu/hankliu-ui';

class Card extends React.Component {

  render() {
    return (
      <div>
        <Button onClick={() => {
          captcha.verify().then(code => {
            console.log(code);
          }, err => {
            console.log(err);
          });
        }}>
          验证
        </Button>
      </div>
    );
  }
};

ReactDOM.render(<Card />, mountNode);
````
