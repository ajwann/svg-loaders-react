import React from 'react'
import image from './rings.svg'
import SVGInline from 'react-svg-inline'

export const Rings = () => {
  return (<SVGInline svg={image} {...this.props} />)
}
