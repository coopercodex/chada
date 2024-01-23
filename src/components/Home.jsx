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
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero
              quasi minima omnis sit, delectus dolore perferendis aliquam error
              dicta ut. Voluptates dolorem accusantium, iure omnis in enim sed
              possimus quos!
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
                    style={{ objectFit: "contain" }}
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
                    style={{ objectFit: "contain" }}
                  ></img>
                </a>
              </p>
            </div>
          </div>
          <div className="location-row">
            <h2>Contact</h2>
            <p>303-320-8582 | LinkedIn | IG</p>
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
