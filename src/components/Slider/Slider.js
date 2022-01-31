import React from "react";
import Slider from "react-slick";
import heroBg from "../../assets/images/hero-phone-bg.svg";
import slider3 from "../../assets/images/slider3.png";
import slider4 from "../../assets/images/Slider4.jpg";

export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings} className="slick-slider">
      <div className="slider-section">
        <div className=" d-flex ">
          <div className="slider-text-wrap">
            <div className="slider-text">Shop the Latest Iphones</div>
            <button className="show-now">Shop Now</button>
          </div>
          <div className="slider-image-wrap">
            <img src={heroBg} alt="" className="slider-image" />
          </div>
        </div>
      </div>
      <div className="slider-section">
        <div className=" d-flex ">
          <div className="slider-text-wrap">
            <div className="slider-text">Shop the Latest Iphones</div>
            <button className="show-now">Shop Now</button>
          </div>
          <div className="slider-image-wrap">
            <img src={heroBg} alt="" className="slider-image" />
          </div>
        </div>
      </div>{" "}
      <div className="slider-section">
        <div className=" d-flex ">
          <div className="slider-text-wrap">
            <div className="slider-text">Shop the Latest Iphones</div>
            <button className="show-now">Shop Now</button>
          </div>
          <div className="slider-image-wrap">
            <img src={heroBg} alt="" className="slider-image" />
          </div>
        </div>
      </div>
    </Slider>
  );
}
