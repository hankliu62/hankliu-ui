import { EventHandler } from 'react';

const stopPropagation: EventHandler<any> = (e) => {
  e.stopPropagation();
  e.preventDefault();
};
export default stopPropagation;
