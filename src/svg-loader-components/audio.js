import React from 'react'
import image from './audio.svg'
import SVGInline from 'react-svg-inline'

export class Audio extends React.Component {
  render() {
    return(
      <SVGInline svg={image} {...this.props} />
    )
  }
}
