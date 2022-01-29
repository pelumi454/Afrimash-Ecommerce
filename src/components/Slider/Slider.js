import React from "react";
import Slider from "react-slick";
import heroBg from "../../assets/images/hero-phone-bg.svg";
// import { CustomContainer } from "../../assets/styled-components/styled-component";

export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
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
      <div>
        <h3>2</h3>
      </div>
      <div>
        <h3>3</h3>
      </div>
      <div>
        <h3>4</h3>
      </div>
      <div>
        <h3>5</h3>
      </div>
      <div>
        <h3>6</h3>
      </div>
    </Slider>
  );
}
