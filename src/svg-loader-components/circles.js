import React from 'react';
import SVGInline from 'react-svg-inline';
import image from './circles.svg';

const Circles = props => (
  <SVGInline svg={image} {...props} />
);

export default Circles;
