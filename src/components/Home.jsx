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
            <h2>Lunch</h2>
            <p>11AM - 3pm</p>
            <h2>Dinner</h2>
            <p>5pm-8:15pm</p>
            <h2>Closed Tuesday</h2>
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
