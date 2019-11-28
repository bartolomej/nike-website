import React from 'react';
import nikeBadge from './assets/graphics/nike-badge.png';
import nikeLandingShoes from './assets/graphics/landing-shoes.png';
import { ReactComponent as LandingPath} from './assets/graphics/landing-path.svg';
import styled from 'styled-components';


export default function () {
  return (
    <div>
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
      <Body>
        <BackgroundSvg/>
        <Landing>
          <LeftWrapper>
            <div>
              <h1>Nike</h1>
              <h1>Shoes</h1>
              <p>The Nike Air VaporMax Flyknit 3 brings bounce to your step with Max Air cushioning that stretches from heel to toe.</p>
              <HeaderButton>More</HeaderButton>
            </div>
          </LeftWrapper>
          <RightWrapper>
            <img src={nikeLandingShoes} alt="Nike shoes showcase"/>
          </RightWrapper>
        </Landing>
      </Body>
    </div>
  );
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

const BackgroundSvg = styled(LandingPath)`
  z-index: -1;
  position: absolute;
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

const HeaderButton = styled.button`
  width: 120px;
  padding: 10px;
  border-radius: 20px;
  background-color: #905858;
  font-weight: bold;
  color: white;
  text-transform: uppercase;
  cursor: pointer;
`;

const Body = styled.div`
  height: 140vh;
  overflow: hidden;
`;

const Landing = styled.div`
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
    width: 700px;
  }
  @media (max-width: 1400px) {
    img {
      width: 600px;
    }
  }
  @media (max-width: 1000px) {
    img {
      width: 500px;
    }
  }
`;