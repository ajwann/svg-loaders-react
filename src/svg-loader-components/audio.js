import React from 'react'
import image from './audio.svg'
import SVGInline from 'react-svg-inline'

export const Audio = () => {
  return (<SVGInline svg={image} {...this.props} />)
}
