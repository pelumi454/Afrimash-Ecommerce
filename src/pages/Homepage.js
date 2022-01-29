import Searchbar from "../components/Searchbar/Searchbar";
import SimpleSlider from "../components/Slider/Slider";
import cartIcon from "../assets/images/cart-icon.svg";
import { CustomContainer } from "../assets/styled-components/styled-component";
import { ItemCategoryWrapper } from "../assets/styled-components/styled-component";
import { CategoryItem } from "../components/CategoryItem/CategoryItem";

const Homepage = () => {
  return (
    <div className="home">
      <CustomContainer>
        <div className="d-flex justify-content-end">
          <div className="home__hero--left-header  row">
            <div className="col-md-10">
              <Searchbar />
            </div>
            <div className="col-md-2 d-flex align-items-center justify-content-center">
              <img src={cartIcon} alt="cart-icon" />
            </div>
          </div>
        </div>
        <div className="home__hero row">
          <ItemCategoryWrapper className="home__hero--right col-md-3">
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
          <div className="home__hero--right col-md-8 m-4">
            <SimpleSlider />
          </div>
        </div>
      </CustomContainer>
    </div>
  );
};

export default Homepage;
