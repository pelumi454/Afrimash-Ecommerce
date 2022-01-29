import Searchbar from "../components/Searchbar/Searchbar";
import SimpleSlider from "../components/Slider/Slider";
import cartIcon from "../assets/images/cart-icon.svg";

const Homepage = () => {
  return (
    <div className="home">
      <div className="home__hero--left">
        <div className="home__hero--left-header d-flex align-items-center">
          <Searchbar />
          <img src={cartIcon} alt="cart-icon" />
        </div>
        <SimpleSlider />
      </div>
    </div>
  );
};

export default Homepage;
