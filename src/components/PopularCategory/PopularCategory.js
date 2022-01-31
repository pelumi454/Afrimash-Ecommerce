import React from "react";

export const PopularCategory = ({
  popularCategoryImage,
  PopularCategoryName,
}) => {
  return (
    <div className="popularCategory col-lg-2 col-md-6 col-sm-12">
      <div className="d-flex align-items-center flex-column ">
        <img
          className="popularCategory__icon"
          src={popularCategoryImage}
          alt="popular-category"
        />
        <div className="popularCategory__title text-sm-center text-nowrap">
          {PopularCategoryName}
        </div>
      </div>
    </div>
  );
};
