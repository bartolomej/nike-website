import React from 'react';
import styled from "styled-components";
import { ReactComponent as FooterBackgroundPath } from "../assets/graphics/footer-bcg.svg";
import { ReactComponent as FacebookSvg } from "../assets/icons/awesome-facebook.svg";
import { ReactComponent as InstagramSvg } from "../assets/icons/awesome-instagram.svg";
import { ReactComponent as TwitterSvg } from "../assets/icons/awesome-twitter.svg";
import { ReactComponent as YoutubeSvg } from "../assets/icons/awesome-youtube.svg";


export default function ({ id, scrollPosition }) {
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
  height: 50vh;
  display: flex;
  justify-content: center;
  overflow: hidden;
`;

const ContentContainer = styled('div')`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  position: relative;
  z-index: 1;
  width: 100%;
  margin-bottom: -10%;
  @media (max-width: 600px) {
    flex-direction: column;
    justify-content: center;
  }
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
    margin: 0;
  }
  ul {
    padding-left: 0;
    margin: 0;
  }
  li {
    font-size: 15px;
    text-transform: uppercase;
  }
  a {
    text-decoration: none;
    color: white;
  }
  a:hover {
    color: #68D5B8;
  }
`;

const BackgroundSvg = styled(FooterBackgroundPath)`
  transform: scale(1) translateY(-300px);
  z-index: 0;
  position: absolute;
  top: 75%;
  width: 100%;
  @media (max-width: 1500px) {
    width: unset;
    height: 100%;
  }
  @media (max-width: 400px) {
    top: 10%;
    transform: scale(1.5);
  }
`;

const IconWrapper = styled('a')`
  margin: 20px;
  display: flex;
  justify-content: center;
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
`;

const InstagramIcon = styled(InstagramSvg)`
  ${IconStyles}
`;

const TwitterIcon = styled(TwitterSvg)`
  ${IconStyles}
`;

const YoutubeIcon = styled(YoutubeSvg)`
  ${IconStyles}
`;