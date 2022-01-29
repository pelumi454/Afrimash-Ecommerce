import React from "react";

const BestSellers = ({
  itemImage,
  itemName,
  itemPrize,
  fadedPrize,
  itemPercentage,
  fullRate,
  halfRate,
}) => {
  const rating = [];
  return (
    <div className="col-md-3">
      <div className="itemimage ">
        <img src={itemImage} alt="item-image" />
      </div>
      <div className="item-description mt-5">
        <div className="h4">{itemName}</div>
        <div className="prize-wrapper d-flex align-items-center">
          <p className=" prize me-3"> $ {itemPrize} </p>
          <p className="faded-prize">
            <small className="me-3">
              $ <s> {fadedPrize} </s>
            </small>
          </p>
          <p className="item-percentage">{itemPercentage}</p>
        </div>
        <div className="ratingwrapper">
          <img src={fullRate} alt="rate" />
          <img src={halfRate} alt="rate" />
        </div>
      </div>
    </div>
  );
};

export default BestSellers;

// export const PopularCategory = ({
//   popularCategoryImage,
//   PopularCategoryName,
// }) => {
//   return (
//     <div className="popularCategory col-md-2">
//       <div className="d-flex align-items-center flex-column ">
//         <img
//           className="popularCategory__icon"
//           src={popularCategoryImage}
//           alt="image-popular-category"
//         />
//         <div className="popularCategory__title text-sm-center text-nowrap">
//           {PopularCategoryName}
//         </div>
//       </div>
//     </div>
//   );
// };
