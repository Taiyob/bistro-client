import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import sld1 from "../../../assets/home/01.jpg";
import sld2 from "../../../assets/home/02.jpg";
import sld3 from "../../../assets/home/03.png";
import sld4 from "../../../assets/home/04.jpg";
import sld5 from "../../../assets/home/05.png";
import sld6 from "../../../assets/home/06.png";

const Banner = () => {
  return (
    <Carousel>
      <div>
        <img src={sld1} alt="" />
      </div>
      <div>
        <img src={sld2} alt="" />
      </div>
      <div>
        <img src={sld3} alt="" />
      </div>
      <div>
        <img src={sld4} alt="" />
      </div>
      <div>
        <img src={sld5} alt="" />
      </div>
      <div>
        <img src={sld6} alt="" />
      </div>
    </Carousel>
  );
};

export default Banner;
