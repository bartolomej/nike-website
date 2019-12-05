import React from "react";
import styled from "styled-components";
import { ReactComponent as LandingBcgSvg } from "../assets/graphics/landing-bcg.svg";
import { ReactComponent as LandingShoeSvg } from "../assets/graphics/landing-shoe.svg";



export default function ({id, scrollPosition}) {
  return (
    <Container id={id}>
      <ContentContainer>
        <LeftWrapper>
          <div>
            <Title>Nike</Title>
            <Title>Shoes</Title>
            <Description>Our mission is what drives us to do everything possible to expand human potential.</Description>
            <HeaderButton>More</HeaderButton>
          </div>
        </LeftWrapper>
        <RightWrapper>
          <NikeShoe factor={scrollPosition} />
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
  font-size: 110px;
  font-weight: 900;
`;

const Description = styled('p')`
  width: 300px;
  line-height: 1.5;
  margin-top: 40px;
  margin-bottom: 30px;
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
  font-size: 12px;
  transition: all .15s ease-out;
  &:hover {
    background: white;
    color: #68D5B8;
  }
`;

const RightWrapper = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  z-index: 1;
  @media (max-width: 700px) {
    display: none;
  }
`;

const NikeShoe = styled(LandingShoeSvg)`
  width: 600px;
 // TODO: improve on scroll animation performance
 // transform: rotate(${props => `${-props.factor*50}deg`});
  @media (max-width: 1400px) {
    width: 500px;
  }
  @media (max-width: 1000px) {
    width: 400px;
  }
`;

const BackgroundSvg = styled(LandingBcgSvg)`
  z-index: 0;
  position: absolute;
  height: 100%;
  width: 100%;
  top: -30%;
  left: -20%;
  transform: scale(1.5);
`;