import React from 'react'
import image from './tail-spin.svg'
import SVGInline from 'react-svg-inline'

export class TailSpin extends React.Component {
  render() {
    return(
      <SVGInline svg={image} {...this.props} />
    )
  }
}
