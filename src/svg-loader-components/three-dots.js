import React from 'react'
import image from './three-dots.svg'
import SVGInline from 'react-svg-inline'

export const ThreeDots = () => {
  return (<SVGInline svg={image} {...this.props} />)
}
