import React from "react"
import "./contact.css"
import elephant from "../images/elephant.png"
import grubhub from "../images/ghub.png"
import doordash from "../images/doordash.png"
import { GoogleMap, useLoadScript, MarkerF } from "@react-google-maps/api"

export const Contact = () => {
  const lib = ["places"]
  const url =
    "https://www.google.com/maps/place/Chada+Thai/@39.7434159,-104.9657565,17z/data=!3m1!4b1!4m6!3m5!1s0x876c793571b2d12f:0x2db7b493f64c8ec0!8m2!3d39.7434118!4d-104.9631816!16s%2Fg%2F1tfb2h48?hl=en-US&entry=ttu"
  const mapContainerStyle = {
    width: "75vw",
    height: "50vh",
  }
  const center = {
    lat: 39.743412,
    lng: -104.963182,
  }

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: import.meta.env.VITE_APP_GOOGLE_API_KEY,
    lib,
  })

  if (loadError) {
    return <div>Error loading maps</div>
  }

  if (!isLoaded) {
    return <div>Loading maps</div>
  }

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
                  className="contact-doordash"
                  src={doordash}
                  height="90px"
                  width="100px"
                  style={{ objectFit: "contain" }}
                ></img>
              </a>
            </p>
          </div>
        </div>

        <div>
          <GoogleMap
            mapContainerStyle={mapContainerStyle}
            zoom={15}
            center={center}
          >
            <MarkerF
              position={center}
              onClick={() => window.open(url, "_blank")}
            />
          </GoogleMap>
        </div>
      </div>
    </div>
  )
}
