import React from 'react';
import SVGInline from 'react-svg-inline';
import image from './hearts.svg';

const Hearts = props => (
  <SVGInline svg={image} {...props} />
);

export { Hearts };
