import React from 'react';
import SVGInline from 'react-svg-inline';
import image from './rings.svg';

const Rings = props => (
  <SVGInline svg={image} {...props} />
);

export { Rings };
