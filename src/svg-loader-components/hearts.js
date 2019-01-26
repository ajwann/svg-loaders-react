import React from 'react'
import image from './hearts.svg'
import SVGInline from 'react-svg-inline'

export class Hearts extends React.Component {
  render() {
    return(
      <SVGInline svg={image} {...this.props} />
    )
  }
}
