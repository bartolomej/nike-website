import React from 'react';
import styled from "styled-components";
import { ReactComponent as RunnerPath } from "../assets/graphics/runner.svg";
import { ReactComponent as ShowcaseBcgTopPath } from "../assets/graphics/showcase-bcg-top.svg";
import { ReactComponent as ShowcaseBcgBottomPath } from "../assets/graphics/showcase-bcg-bottom.svg";
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";


export default function ({id, style}) {
  return (
    <Container id={id} extraStyles={style}>
      <ShowcaseBcgTop/>
      <TextWrapper>
        <ScrollAnimation animateIn="fadeInUp">
          <Title>JUST DO IT</Title>
          <Paragraph>Nike men’s running shoes feature the latest innovations to help you get more from your run, whatever your experience level, distance and preferences.</Paragraph>
        </ScrollAnimation>
      </TextWrapper>
      <ImageWrapper>
        <RunnerSvg/>
      </ImageWrapper>
      <ShowcaseBcgBottom/>
    </Container>
  )
}

const Container = styled.div`
  ${props => props.extraStyles};
  position: relative;
  display: flex;
  flex: 2;
  flex-direction: row;
  background-color: #369af2;
  height: 100vh;
  @media (max-width: 1050px) {
    margin: 0 0 30%;
    flex-direction: column;
  }
  @media (max-width: 700px) {
    margin: 0 0 50%;
  }
`;

const TextWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  z-index: 1;
  div {
    width: 60%;
    margin: 0 auto;
  }
  @media (max-width: 1050px) {
    margin-bottom: 50px;
    div {
      text-align: center;
    }
  }
  @media (max-width: 600px) {
    div {
      width: 90%;
    }
  }
`;

const ImageWrapper = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const RunnerSvg = styled(RunnerPath)`
  height: 400px;
  z-index: 1;
  #path502 {
    fill: white;
  }
  @media (max-width: 400px) {
    height: 300px;
  }
`;

const ShowcaseBcgTop = styled(ShowcaseBcgTopPath)`
  position: absolute;
  transform: translateY(-99%) scaleX(1);
`;

const ShowcaseBcgBottom = styled(ShowcaseBcgBottomPath)`
  position: absolute;
  bottom: 0;
  transform: translateY(99%) scaleX(1);
`;

const Title = styled('h2')`
  color: white;
  font-weight: 700;
  font-size: 55px;
  line-height: 1.2;
`;

const Paragraph = styled('p')`
  font-size: 18px;
  margin: 0;
  color: white;
  line-height: 1.6;
`;