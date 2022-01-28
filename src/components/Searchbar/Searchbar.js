import React from "react";
import styled from "styled-components";

function Searchbar() {
  return (
    <div>
      <Container>
        <h2>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus
          consectetur id facilisi sodales sollicitudin malesuada proin. Suscipit
          risus ut porttitor cursus consequat iaculis habitant enim. Lorem ipsum
          dolor sit amet, consectetur adipiscing elit. Purus consectetur id
          facilisi sodales sollicitudin malesuada proin. Suscipit risus ut
          porttitor cursus consequat iaculis habitant enim. Lorem ipsum dolor
          sit amet, consectetur adipiscing elit. Purus consectetur id facilisi
          sodales sollicitudin malesuada proin. Suscipit risus ut porttitor
          cursus consequat iaculis habitant enim.Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Purus consectetur id facilisi sodales
          sollicitudin malesuada proin. Suscipit risus ut porttitor cursus
          consequat iaculis habitant enim.Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Purus consectetur id facilisi sodales
          sollicitudin malesuada proin. Suscipit risus ut porttitor cursus
          consequat iaculis habitant enim.Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Purus consectetur id facilisi sodales
          sollicitudin malesuada proin. Suscipit risus ut porttitor cursus
          consequat iaculis habitant enim.
        </h2>
      </Container>
    </div>
  );
}

export default Searchbar;

const Container = styled.div`
  min-height: 60px;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
  background-color: red;
`;

const Menu = styled.div``;
