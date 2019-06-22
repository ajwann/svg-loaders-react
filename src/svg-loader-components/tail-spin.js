import React from 'react';
import SVGInline from 'react-svg-inline';
import image from './tail-spin.svg';

const TailSpin = props => (
  <SVGInline svg={image} {...props} />
);

export default TailSpin;
