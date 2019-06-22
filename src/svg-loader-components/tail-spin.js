import React from 'react'
import image from './tail-spin.svg'
import SVGInline from 'react-svg-inline'

export const TailSpin = () => {
  return (<SVGInline svg={image} {...this.props} />)
}
