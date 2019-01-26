import json from './data.json';
import photo from './photo.jpeg';
import img0 from './0.jpeg';

const kolas = {
  ...json,
  photo,
  gallery: [img0],
};

export default kolas;
