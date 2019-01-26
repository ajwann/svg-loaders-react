import React from 'react'
import image from './bars.svg'
import SVGInline from 'react-svg-inline'

export class Bars extends React.Component {
  render() {
    return(
      <SVGInline svg={image} {...this.props} />
    )
  }
}
