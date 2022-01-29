import React from "react";
import Slider from "react-slick";
import heroBg from "../../assets/images/hero-phone-bg.svg";
import { CustomContainer } from "../../assets/styled-components/styled-component";

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
        <div className="">
          <div className="">
            <div className="h1">Shop the Latest Iphones</div>
            <button className="btn-success rounded">Shop Now</button>
          </div>
          <div className="">
            <img src={heroBg} alt="" />
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
