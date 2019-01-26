import React from 'react'
import image from './oval.svg'
import SVGInline from 'react-svg-inline'

export class Oval extends React.Component {
  render() {
    return(
      <SVGInline svg={image} {...this.props} />
    )
  }
}
