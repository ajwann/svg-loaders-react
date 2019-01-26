import React from 'react'
import image from './ball-triangle.svg'
import SVGInline from 'react-svg-inline';

export class BallTriangle extends React.Component {
  render() {
    return(
      <SVGInline svg={image} {...this.props} />
    )
  }
}
