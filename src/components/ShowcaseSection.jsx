import React from 'react';
import styled from "styled-components";
import { ReactComponent as RunnerPath } from "../assets/graphics/runner.svg";
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";


export default function ({id, style}) {
  return (
    <Container id={id} extraStyles={style}>
      <TextWrapper>
        <ScrollAnimation animateIn="fadeInLeft">
          <Title>JUST DO IT</Title>
          <Paragraph>Nike men’s running shoes feature the latest innovations to help you get more from your run, whatever your experience level, distance and preferences.</Paragraph>
        </ScrollAnimation>
      </TextWrapper>
      <ImageWrapper>
        <RunnerSvg/>
      </ImageWrapper>
    </Container>
  )
}

const Container = styled.div`
  ${props => props.extraStyles};
  position: relative;
  display: flex;
  flex: 2;
  flex-direction: row;
  width: 70%;
  margin: 20% auto;
  @media (max-width: 1300px) {
    width: 80%;
  }
  @media (max-width: 1050px) {
    flex-direction: column;
  }
  @media (max-width: 700px) {
    width: 90%;
  }
`;

const TextWrapper = styled.div`
  display: flex;
  flex: 1.2;
  div {
    width: 80%;
    margin: 0 auto;
  }
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  z-index: 1;
  @media (max-width: 1050px) {
    margin-bottom: 50px;
    div {
      width: 100%;
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
  height: 500px;
  z-index: 1;
  #path502 {
    fill: #3799f3;
  }
  @media (max-width: 600px) {
    height: 300px;
  }
`;

const Title = styled('h2')`
  font-weight: 700;
  font-size: 55px;
  line-height: 1.2;
  color: #2d2d2d;
`;

const Paragraph = styled('p')`
  font-size: 18px;
  margin: 0;
  color: #2d2d2d;
`;