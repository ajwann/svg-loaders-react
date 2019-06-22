import React from 'react'
import image from './hearts.svg'
import SVGInline from 'react-svg-inline'

export const Hearts = () => {
  return (<SVGInline svg={image} {...this.props} />)
}
