import React from "react"
import "./home.css"
import chadaDance from "../images/chadaDance.png"
import { SiGrubhub } from "react-icons/si"
import grubhub from "../images/ghub.png"
import doordash from "../images/doordash.png"

export const Home = () => {
  return (
    <div className="home">
      <div className="contact-content">
        <div className="contact-items">
          <img src={chadaDance}></img>
          <div className="contact-rows">
          <h2>Hours</h2>
          <h3>Holiday Hours: Closed Dec 23rd - Dec 26th. Reopening Fri Dec 27 @ Noon</h3>
          <div className="inner-content-center-home">
            <div className="lunch">
              <h4>Lunch</h4>
              <p>
                Monday: Closed For Lunch {"\n"} Tuesday: Closed {"\n"}
                Wednesday: Closed For Lunch {"\n"} Thursday: 11:30AM - 3PM {"\n"}
                Friday: 11:30AM - 3PM {"\n"} Saturday: 3PM - 9PM {"\n"}
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
            <p>
            Welcome to Chada Thai: Denver&apos;s First Thai Restaurant!
            </p>
            <p> 
            🌟 Experience Authentic Thai Flavors Since the 1960s 🌟
            </p>
            <p>
            At Chada Thai, we take pride in being Denver&apos;s inaugural Thai restaurant, bringing you the rich and authentic flavors of Thailand. Our legacy dates back to the 1960s, making us a cherished family-owned and operated establishment. What sets us apart is our dedication to providing delicious authentic dishes. Join us for dine-in or takeout today!
            </p>
            <p>
              PLEASE NOTE: We have new hours. Check below for our current business hours.
            </p>
            <h2>Delivery</h2>
            <div className="delivery">
              <p>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.grubhub.com/restaurant/chada-thai-2005-e-17th-ave-denver/321295"
                >
                  <img
                    className="grubhub"
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
                    className="doordash"
                    src={doordash}
                    height="90px"
                    width="100px"
                    style={{ objectFit: "contain", mixBlendMode: "darken" }}
                  ></img>
                </a>
              </p>
            </div>
          </div>
          <div className="location-row">
            <h2>Phone</h2>
            <p>303-320-8582</p>
            <h2>Location</h2>
            <p>
              2005 East 17th Avenue <br /> Denver, CO 80206
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
