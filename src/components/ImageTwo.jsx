import React from 'react'
import { Parallax } from 'react-parallax'
import kitchen from '../images/kitchen.jpg'

export const ImageTwo = () => {
  return (
    <Parallax
    className="image"
      bgImage={kitchen}
      bgImageAlt="thai food on table"
      strength={-500}
    >
      <div className="content">
        <span className="img-text">Contact Us</span>
      </div>
    </Parallax>
  )
}
