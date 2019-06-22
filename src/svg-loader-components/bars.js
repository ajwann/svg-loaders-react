import React from 'react'
import image from './bars.svg'
import SVGInline from 'react-svg-inline'

export const Bars = () => {
  return (<SVGInline svg={image} {...this.props} />)
}
