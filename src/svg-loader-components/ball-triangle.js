import React from 'react'
import image from './ball-triangle.svg'
import SVGInline from 'react-svg-inline';

export const BallTriangle = () => {
  return(
    <SVGInline svg={image} {...this.props} />
  )
}
