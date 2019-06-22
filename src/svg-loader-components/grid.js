import React from 'react';
import SVGInline from 'react-svg-inline';
import image from './grid.svg';

const Grid = props => (
  <SVGInline svg={image} {...props} />
);

export default Grid;
