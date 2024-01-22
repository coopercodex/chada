import React from "react"
import './map.css'
import { GoogleMap, useLoadScript, MarkerF } from "@react-google-maps/api"

const Map = () => {
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
    <div className="maps">
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={15}
        center={center}
      >
        <MarkerF position={center} onClick={() => window.open(url, "_blank")} />
      </GoogleMap>
    </div>
  )
}

export default Map
