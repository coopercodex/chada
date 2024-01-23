import React from "react"
import "./footer.css"
import {
  FaFacebook,
  FaLinkedin,
  FaSearchLocation,
} from "react-icons/fa"
import logoGold from '../images/logoGold.png'

export const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <div className="phone">
              <h3>Contact Us</h3>
              <p>
                Location: 2005 East 17th Avenue {"\n"} Denver, CO 80206 {"\n"}
                Phone: 303-320-8582
              </p>
              Email:{" "}
              <a href="mailto:chadathaidenver@gmail.com?subject=Inquiry from Chada Thai">
                chadathaidenver@gmail.com
              </a>
            </div>
          </div>
        </div>
        <div className="center">
          <h3>Hours</h3>
          <div className="inner-content-center">
            <div className="lunch">
              <h4>Lunch</h4>
              <p>
                Monday: Closed For Lunch {"\n"} Tuesday: Closed {"\n"}
                Wednesday: 11:30AM - 3PM {"\n"} Thursday: 11:30AM - 3PM {"\n"}
                Friday: 11:30AM - 3PM {"\n"} SATURDAY: 3PM - 9PM {"\n"}
                Sunday: Closed For Lunch
              </p>
            </div>
            <div className="dinner">
              <h4>Dinner</h4>
              <p>
                Monday: 5PM - 9PM {"\n"}
                Tuesday: Closed {"\n"}
                Wednesday: 5PM - 9PM {"\n"}
                Thursday: 5PM - 9PM {"\n"}
                Friday: 5PM - 9PM {"\n"}
                Saturday: 3PM - 9PM {"\n"}
                Sunday: 5PM - 9PM
              </p>
            </div>
          </div>
        </div>
        <div className="right">
          <h3>Stay in touch</h3>
          <div className="social">
            <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/chadathaidenver/">
              <FaFacebook className="fb" />
            </a>
            <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/company/chada-thai-denver/">
              <FaLinkedin className="linkedin" />
            </a>
          </div>
          <div className="bottom">
            <div className="logo-footer"><img src={logoGold} /></div>
            <p>Copyright © 2024 coopercodex</p>
          </div>
        </div>
      </div>
    </div>
  )
}
