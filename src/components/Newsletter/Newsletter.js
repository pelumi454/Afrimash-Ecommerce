import React from "react";
import {
  InputContainer,
  SuscribeBtn,
} from "../../assets/styled-components/styled-component";

const Newsletter = () => {
  return (
    <div className="newsletter">
      <div className="container newsletter__body">
        <div className="newsletter__sign-up-body">
          <h2 className="newsletter__header text-right">
            Sign up for newsletter
          </h2>
          <p className="newsletter__subtext">and get latest news & update</p>
          <InputContainer>
            <input
              type="text"
              className="newsletter__input"
              placeholder="Enter your Email"
            />
            <SuscribeBtn className="newsletter__suscribe-btn">
              Subscribe
            </SuscribeBtn>
          </InputContainer>
        </div>
        <div className="newsletter__social-media-container">
          <p className="newsletter__follow-us-text">Follow us</p>
          <div className="newsletter__icons">
            <i className="bi bi-twitter social-media-icon"></i>
            <i className="bi bi-facebook social-media-icon"></i>
            <i className="bi bi-instagram  social-media-icon"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
