---
order: 0
title:
  zh-CN: 基本用法
  en-US: basic Usage
---

## zh-CN

雪碧图

## en-US

sprite preview

```jsx
import { CardSprite } from '@hankliu/hankliu-ui';

const sprite = {
  mode: 'percentage',
  fillColor: [0, 0, 0],
  gridSize: [5, 5],
  grid_size: [5, 5],
  groups: [
    {
      end_at: 6.551724137931035,
      file_url: require('./basic-img/cbcb0c89-sprite-1.0.0-0.jpg'),
      oss_obj_name: 'cbcb0c89-sprite-1.0.0-0.jpg',
      startTime: 0,
      endTime: 6.551724137931035,
      start_at: 0,
    },
    {
      end_at: 13.10344827586207,
      file_url: require('./basic-img/cbcb0c89-sprite-1.0.0-1.jpg'),
      oss_obj_name: 'cbcb0c89-sprite-1.0.0-1.jpg',
      startTime: 6.551724137931035,
      endTime: 13.10344827586207,
      start_at: 6.551724137931035,
    },
    {
      end_at: 19.655172413793103,
      file_url: require('./basic-img/cbcb0c89-sprite-1.0.0-2.jpg'),
      oss_obj_name: 'cbcb0c89-sprite-1.0.0-2.jpg',
      startTime: 13.10344827586207,
      endTime: 19.655172413793103,
      start_at: 13.10344827586207,
    },
    {
      end_at: 26.241379310344826,
      file_url: require('./basic-img/cbcb0c89-sprite-1.0.0-3.jpg'),
      oss_obj_name: 'cbcb0c89-sprite-1.0.0-3.jpg',
      startTime: 19.655172413793103,
      endTime: 26.241379310344826,
      start_at: 19.655172413793103,
    },
    {
      end_at: 32.793103448275865,
      file_url: require('./basic-img/cbcb0c89-sprite-1.0.0-4.jpg'),
      oss_obj_name: 'cbcb0c89-sprite-1.0.0-4.jpg',
      startTime: 26.241379310344826,
      endTime: 32.793103448275865,
      start_at: 26.241379310344826,
    },
    {
      end_at: 39.3448275862069,
      file_url: require('./basic-img/cbcb0c89-sprite-1.0.0-5.jpg'),
      oss_obj_name: 'cbcb0c89-sprite-1.0.0-5.jpg',
      startTime: 32.793103448275865,
      endTime: 39.3448275862069,
      start_at: 32.793103448275865,
    },
    {
      end_at: 45.93103448275862,
      file_url: require('./basic-img/cbcb0c89-sprite-1.0.0-6.jpg'),
      oss_obj_name: 'cbcb0c89-sprite-1.0.0-6.jpg',
      startTime: 39.3448275862069,
      endTime: 45.93103448275862,
      start_at: 39.3448275862069,
    },
    {
      end_at: 52.48275862068965,
      file_url: require('./basic-img/cbcb0c89-sprite-1.0.0-7.jpg'),
      oss_obj_name: 'cbcb0c89-sprite-1.0.0-7.jpg',
      startTime: 45.93103448275862,
      endTime: 52.48275862068965,
      start_at: 45.93103448275862,
    },
    {
      end_at: 59.03448275862069,
      file_url: require('./basic-img/cbcb0c89-sprite-1.0.0-8.jpg'),
      oss_obj_name: 'cbcb0c89-sprite-1.0.0-8.jpg',
      startTime: 52.48275862068965,
      endTime: 59.03448275862069,
      start_at: 52.48275862068965,
    },
    {
      end_at: 65.62068965517241,
      file_url: require('./basic-img/cbcb0c89-sprite-1.0.0-9.jpg'),
      oss_obj_name: 'cbcb0c89-sprite-1.0.0-9.jpg',
      startTime: 59.03448275862069,
      endTime: 65.62068965517241,
      start_at: 59.03448275862069,
    },
    {
      end_at: 72.17241379310344,
      file_url: require('./basic-img/cbcb0c89-sprite-1.0.0-10.jpg'),
      oss_obj_name: 'cbcb0c89-sprite-1.0.0-10.jpg',
      startTime: 65.62068965517241,
      endTime: 72.17241379310344,
      start_at: 65.62068965517241,
    },
    {
      end_at: 78.72413793103448,
      file_url: require('./basic-img/cbcb0c89-sprite-1.0.0-11.jpg'),
      oss_obj_name: 'cbcb0c89-sprite-1.0.0-11.jpg',
      startTime: 72.17241379310344,
      endTime: 78.72413793103448,
      start_at: 72.17241379310344,
    },
    {
      end_at: 85.3103448275862,
      file_url: require('./basic-img/cbcb0c89-sprite-1.0.0-12.jpg'),
      oss_obj_name: 'cbcb0c89-sprite-1.0.0-12.jpg',
      startTime: 78.72413793103448,
      endTime: 85.3103448275862,
      start_at: 78.72413793103448,
    },
    {
      end_at: 91.86206896551724,
      file_url: require('./basic-img/cbcb0c89-sprite-1.0.0-13.jpg'),
      oss_obj_name: 'cbcb0c89-sprite-1.0.0-13.jpg',
      startTime: 85.3103448275862,
      endTime: 91.86206896551724,
      start_at: 85.3103448275862,
    },
    {
      end_at: 98.41379310344827,
      file_url: require('./basic-img/cbcb0c89-sprite-1.0.0-14.jpg'),
      oss_obj_name: 'cbcb0c89-sprite-1.0.0-14.jpg',
      startTime: 91.86206896551724,
      endTime: 98.41379310344827,
      start_at: 91.86206896551724,
    },
    {
      end_at: 105,
      file_url: require('./basic-img/cbcb0c89-sprite-1.0.0-15.jpg'),
      oss_obj_name: 'cbcb0c89-sprite-1.0.0-15.jpg',
      startTime: 98.41379310344827,
      endTime: 105,
      start_at: 98.41379310344827,
    },
    {
      end_at: 111.55172413793103,
      file_url: require('./basic-img/cbcb0c89-sprite-1.0.0-16.jpg'),
      oss_obj_name: 'cbcb0c89-sprite-1.0.0-16.jpg',
      startTime: 105,
      endTime: 111.55172413793103,
      start_at: 105,
    },
    {
      end_at: 118.10344827586206,
      file_url: require('./basic-img/cbcb0c89-sprite-1.0.0-17.jpg'),
      oss_obj_name: 'cbcb0c89-sprite-1.0.0-17.jpg',
      startTime: 111.55172413793103,
      endTime: 118.10344827586206,
      start_at: 111.55172413793103,
    },
    {
      end_at: 124.6551724137931,
      file_url: require('./basic-img/cbcb0c89-sprite-1.0.0-18.jpg'),
      oss_obj_name: 'cbcb0c89-sprite-1.0.0-18.jpg',
      startTime: 118.10344827586206,
      endTime: 124.6551724137931,
      start_at: 118.10344827586206,
    },
    {
      end_at: 131.24137931034483,
      file_url: require('./basic-img/cbcb0c89-sprite-1.0.0-19.jpg'),
      oss_obj_name: 'cbcb0c89-sprite-1.0.0-19.jpg',
      startTime: 124.6551724137931,
      endTime: 131.24137931034483,
      start_at: 124.6551724137931,
    },
    {
      end_at: 137.79310344827587,
      file_url: require('./basic-img/cbcb0c89-sprite-1.0.0-20.jpg'),
      oss_obj_name: 'cbcb0c89-sprite-1.0.0-20.jpg',
      startTime: 131.24137931034483,
      endTime: 137.79310344827587,
      start_at: 131.24137931034483,
    },
    {
      end_at: 144.3448275862069,
      file_url: require('./basic-img/cbcb0c89-sprite-1.0.0-21.jpg'),
      oss_obj_name: 'cbcb0c89-sprite-1.0.0-21.jpg',
      startTime: 137.79310344827587,
      endTime: 144.3448275862069,
      start_at: 137.79310344827587,
    },
    {
      end_at: 150.9310344827586,
      file_url: require('./basic-img/cbcb0c89-sprite-1.0.0-22.jpg'),
      oss_obj_name: 'cbcb0c89-sprite-1.0.0-22.jpg',
      startTime: 144.3448275862069,
      endTime: 150.9310344827586,
      start_at: 144.3448275862069,
    },
    {
      end_at: 157.48275862068965,
      file_url: require('./basic-img/cbcb0c89-sprite-1.0.0-23.jpg'),
      oss_obj_name: 'cbcb0c89-sprite-1.0.0-23.jpg',
      startTime: 150.9310344827586,
      endTime: 157.48275862068965,
      start_at: 150.9310344827586,
    },
    {
      end_at: 164.0344827586207,
      file_url: require('./basic-img/cbcb0c89-sprite-1.0.0-24.jpg'),
      oss_obj_name: 'cbcb0c89-sprite-1.0.0-24.jpg',
      startTime: 157.48275862068965,
      endTime: 164.0344827586207,
      start_at: 157.48275862068965,
    },
    {
      end_at: 170.6206896551724,
      file_url: require('./basic-img/cbcb0c89-sprite-1.0.0-25.jpg'),
      oss_obj_name: 'cbcb0c89-sprite-1.0.0-25.jpg',
      startTime: 164.0344827586207,
      endTime: 170.6206896551724,
      start_at: 164.0344827586207,
    },
    {
      end_at: 177.17241379310346,
      file_url: require('./basic-img/cbcb0c89-sprite-1.0.0-26.jpg'),
      oss_obj_name: 'cbcb0c89-sprite-1.0.0-26.jpg',
      startTime: 170.6206896551724,
      endTime: 177.17241379310346,
      start_at: 170.6206896551724,
    },
    {
      end_at: 183.72413793103448,
      file_url: require('./basic-img/cbcb0c89-sprite-1.0.0-27.jpg'),
      oss_obj_name: 'cbcb0c89-sprite-1.0.0-27.jpg',
      startTime: 177.17241379310346,
      endTime: 183.72413793103448,
      start_at: 177.17241379310346,
    },
    {
      end_at: 190.3103448275862,
      file_url: require('./basic-img/cbcb0c89-sprite-1.0.0-28.jpg'),
      oss_obj_name: 'cbcb0c89-sprite-1.0.0-28.jpg',
      startTime: 183.72413793103448,
      endTime: 190.3103448275862,
      start_at: 183.72413793103448,
    },
    {
      end_at: 196.86206896551724,
      file_url: require('./basic-img/cbcb0c89-sprite-1.0.0-29.jpg'),
      oss_obj_name: 'cbcb0c89-sprite-1.0.0-29.jpg',
      startTime: 190.3103448275862,
      endTime: 196.86206896551724,
      start_at: 190.3103448275862,
    },
    {
      end_at: 203.41379310344828,
      file_url: require('./basic-img/cbcb0c89-sprite-1.0.0-30.jpg'),
      oss_obj_name: 'cbcb0c89-sprite-1.0.0-30.jpg',
      startTime: 196.86206896551724,
      endTime: 203.41379310344828,
      start_at: 196.86206896551724,
    },
    {
      end_at: 210,
      file_url: require('./basic-img/cbcb0c89-sprite-1.0.0-31.jpg'),
      oss_obj_name: 'cbcb0c89-sprite-1.0.0-31.jpg',
      startTime: 203.41379310344828,
      endTime: 210,
      start_at: 203.41379310344828,
    },
    {
      end_at: 216.55172413793102,
      file_url: require('./basic-img/cbcb0c89-sprite-1.0.0-32.jpg'),
      oss_obj_name: 'cbcb0c89-sprite-1.0.0-32.jpg',
      startTime: 210,
      endTime: 216.55172413793102,
      start_at: 210,
    },
    {
      end_at: 223.10344827586206,
      file_url: require('./basic-img/cbcb0c89-sprite-1.0.0-33.jpg'),
      oss_obj_name: 'cbcb0c89-sprite-1.0.0-33.jpg',
      startTime: 216.55172413793102,
      endTime: 223.10344827586206,
      start_at: 216.55172413793102,
    },
    {
      end_at: 229.68965517241378,
      file_url: require('./basic-img/cbcb0c89-sprite-1.0.0-34.jpg'),
      oss_obj_name: 'cbcb0c89-sprite-1.0.0-34.jpg',
      startTime: 223.10344827586206,
      endTime: 229.68965517241378,
      start_at: 223.10344827586206,
    },
    {
      end_at: 236.24137931034483,
      file_url: require('./basic-img/cbcb0c89-sprite-1.0.0-35.jpg'),
      oss_obj_name: 'cbcb0c89-sprite-1.0.0-35.jpg',
      startTime: 229.68965517241378,
      endTime: 236.24137931034483,
      start_at: 229.68965517241378,
    },
    {
      end_at: 242.79310344827587,
      file_url: require('./basic-img/cbcb0c89-sprite-1.0.0-36.jpg'),
      oss_obj_name: 'cbcb0c89-sprite-1.0.0-36.jpg',
      startTime: 236.24137931034483,
      endTime: 242.79310344827587,
      start_at: 236.24137931034483,
    },
    {
      end_at: 249.3448275862069,
      file_url: require('./basic-img/cbcb0c89-sprite-1.0.0-37.jpg'),
      oss_obj_name: 'cbcb0c89-sprite-1.0.0-37.jpg',
      startTime: 242.79310344827587,
      endTime: 249.3448275862069,
      start_at: 242.79310344827587,
    },
    {
      end_at: 254.337,
      file_url: require('./basic-img/cbcb0c89-sprite-1.0.0-38.jpg'),
      oss_obj_name: 'cbcb0c89-sprite-1.0.0-38.jpg',
      startTime: 249.3448275862069,
      endTime: 254.337,
      start_at: 249.3448275862069,
    },
    {
      end_at: 254.337,
      file_url: require('./basic-img/cbcb0c89-sprite-1.0.0-39.jpg'),
      oss_obj_name: 'cbcb0c89-sprite-1.0.0-39.jpg',
      startTime: 255.9310344827586,
      endTime: 254.337,
      start_at: 255.9310344827586,
    },
  ],
  interval: 0.1,
  block_size: [160, 90],
  blockSize: [160, 90],
  fill_color: [0, 0, 0],
};

class Comp extends React.Component {
  render() {
    return (
      <div style={{ width: 320, height: 180, position: 'relative', boxShadow: '0 0 0 2px grey' }}>
        <img
          style={{ objectFit: 'contain', width: '100%', height: '100%' }}
          src={sprite.groups[0].file_url}
        />
        <CardSprite sprite={sprite} />
      </div>
    );
  }
}
ReactDOM.render(<Comp />, mountNode);
```
