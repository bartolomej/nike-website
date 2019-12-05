import React from 'react';
import styled from "styled-components";
import { ReactComponent as FooterBackgroundPath } from "../assets/graphics/footer-bcg.svg";
import { ReactComponent as FacebookSvg } from "../assets/icons/awesome-facebook.svg";
import { ReactComponent as InstagramSvg } from "../assets/icons/awesome-instagram.svg";



export default function ({id, scrollPosition}) {
  return (
    <Container id={id}>
      <ContentContainer>
        <LeftWrapper>
          <TextSection>
            <h3>ABOUT NIKE</h3>
            <ul>
              <li>news</li>
              <li>carriers</li>
            </ul>
          </TextSection>
          <TextSection>
            <h3>GET HELP</h3>
            <ul>
              <li>gift cards</li>
              <li>support</li>
            </ul>
          </TextSection>
        </LeftWrapper>
        <RightWrapper>
          <IconWrapper target="_blank" href="https://www.facebook.com/nike">
            <FacebookIcon/>
          </IconWrapper>
          <IconWrapper target="_blank" href="https://www.instagram.com/nike/">
            <InstagramIcon/>
          </IconWrapper>
        </RightWrapper>
      </ContentContainer>
      <BackgroundSvg/>
    </Container>
  )
}

const Container = styled('div')`
  position: relative;
  overflow: hidden;
  height: 60vh;
  display: flex;
  justify-content: center;
`;

const ContentContainer = styled('div')`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: flex-end;
  position: relative;
  z-index: 1;
  width: 100%;
  margin-bottom: 20px;
`;

const LeftWrapper = styled('div')`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const RightWrapper = styled('div')`
  display: flex;
  justify-content: center;
`;

const TextSection = styled('div')`
  color: white;
  margin: 15px;
  h3 {
    text-align: center;
  }
  li {
    font-style: italic;
    font-size: 12px;
  }
`;

const BackgroundSvg = styled(FooterBackgroundPath)`
  width: 100%;
  transform: scale(1.8);
  z-index: 0;
  position: absolute;
  top: 60%;
`;

const IconWrapper = styled('a')`
  margin: 10px;
`;

const FacebookIcon = styled(FacebookSvg)`
  width: 30px;
  transition: all 0.2s ease-in-out;
  &:hover {
    transform: scale(1.2);
  }
`;

const InstagramIcon = styled(InstagramSvg)`
  width: 30px;
  transition: all 0.2s ease-in-out;
  &:hover {
    transform: scale(1.2);
  }
`;