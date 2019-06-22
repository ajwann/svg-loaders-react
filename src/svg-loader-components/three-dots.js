import React from 'react';
import SVGInline from 'react-svg-inline';
import image from './three-dots.svg';

const ThreeDots = props => (
  <SVGInline svg={image} {...props} />
);

export { ThreeDots };
