import { Parallax } from "react-parallax";
import padThai from "../images/padThai.jpg";
import khaoSoi from "../images/khowsoi.png";

export const ImageThree = () => (
  <Parallax
    className="image"
    bgImage={khaoSoi}
    bgImageAlt="thai food on table"
    strength={-500}
  >
    <div className="content">
      <span className="img-text">The Menu</span>
    </div>
  </Parallax>
);
