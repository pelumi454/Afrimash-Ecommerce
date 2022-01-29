import {
  Wrapper,
  SearchContainer,
  SearchIconWrap,
  SearchBtn,
} from "../../assets/styled-components/styled-component";
import searchIcon from "../../assets/images/searchIcon.svg";
function Searchbar() {
  return (
    <div className="">
      <Wrapper>
        <SearchContainer>
          <SearchIconWrap>
            <img src={searchIcon} className="bi" alt="search-icon" />
            <input
              type="text"
              placeholder="Search anything"
              className="search-input"
            />
          </SearchIconWrap>
          <SearchBtn>Search</SearchBtn>
        </SearchContainer>
      </Wrapper>
    </div>
  );
}

export default Searchbar;
