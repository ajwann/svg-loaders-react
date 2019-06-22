import React from 'react'
import image from './spinning-circles.svg'
import SVGInline from 'react-svg-inline'

export const SpinningCircles = () => {
  return (<SVGInline svg={image} {...this.props} />)
}
