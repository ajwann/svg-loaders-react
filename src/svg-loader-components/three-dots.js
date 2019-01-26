import React from 'react'
import image from './three-dots.svg'
import SVGInline from 'react-svg-inline'

export class ThreeDots extends React.Component {
  render() {
    return(
      <SVGInline svg={image} {...this.props} />
    )
  }
}
