import nikeLandingShoes from "../assets/graphics/shoe.svg";
import React from "react";
import styled from "styled-components";
import { ReactComponent as LandingPath } from "../assets/graphics/landing-path.svg";
import { ReactComponent as landingShoe } from "../assets/graphics/shoe.svg";



export default function () {
  return (
    <Container>
      <ContentContainer>
        <LeftWrapper>
          <div>
            <Title>Nike</Title>
            <Title>Shoes</Title>
            <Description>The Nike Air VaporMax Flyknit 3 brings bounce to your step with Max Air cushioning that stretches from heel to toe.</Description>
            <HeaderButton>More</HeaderButton>
          </div>
        </LeftWrapper>
        <RightWrapper>
          <img src={nikeLandingShoes} alt="Nike shoes" />
        </RightWrapper>
      </ContentContainer>
      <BackgroundSvg/>
    </Container>
  )
}

const Container = styled('div')`
  position: relative;
  margin-bottom: 20%;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 100vh;
  align-items: center;
  margin: 0 20px;
`;

const LeftWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex: 1;
  margin: 0;
  z-index: 1;
  color: white;
`;

const Title = styled('h1')`
  line-height: 1;
  margin: 0;
  font-size: 80px;
`;

const Description = styled('p')`
  width: 300px;
`;

const HeaderButton = styled.button`
  width: 120px;
  padding: 10px;
  border-radius: 20px;
  border: 3px solid white;
  font-weight: bold;
  color: white;
  text-transform: uppercase;
  cursor: pointer;
  outline: none;
  background: none;
`;

const RightWrapper = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  z-index: 1;
  img {
    transform: rotate(-25deg);
    width: 600px;
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

const LandingShoe = styled(landingShoe)``;

const BackgroundSvg = styled(LandingPath)`
  z-index: 0;
  position: absolute;
  height: 100%;
  width: 100%;
  top: -20%;
  left: -20%;
  transform: scale(1.5);
`;