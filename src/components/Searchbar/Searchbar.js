import React from "react";
import styled from "styled-components";

function Searchbar() {
  return (
    <div className="container">
      <Wrapper>
        <>
          <div>
            <i class="bi bi-search"></i>
            <input type="text" />
          </div>
          <SearchBtn>Search</SearchBtn>
        </div>
      </Wrapper>
    </div>
  );
}

export default Searchbar;

const Wrapper = styled.div`
  width: 80%;
  width: 796px;
  height: 64px;
  border: 0.6px solid #b7abab;
  box-sizing: border-box;
  border-radius: 30px;
`;

const SearchBtn = styled.div`
  background-color: rgba(23, 26, 32, 0.8);
  height: 40px;
  width: 256px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  opacity: 0.85;
  text-transform: uppercase;
  font-size: 12px;
  cursor: pointer;
  margin: 8px;
`;
