import React from 'react';
import SVGInline from 'react-svg-inline';
import image from './oval.svg';

const Oval = props => (
  <SVGInline svg={image} {...props} />
);

export { Oval };
