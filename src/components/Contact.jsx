import React from "react"
import "./contact.css"
import elephant from "../images/elephant.png"
import grubhub from "../images/ghub.png"
import doordash from "../images/doordash.png"


export const Contact = () => {


  return (
    <div className="contact">
      <div className="contact-info">
        <img src={elephant}></img>
        <div className="contact-row">
          <h2>Phone</h2>
          <p>303-320-8582</p>
          <h2>Location</h2>
          <p>
            2005 East 17th Avenue <br /> Denver, CO 80206
          </p>
          <h2>Hours</h2>
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
          <h2>Delivery and Pickup</h2>
          <p>For Pickup call us at 303-320-8582</p>
          <div className="contact-delivery">
            <p>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.grubhub.com/restaurant/chada-thai-2005-e-17th-ave-denver/321295"
              >
                <img
                  className="contact-grubhub"
                  src={grubhub}
                  height="90px"
                  width="100px"
                  style={{ objectFit: "contain", mixBlendMode: "darken" }}
                ></img>
              </a>
            </p>
            <p>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.doordash.com/store/chada-thai-denver-914823/"
              >
                <img
                  className="contact-doordash"
                  src={doordash}
                  height="90px"
                  width="100px"
                  style={{ objectFit: "contain", mixBlendMode: "darken" }}
                ></img>
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
