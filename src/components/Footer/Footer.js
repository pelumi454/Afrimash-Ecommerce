import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__container">
        <div className="footer__description-body row">
          <p className="footer__description col-md-5 col-sm-12">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus
            consectetur id facilisi sodales sollicitudin malesuada proin.
            Suscipit risus ut porttitor cursus consequat iaculis habitant enim.
          </p>

          <div className="col-md-3 footer__about-us col-sm-12">
            <p>Why Choose Us</p>
            <p>Our services</p>
            <p>Contact Us</p>
            <p>Terms & conditions</p>
          </div>
          <div className="col-md-2 footer__about-us col-sm-12">
            <p>Monday - Friday | 8:00am-10pm</p>
            <p>Saturdays | 9:00am-11pm</p>
            <p>Sundays | 8:00am-9pm</p>
          </div>
          <div className="col-md-2 footer__about-us col-sm-12">
            <p>3A Idowu Matins Victoria Island Lagos</p>
            <p>Call Us ~ 081078899008</p>
            <p>E-mail ~ info@keggo.com</p>
          </div>
        </div>
        <div className="row footer__free-delivery-section">
          <div className="col-md-4 col-sm-12">
            <h5 className="footer__delivery-header">Free Delivery</h5>
            <p className="footer__delivery-subtext">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas,
              ab.
            </p>
          </div>
          <div className="col-md-4 col-sm-12">
            <h5 className="footer__delivery-header">Free Delivery</h5>
            <p className="footer__delivery-subtext">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas,
              ab.
            </p>
          </div>{" "}
          <div className="col-md-4 col-sm-12">
            <h5 className="footer__delivery-header">Free Delivery</h5>
            <p className="footer__delivery-subtext">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas,
              ab.
            </p>
          </div>
        </div>
      </div>

      <hr className="hr" />
      <p className="text-center footer__copyright">
        Copyrights © 2020 Ezone. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
