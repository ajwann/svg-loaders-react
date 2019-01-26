import React from 'react'
import image from './puff.svg'
import SVGInline from 'react-svg-inline'

export class Puff extends React.Component {
  render() {
    return(
      <SVGInline svg={image} {...this.props} />
    )
  }
}
