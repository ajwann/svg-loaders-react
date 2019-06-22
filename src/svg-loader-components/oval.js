import React from 'react'
import image from './oval.svg'
import SVGInline from 'react-svg-inline'

export const Oval = () => {
  return (<SVGInline svg={image} {...this.props} />)
}
