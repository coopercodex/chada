import { Parallax } from "react-parallax"
import thaiTable from "../images/thaiTable.jpg"
import foodBanner from '../images/foodBanner.png'

export const ImageOne = () => (
  <Parallax
  className="image"
    bgImage={foodBanner}
    bgImageAlt="thai food on table"
    strength={200}
  >
    <div className="content">
      <span className="img-text">Welcome to Chada Thai</span>
    </div>
  </Parallax>
)
