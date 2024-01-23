import React from 'react'
import { Parallax } from 'react-parallax'
import kitchen from '../images/kitchen.jpg'
import panang from '../images/panang.jpg'

export const ImageTwo = () => {
  return (
    <Parallax
    className="image"
      bgImage={panang}
      bgImageAlt="chada thai street view"
      strength={-500}
    >
      <div className="content">
        <span className="img-text">Contact Us</span>
      </div>
    </Parallax>
  )
}
