import Searchbar from "../components/Searchbar/Searchbar";
import SimpleSlider from "../components/Slider/Slider";
import cartIcon from "../assets/images/cart-icon.svg";
import { CustomContainer } from "../assets/styled-components/styled-component";

const Homepage = () => {
  return (
    <div className="home">
      <CustomContainer>
        <div className="home__hero row">
          <div className="home__hero--right col-md-4 mt-5">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit
            iste, quisquam fuga facilis ab voluptas, unde, impedit distinctio
            fugiat quaerat quibusdam eius voluptatum assumenda nesciunt quod
            vitae iusto quidem omnis.
          </div>
          <div className="home__hero--right col-md-8">
            <div className="home__hero--left-header row">
              <div className="col-md-10">
                <Searchbar />
              </div>
              <div className="col-md-2 d-flex align-items-center justify-content-center">
                <img src={cartIcon} alt="cart-icon" />
              </div>
            </div>
            {/* <SimpleSlider /> */}
          </div>
        </div>
      </CustomContainer>
    </div>
  );
};

export default Homepage;
