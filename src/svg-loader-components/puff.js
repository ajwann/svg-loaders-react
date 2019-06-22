import React from 'react'
import image from './puff.svg'
import SVGInline from 'react-svg-inline'

export const Puff = () => {
    return (<SVGInline svg={image} {...this.props} />)
}
