import React from 'react'
import image from './circles.svg'
import SVGInline from 'react-svg-inline'

export const Circles = () => {
  return (<SVGInline svg={image} {...this.props} />)
}
