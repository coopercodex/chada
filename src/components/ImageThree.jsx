import { Parallax } from "react-parallax"
import padThai from "../images/padThai.jpg"

export const ImageThree = () => (
  <Parallax
  className="image"
    bgImage={padThai}
    bgImageAlt="thai food on table"
    strength={-500}
  >
    <div className="content">
      <span className="img-text">Welcome to thailand</span>
    </div>
  </Parallax>
)
