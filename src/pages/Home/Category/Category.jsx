import { Swiper, SwiperSlide } from "swiper/react";
//import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import sld1 from "../../../assets/home/slide1.jpg";
import sld2 from "../../../assets/home/slide2.jpg";
import sld3 from "../../../assets/home/slide3.jpg";
import sld4 from "../../../assets/home/slide4.jpg";
import sld5 from "../../../assets/home/slide5.jpg";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const Category = () => {
  return (
    <section>
      <SectionTitle heading={"Order Online"} subHeading={"From 11.00am to 10.00pm"}></SectionTitle>
      <Swiper
      slidesPerView={4}
      spaceBetween={30}
      centeredSlides={true}
      pagination={{ clickable: true }}
      //modules={[Pagination]}
      className="mySwiper mb-24"
    >
      <SwiperSlide>
        <img src={sld1} alt="" />
        <h3 className="text-3xl uppercase text-center -mt-20 text-white">Salad</h3>
      </SwiperSlide>
      <SwiperSlide>
        <img src={sld2} alt="" />
        <h3 className="text-3xl uppercase text-center -mt-20 text-white">Pizzas</h3>
      </SwiperSlide>
      <SwiperSlide>
        <img src={sld3} alt="" />
        <h3 className="text-3xl uppercase text-center -mt-20 text-white">Soups</h3>
      </SwiperSlide>
      <SwiperSlide>
        <img src={sld4} alt="" />
        <h3 className="text-3xl uppercase text-center -mt-20 text-white">Desserts</h3>
      </SwiperSlide>
      <SwiperSlide>
        <img src={sld5} alt="" />
        <h3 className="text-3xl uppercase text-center -mt-20 text-white">Salad</h3>
      </SwiperSlide>
    </Swiper>
    </section>
  );
};

export default Category;
