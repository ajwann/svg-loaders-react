import React from 'react'
import image from './spinning-circles.svg'
import SVGInline from 'react-svg-inline'

export class SpinningCircles extends React.Component {
  render() {
    return(
      <SVGInline svg={image} {...this.props} />
    )
  }
}
