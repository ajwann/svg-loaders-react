import React from 'react'
import image from './rings.svg'
import SVGInline from 'react-svg-inline'

export class Rings extends React.Component {
  render() {
    return(
      <SVGInline svg={image} {...this.props} />
    )
  }
}
