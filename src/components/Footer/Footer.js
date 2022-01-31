import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__description-body row">
        <p className="footer__description col-md-3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus
          consectetur id facilisi sodales sollicitudin malesuada proin. Suscipit
          risus ut porttitor cursus consequat iaculis habitant enim.
        </p>
        <div className="col-md-3 footer__about-us">
          <p>Why Choose Us</p>
          <p>Our services</p>
          <p>Contact Us</p>
          <p>Terms & conditions</p>
        </div>
        <div className="col-md-3 footer__about-us">
          <p>Monday - Friday | 8:00am-10pm</p>
          <p>Saturdays | 9:00am-11pm</p>
          <p>Sundays | 8:00am-9pm</p>
        </div>
        <div className="col-md-3 footer__about-us">
          <p>3A Idowu Matins Victoria Island Lagos</p>
          <p>Call Us ~ 081078899008</p>
          <p>E-mail ~ info@keggo.com</p>
        </div>
      </div>
      <div className="row">
        <div className="col-md-4">
          <h5>Free Delivery</h5>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas,
            ab.
          </p>
        </div>
        <div className="col-md-4">
          <h5>Free Delivery</h5>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas,
            ab.
          </p>
        </div>{" "}
        <div className="col-md-4">
          <h5>Free Delivery</h5>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas,
            ab.
          </p>
        </div>
      </div>

      <hr />
      <p className="text-center">Copyrights © 2020 Ezone. All rights reserved.</p>
    </div>
  );
};

export default Footer;
