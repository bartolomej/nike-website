import React from "react";
import styled from "styled-components";
import { ReactComponent as LandingBcgSvg } from "../assets/graphics/landing-bcg.svg";
import { ReactComponent as LandingShoeSvg } from "../assets/graphics/landing-shoe.svg";


export default function ({id, styles, scrollPosition, onButtonClick}) {
  return (
    <Container id={id} extraStyles={styles}>
      <ContentContainer>
        <LeftWrapper>
          <div>
            <Title>Nike</Title>
            <Title>Shoes</Title>
            <Description>Our mission is what drives us to do everything possible to expand human potential.</Description>
            <HeaderButton onClick={onButtonClick}>Shop</HeaderButton>
          </div>
        </LeftWrapper>
        <RightWrapper rotateFactor={Number.parseFloat(scrollPosition)}>
          <NikeShoe />
        </RightWrapper>
      </ContentContainer>
      <BackgroundSvg/>
    </Container>
  )
}

const Container = styled('div')`
  ${props => props.extraStyles};
  position: relative;
  @media (max-width: 800px) {
    margin-bottom: 50%;
  }
  @media (max-width: 600px) {
    margin-bottom: 80%;
  }
  @media (max-width: 400px) {
    margin-bottom: 100%;
  }
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 100vh;
  align-items: center;
  margin: 0 20px;
  @media (max-width: 1000px) {
    flex-direction: column;
    padding-top: 15%;
  }
  @media (max-width: 400px) {
    padding-top: 30%;
  }
`;

const LeftWrapper = styled.div`
  transform: translateX(-150%);
  display: flex;
  justify-content: center;
  flex: 1;
  margin: 0;
  z-index: 1;
  color: white;
  animation: 2s cubic-bezier(0.51, 0.01, 0.58, 1) 1s slideTextIn forwards;
  @keyframes slideTextIn {
    from {
      opacity: 0;
      transform: translateX(-150%) rotate(-30deg);
    }
    to {
      opacity: 1;
      transform: translateX(0) rotate(0);
    }
  }
`;

const Title = styled('h1')`
  line-height: 1;
  margin: 0;
  font-size: 90px;
  font-weight: 900;
  @media (max-width: 800px) {
    font-size: 80px;
  }
`;

const Description = styled('p')`
  width: 300px;
  line-height: 1.5;
  margin-top: 30px;
  margin-bottom: 30px;
  font-size: 18px;
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

const RightWrapper = styled('div')`
  display: flex;
  flex: 1;
  justify-content: center;
  z-index: 1;
  transform: rotate(${props => - props.rotateFactor * 30}deg) translateX(${props => props.rotateFactor * 10}%);
  @media (max-width: 800px) {
    transform: translateY(20%);
  }
  @media (max-width: 400px) {
    transform: translateY(10%);
  }
`;

const NikeShoe = styled(LandingShoeSvg)`
  width: 600px;
  opacity: 0;
  animation: 2s cubic-bezier(0.51, 0.01, 0.58, 1) 1s slideShoeIn forwards;
  @keyframes slideShoeIn {
    from {
      opacity: 0;
      transform: translateX(150%) rotate(30deg);
    }
    to {
      opacity: 1;
      transform: translateX(0) rotate(0);
    }
  }
  @media (max-width: 400px) {
    transform: translateY(-20%);
  }
  @media (max-width: 600px) {
    width: 300px;
  }
`;

const BackgroundSvg = styled(LandingBcgSvg)`
  z-index: 0;
  opacity: 0;
  position: absolute;
  height: 100%;
  width: 100%;
  top: -30%;
  left: -20%;
  @media (max-width: 1000px) {
    top: -50%;
    left: 0;
  }
  @media (max-width: 800px) {
    transform: scale(2.3);
    top: -40%;
  }
  @media (max-width: 700px) {
    top: -30%;
  }
  @media (max-width: 550px) {
    top: -20%;
    width: 110%;
  }
  @media (max-width: 400px) {
    width: 150%;
  }
  animation: 2s cubic-bezier(0.51, 0.01, 0.58, 1) 1s slideBcgIn forwards;
  @keyframes slideBcgIn {
    from {
      opacity: 0;
      transform: translateY(-150%) translateX(-150%) rotate(-30deg);
    }
    to {
      opacity: 1;
      transform: translateY(0) translateX(0) rotate(0) scale(1.5);
    }
  }
`;