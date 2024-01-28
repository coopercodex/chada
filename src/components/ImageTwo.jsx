import React from 'react'
import { Parallax } from 'react-parallax'
import kitchen from '../images/kitchen.jpg'
import contact from '../images/contact.png'

export const ImageTwo = () => {
  return (
    <Parallax
    className="image"
      bgImage={contact}
      bgImageAlt="chada thai street view"
      strength={-500}
    >
      <div className="content">
        <span className="img-text">Contact Us</span>
      </div>
    </Parallax>
  )
}
