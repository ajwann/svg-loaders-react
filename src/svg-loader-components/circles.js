import React from 'react'
import image from './circles.svg'
import SVGInline from 'react-svg-inline'

export class Circles extends React.Component {
  render() {
    return(
      <SVGInline svg={image} {...this.props} />
    )
  }
}
