import { Parallax } from "react-parallax"
import thaiTable from "../images/thaiTable.jpg"

export const ImageOne = () => (
  <Parallax
  className="image"
    bgImage={thaiTable}
    bgImageAlt="thai food on table"
    strength={-200}
  >
    <div className="content">
      <span className="img-text">Welcome to thailand</span>
    </div>
  </Parallax>
)
