import React from "react";

export const PopularCategory = ({ popularCategoryImage, PopularCategoryName}) => {
  return (
    <div className="popularCategory">
      <div className="popularCategory__description">
        <img
          className="popularCategory__icon"
          src={popularCategoryImage}
          alt="image-popular-category"
        />
        <div className="popularCategory__title">{PopularCategoryName}</div>
      </div>
    </div>
  );
};
