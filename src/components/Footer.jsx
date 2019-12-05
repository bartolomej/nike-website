import React from 'react';
import styled from "styled-components";
import { ReactComponent as FooterBackgroundPath } from "../assets/graphics/footer-bcg.svg";
import { ReactComponent as FacebookSvg } from "../assets/icons/awesome-facebook.svg";
import { ReactComponent as InstagramSvg } from "../assets/icons/awesome-instagram.svg";
import { ReactComponent as TwitterSvg } from "../assets/icons/awesome-twitter.svg";
import { ReactComponent as YoutubeSvg } from "../assets/icons/awesome-youtube.svg";





export default function ({id, scrollPosition}) {
  return (
    <Container id={id}>
      <ContentContainer>
        <LeftWrapper>
          <TextSection>
            <h3>MORE</h3>
            <ul>
              <li><a href="https://www.nike.com/">official website</a></li>
              <li><a href="https://about.nike.com/">about website</a></li>
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
          <IconWrapper target="_blank" href="https://twitter.com/nike">
            <TwitterIcon/>
          </IconWrapper>
          <IconWrapper target="_blank" href="https://www.youtube.com/user/nike">
            <YoutubeIcon/>
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
  margin-bottom: 25px;
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
  margin: 20px;
  h3 {
    font-size: 25px;
    text-align: center;
  }
  li {
    font-style: italic;
    font-size: 18px;
    text-transform: uppercase;
  }
  a {
    text-decoration: none;
    color: white;
  }
  a:hover {
    color: palevioletred;
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
  margin: 20px;
`;

const IconStyles = `
  width: 40px;
  transition: all 0.2s ease-in-out;
  &:hover {
    transform: scale(1.2);
  }
`;

const FacebookIcon = styled(FacebookSvg)`
  ${IconStyles}
   &:hover {
    #awesome-facebook {
      fill: palevioletred;
    }
  }
`;

const InstagramIcon = styled(InstagramSvg)`
  ${IconStyles}
  &:hover {
    #awesome-instagram {
      fill: palevioletred;
    }
  }
`;

const TwitterIcon = styled(TwitterSvg)`
  ${IconStyles}
   &:hover {
    #awesome-twitter {
      fill: palevioletred;
    }
  }
`;

const YoutubeIcon = styled(YoutubeSvg)`
  ${IconStyles}
   &:hover {
    #awesome-youtube {
      fill: palevioletred;
    }
  }
`;