import React from "react";
import styled from "styled-components";

function Searchbar() {
  return (
    <div className="container">
      <Wrapper>
        <SearchContainer>
          <SearchIconWrap>
            <i class="bi bi-search"></i>
            <input type="text" placeholder="Search anything" className="search-input"/>
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
margin-top: .4rem;
`


const SearchBtn = styled.div`
  cursor: pointer;
  text-align: center;
  margin: 8px;
  font-family: IBM Plex Sans;
  font-weight: 400;
  font-size: 16px;
  line-height: 21px;
  color: #ffffff;
  width: 177px;
  height: 47px;
  background: #ef5e0d;
  border-radius: 30px;
  padding-top: .73rem;
`;
