import React from "react";

export const CategoryItem = ({ categoryIcon, title, chevronRight }) => {
  return (
    <div className="categoryItem">
      <div className="categoryItem__description">
        <img className="categoryItem__icon" src={categoryIcon} alt="category-icon"/>
        <div className="categoryItem__title">{title}</div>
      </div>
      <div>
        <img src={chevronRight} alt="chevron" className="chevron-right-icon"/>
      </div>
    </div>
  );
};
