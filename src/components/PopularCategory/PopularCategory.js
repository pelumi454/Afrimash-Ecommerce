import React from "react";

export const PopularCategory = ({
  popularCategoryImage,
  PopularCategoryName,
}) => {
  return (
    <div className="popularCategory col-md-2">
      <div className="d-flex align-items-center flex-column ">
        <img
          className="popularCategory__icon"
          src={popularCategoryImage}
          alt="image-popular-category"
        />
        <div className="popularCategory__title text-sm-center text-nowrap">
          {PopularCategoryName}
        </div>
      </div>
    </div>
  );
};
