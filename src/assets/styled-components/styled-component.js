import styled from "styled-components";

export const CustomContainer = styled.section`
  padding: 0 2.875rem;
`;
export const Wrapper = styled.div`
  width: 100%;
  height: 64px;
  border: 0.6px solid #b7abab;
  box-sizing: border-box;
  border-radius: 30px;
  @media (max-width: 768px) {
    width: 200%;
    justify-content: start;
  }
`;

export const SearchContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const SearchWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const SearchBtn = styled.div`
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
  padding-top: 0.73rem;
`;

// Homepage
export const ItemCategoryWrapper = styled.div`
  box-shadow: drop-shadow(0px 4px 20px rgba(201, 201, 201, 0.25));
  -moz-box-shadow: 0 0 3px #ccc;
  -webkit-box-shadow: 0 0 3px #ccc;
  box-shadow: 0 0 3px #ccc;
  border-radius: 20px;
  height: fit-content;
`;
export const PopularCategoryWrapper = styled.div`
  margin-top: 2.375rem;
`;

export const BestSellerCategoryWrapper = styled.div`
  margin-top: 3.375rem;
  margin-left: 4rem;
`;
export const EcommerceZoneWrapper = styled.div`
  margin-top: 4.6rem;
`;
// Newsletter
export const InputContainer = styled.div`
  width: 100%;
  height: 53px;
  background: #fffefe;
  border-radius: 30px;
  display: flex;
  justify-content: space-between;
  padding-top: 0.37rem;
  margin-top: 0.2rem;
`;

export const SuscribeBtn = styled.div`
  width: 160px;
  height: 41px;
  background: #ef5e0d;
  border-radius: 30px;
  border: none;
  color: #fff;
  font-family: Amiko;
  font-weight: bold;
  font-size: 18px;
  margin-right: 0.5rem;
  text-align: center;
  padding-top: 0.5rem;
`;
