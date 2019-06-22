import React from 'react';
import SVGInline from 'react-svg-inline';
import image from './ball-triangle.svg';

const BallTriangle = props => (
  <SVGInline svg={image} {...props} />
);

export default BallTriangle;
