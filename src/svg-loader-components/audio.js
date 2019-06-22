import React from 'react';
import SVGInline from 'react-svg-inline';
import image from './audio.svg';

const Audio = props => (
  <SVGInline svg={image} {...props} />
)

export { Audio };
