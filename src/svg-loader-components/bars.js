import React from 'react';
import SVGInline from 'react-svg-inline';
import image from './bars.svg';

const Bars = props => (
  <SVGInline svg={image} {...props} />
);

export default Bars;
