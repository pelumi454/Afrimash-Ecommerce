import React from "react";
import styled from "styled-components";

function Searchbar() {
  return (
    <div className="">
      <Wrapper>
        <SearchContainer>
          <SearchIconWrap>
            <i class="bi bi-search"></i>
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


