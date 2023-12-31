import React from 'react'
import { FaFacebook, FaLinkedin, FaMailBulk, FaPhone, FaSearchLocation, FaTwitter } from 'react-icons/fa'
import './footer.css'

export const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-container'>
        <div className='left'>
          <div className='location'>
            <FaSearchLocation size={20} style={{ color: 'white', marginRight: '2rem' }} />
            <div className='phone'>
              <h3>Denver, CO</h3>
            </div>
          </div>
          <div className='phone'>
            <h3><FaPhone size={20} style={{ color: 'white', marginRight: '2rem' }} />303</h3>
          </div>
          <div className='phone'>
            <h3><FaMailBulk size={20} style={{ color: 'white', marginRight: '2rem' }} />
              <a href="">gmail.com</a></h3>
          </div>
        </div>
        <div className='right'>
          <h4>Stay in touch</h4>
          <div className='social'>
            <a target="_blank" rel="noopener noreferrer" href=''>
              <FaFacebook className='fb' />
            </a>
          </div>
          <div className='bottom'>
            <div className='logo-footer'>
              // logo
            </div>
            <p>
              Copyrights © 2023 by codexDesign
              </p>
          </div>
        </div>
      </div>
    </div>
  )
}
