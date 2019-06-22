import React from 'react';
import SVGInline from 'react-svg-inline';
import image from './puff.svg';

const Puff = props => (
  <SVGInline svg={image} {...props} />
);

export default Puff;
