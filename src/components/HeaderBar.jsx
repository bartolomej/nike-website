import nikeBadge from "../assets/graphics/nike-badge.png";
import React from "react";
import styled from "styled-components";


export default function () {
  return (
    <Header>
      <HeaderElement>
        <HeaderLogo src={nikeBadge} alt="Nike logo"/>
      </HeaderElement>
      <HeaderElement>
        <a href="/#">MEN</a>
        <a href="/#">WOMEN</a>
      </HeaderElement>
      <HeaderElement>
        <a href="/#">SHOPPING CART</a>
      </HeaderElement>
    </Header>
  )
}

const Header = styled.div`
  z-index: 10;
  position: absolute;
  left: 0;
  right: 0;
  height: 10vh;
  display: flex;
  flex: 3;
  flex-direction: row;
  margin: 0 20px;
`;

const HeaderLogo = styled.img`
  height: 50px;
`;

const HeaderElement = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  align-items: center;
  a {
    color: white;
    text-decoration: none;
    font-weight: bold;
  }
  &:first-child {
    justify-content: flex-start;
  }
  &:nth-child(2) {
    justify-content: space-evenly;
  }
  &:last-child {
    justify-content: flex-end;
  }
`;