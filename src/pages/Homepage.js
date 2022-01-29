import Searchbar from "../components/Searchbar/Searchbar";
import SimpleSlider from "../components/Slider/Slider";
import cartIcon from "../../public/images/cart-icon.svg";
import { CustomContainer } from "../assets/styled-components/styled-component";
import { ItemCategoryWrapper } from "../assets/styled-components/styled-component";
import { PopularCategoryWrapper } from "../assets/styled-components/styled-component";
import { CategoryItem } from "../components/CategoryItem/CategoryItem";
import { PopularCategory } from "../components/PopularCategory/PopularCategory";

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
        <PopularCategoryWrapper>
          <h1>Popular Categories</h1>
                  <PopularCategory
                //   popularCategoryImage={}/>
                  />
        </PopularCategoryWrapper>
      </CustomContainer>
    </div>
  );
};

export default Homepage;
