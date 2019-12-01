import nikeLandingShoes from "../assets/graphics/landing-shoes.png";
import React from "react";
import styled from "styled-components";
import { ReactComponent as LandingPath } from "../assets/graphics/landing-path.svg";


export default function () {
  return (
    <div>
      <LandingContainer>
        <LeftWrapper>
          <div>
            <h1>Nike</h1>
            <h1>Shoes</h1>
            <p>The Nike Air VaporMax Flyknit 3 brings bounce to your step with Max Air cushioning that stretches from heel to toe.</p>
            <HeaderButton>More</HeaderButton>
          </div>
        </LeftWrapper>
        <RightWrapper>
          <img src={nikeLandingShoes} alt="Nike shoes" />
        </RightWrapper>
      </LandingContainer>
      {/*<BackgroundSvg/>*/}
    </div>
  )
}

const LandingContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 100vh;
  align-items: center;
  margin: 0 20px;
  h1 {
    font-size: 80px;
  }
  p {
    width: 300px;
  }
`;

const LeftWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex: 1;
  margin: 0;
  h1 {
    margin: 0;
    line-height: 1;
  }
`;

const RightWrapper = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  img {
    width: 500px;
  }
  @media (max-width: 1400px) {
    img {
      width: 500px;
    }
  }
  @media (max-width: 1000px) {
    img {
      width: 400px;
    }
  }
`;

const BackgroundSvg = styled(LandingPath)`
  z-index: -1;
  position: relative;
  top: -30vh;
  right: -5vw;
  height: 130vh;
  @media (max-width: 1400px) {
    top: -20vh;
    right: -25vw;
    height: 120vh;
  }
  @media (max-width: 1000px) {
    top: -20vh;
    right: -65vw;
    height: 120vh;
  }
`;

const HeaderButton = styled.button`
  width: 120px;
  padding: 10px;
  border-radius: 20px;
  background-color: #905858;
  font-weight: bold;
  color: white;
  text-transform: uppercase;
  border: none;
  cursor: pointer;
  outline: none;
`;