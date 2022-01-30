import React from "react";
import EzoneImage from "../../assets/images/female-user.svg";

const EcommerceZone = () => {
  return (
    <div className="ecommerce-zone container">
      <div className="ecommerce-zone__main-description">
        <h1 className="ecommerce-zone__header">Ezone Ecommerce</h1>
        <p className="ecommerce-zone__subtext">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>
      <div>
        <img src={EzoneImage} alt="" />
      </div>
    </div>
  );
};

export default EcommerceZone;
