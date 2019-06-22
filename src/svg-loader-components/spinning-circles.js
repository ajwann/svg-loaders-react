import React from 'react';
import SVGInline from 'react-svg-inline';
import image from './spinning-circles.svg';

const SpinningCircles = props => (
  <SVGInline svg={image} {...props} />
);

export default SpinningCircles;
