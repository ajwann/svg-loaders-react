import React from 'react'
import image from './grid.svg'
import SVGInline from 'react-svg-inline'

export const Grid = () => {
  return (<SVGInline svg={image} {...this.props} />)
}
