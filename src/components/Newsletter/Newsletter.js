import React from "react";

const Newsletter = () => {
  return (
    <div className="newsletter">
      <div className="container newsletter__">
        <div className="newsletter__sign-up-body">
          <h2 className="newsletter__header">Sign up for newsletter</h2>
          <p className="newsletter__subtext">and get latest news & update</p>
          <div className="newsletter__input-container">
            <input type="text" className="newsletter__input" placeholder="Enter your Email" />
            <button className="newsletter__suscribe-btn">Subscribe</button>
          </div>
        </div>
        <div className="newsletter__social-media-container">
          <p className="newsletter__follow-us-text">Follow us</p>
          <div className="newsletter__icons">
            <i class="bi bi-twitter"></i>
            <i class="bi bi-facebook"></i>
            <i class="bi bi-instagram"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
