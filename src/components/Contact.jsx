import React from 'react'
import './contact.css'
import chadaDance from '../images/chadaDance.png'

export const Contact = () => {
  return (
    <div className='contact'>
      <div className="contact-content">
        <div className='contact-items'>
        <img src={chadaDance}></img>
        <div className='contact-rows'>
        <h2>Lunch</h2>
        <p>11AM - 3pm</p>
        <h2>Dinner</h2>
        <p>5pm-8:15pm</p>
        <h2>Closed Tuesday</h2>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero quasi minima omnis sit, delectus dolore perferendis aliquam error dicta ut. Voluptates dolorem accusantium, iure omnis in enim sed possimus quos!</p>
        </div>
        <div className="location-row">
        <h2>Contact</h2>
        <p>303-320-8582 | LinkedIn | IG</p>
          <h2>Location</h2>
          <p>2005 East 17th Avenue <br/> Denver, CO 80206</p>
        </div>
        </div>
      </div>
    </div>
  )
}
