import React from "react";
import styled from "styled-components";

function Searchbar() {
  return (
    <div className="container">
      <Wrapper>
        <SearchContainer>
          <SearchIconWrap>
            <i class="bi bi-search"></i>
            <input type="text" placeholder="search anything" className="search-input"/>
          </SearchIconWrap>
          <SearchBtn>Search</SearchBtn>
        </SearchContainer>
      </Wrapper>
    </div>
  );
}

export default Searchbar;

const Wrapper = styled.div`
  width: 71%;
  height: 64px;
  border: 0.6px solid #b7abab;
  box-sizing: border-box;
  border-radius: 30px;
`;

const SearchContainer = styled.div`
display: flex;
justify-content: space-between;
`;

const SearchIconWrap = styled.div`
display: flex;
justify-content: center;
align-items: center;
`


const SearchBtn = styled.div`
  background-color: rgba(23, 26, 32, 0.8);
  height: 40px;
  width: 256px;
  color: white;
  border-radius: 100px;
  opacity: 0.85;
  text-transform: uppercase;
  font-size: 12px;
  cursor: pointer;
  text-align: center;
  margin: 8px;
`;
