import Searchbar from "../components/Searchbar/Searchbar";
import SimpleSlider from "../components/Slider/Slider";
import cartIcon from "../assets/images/cart-icon.svg";
import electronics from "../assets/images/electronics-category.svg";
import fashion from "../assets/images/fashion-category.svg";
import phone from "../assets/images/phone-category.svg";
import beauty from "../assets/images/beauty-category.svg";
import iphone11 from "../assets/images/iphone11.svg";
import refrigerator from "../assets/images/refrigerator.svg";
import fullrating from "../assets/images/fullrate.svg";
import halfrating from "../assets/images/halfrate.svg";
import EcommerceZone from "../components/Ecommerce/EcommerceZone";
import {
  CustomContainer,
  ItemCategoryWrapper,
  PopularCategoryWrapper,
  BestSellerCategoryWrapper,
} from "../assets/styled-components/styled-component";
import { CategoryItem } from "../components/CategoryItem/CategoryItem";
import { PopularCategory } from "../components/PopularCategory/PopularCategory";
import BestSellers from "../components/BestSellers/BestSellers";

const Homepage = () => {
  return (
    <div className="home">
      <CustomContainer>
        <div className="d-flex justify-content-end">
          <div className="home__header  row">
            <div className="col-md-10 col-10 col-sm-10">
              <Searchbar />
            </div>
            <div className="col-md-2 d-flex align-items-center justify-content-left">
              <img src={cartIcon} alt="cart-icon" />
            </div>
          </div>
        </div>
        {/* Category item section */}
        <div className="home__hero row">
          <ItemCategoryWrapper className="home__hero--right col-md-3 col-3 col-sm-12">
            <CategoryItem
              categoryIcon={cartIcon}
              title="woman's"
              chevronRight={cartIcon}
            />
            <CategoryItem
              categoryIcon={cartIcon}
              title="woman's"
              chevronRight={cartIcon}
            />
            <CategoryItem
              categoryIcon={cartIcon}
              title="woman's"
              chevronRight={cartIcon}
            />
            <CategoryItem
              categoryIcon={cartIcon}
              title="woman's"
              chevronRight={cartIcon}
            />
            <CategoryItem
              categoryIcon={cartIcon}
              title="woman's"
              chevronRight={cartIcon}
            />
          </ItemCategoryWrapper>
          <div className="home__hero--right col-md-8 ms-5 col-sm-12">
            <SimpleSlider />
          </div>
        </div>
        {/* popular category section */}
        <CustomContainer>
          <PopularCategoryWrapper>
            <h1 className="home__popular-category-header">
              Popular Categories
            </h1>
            <div className="row">
              <PopularCategory
                popularCategoryImage={phone}
                PopularCategoryName="Phones & Accessories"
                // className="col-md-2"
              />
              <PopularCategory
                popularCategoryImage={phone}
                PopularCategoryName="Phones & Accessories"
                // className="col-md-2"
              />{" "}
              <PopularCategory
                popularCategoryImage={beauty}
                PopularCategoryName="Health and Beauty"
                // className="col-md-2"
              />{" "}
              <PopularCategory
                popularCategoryImage={fashion}
                PopularCategoryName="Fashion"
                // className="col-md-2"
              />
              <PopularCategory
                popularCategoryImage={electronics}
                PopularCategoryName="Electronics"
                // className="col-md-2"
              />
              <PopularCategory
                popularCategoryImage={electronics}
                PopularCategoryName="Health and Beauty"
                // className="col-md-2"
              />
            </div>
          </PopularCategoryWrapper>
        </CustomContainer>

        {/* Best seller section */}
        <BestSellerCategoryWrapper>
          <h1 className="home__best-seller-category-header">Best Seller</h1>
          <div className="row home__bestseller p">
            <BestSellers
              itemImage={iphone11}
              itemName="Iphone 11"
              itemPrize="300"
              fadedPrize="300"
              itemPercentage="-30%"
              fullRate={fullrating}
              halfRate={halfrating}
            />
            <BestSellers
              itemImage={refrigerator}
              itemName="Refrigerator"
              itemPrize="300"
              fadedPrize="300"
              itemPercentage="-30%"
              fullRate={fullrating}
              halfRate={halfrating}
            />{" "}
            <BestSellers
              itemImage={iphone11}
              itemName="Iphone 11"
              itemPrize="300"
              fadedPrize="300"
              itemPercentage="-30%"
              fullRate={fullrating}
              halfRate={halfrating}
            />{" "}
            <BestSellers
              itemImage={refrigerator}
              itemName="Refrigerator"
              itemPrize="300"
              fadedPrize="300"
              itemPercentage="-30%"
              fullRate={fullrating}
              halfRate={halfrating}
            />
          </div>
              </BestSellerCategoryWrapper>
              <div>
                  <EcommerceZone/>
              </div>

        {/* Deal of the Day section */}
        <BestSellerCategoryWrapper>
          <h1 className="home__best-seller-category-header">Deal of the Day</h1>
          <div className="row home__bestseller p">
            <BestSellers
              itemImage={iphone11}
              itemName="Iphone 11"
              itemPrize="300"
              fadedPrize="300"
              itemPercentage="-30%"
              fullRate={fullrating}
              halfRate={halfrating}
            />
            <BestSellers
              itemImage={refrigerator}
              itemName="Refrigerator"
              itemPrize="300"
              fadedPrize="300"
              itemPercentage="-30%"
              fullRate={fullrating}
              halfRate={halfrating}
            />{" "}
            <BestSellers
              itemImage={iphone11}
              itemName="Iphone 11"
              itemPrize="300"
              fadedPrize="300"
              itemPercentage="-30%"
              fullRate={fullrating}
              halfRate={halfrating}
            />{" "}
            <BestSellers
              itemImage={refrigerator}
              itemName="Refrigerator"
              itemPrize="300"
              fadedPrize="300"
              itemPercentage="-30%"
              fullRate={fullrating}
              halfRate={halfrating}
            />
          </div>
        </BestSellerCategoryWrapper>
      </CustomContainer>
    </div>
  );
};

export default Homepage;
