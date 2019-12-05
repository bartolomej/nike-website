import React from 'react';
import styled from "styled-components";
import { ReactComponent as FooterBackgroundPath } from "../assets/graphics/footer-bcg.svg";


export default function () {

  return (
    <Container>
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
          place for icons
        </RightWrapper>
      </ContentContainer>
      <BackgroundSvg/>
    </Container>
  )
}

const Container = styled('div')`
  position: relative;
  overflow: hidden;
`;

const ContentContainer = styled('div')`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  height: 40vh;
  position: relative;
  z-index: 1;
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
`;

const BackgroundSvg = styled(FooterBackgroundPath)`
  width: 100%;
  transform: scale(1.8);
  height: 100%;
  z-index: 0;
  position: absolute;
  top: 40%;
`;