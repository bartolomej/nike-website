import React from 'react';
import styled from "styled-components";
import { ReactComponent as RunnerPath } from "../assets/graphics/runner.svg";
import { ReactComponent as ShowcaseBcgPath } from "../assets/graphics/showcase-bcg.svg";
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";


export default function ({id, scrollPosition}) {
  return (
    <Container id={id}>
      <TextWrapper>
        <ScrollAnimation animateIn="fadeInUp">
          <Title>JUST DO IT</Title>
          <Paragraph>Nike men’s running shoes feature the latest innovations to help you get more from your run, whatever your experience level, distance and preferences.</Paragraph>
        </ScrollAnimation>
      </TextWrapper>
      <ImageWrapper>
        <RunnerSvg/>
      </ImageWrapper>
      <ShowcaseBcg/>
    </Container>
  )
}

const Container = styled.div`
  position: relative;
  display: flex;
  flex: 2;
  flex-direction: row;
  margin: 0 0 30%;
  @media (max-width: 1050px) {
    margin: 0 0 30%;
    flex-direction: column;
  }
  @media (max-width: 700px) {
    padding: 0 0 40%;
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

const ShowcaseBcg = styled(ShowcaseBcgPath)`
  position: absolute;
  z-index: 0;
  transform: scaleX(1.1) scaleY(1.2);
  top: -50%;
  left: 0;
  right: 0;
  @media (max-width: 1400px) {
    top: -30%;
  }
  @media (max-width: 1050px) {
    top: 15%;
    transform: scaleY(2) scaleX(1.1);
  }
  @media (max-width: 950px) {
    top: 20%;
    transform: scaleY(2.5) scaleX(1.1);
  }
  @media (max-width: 850px) {
    top: 30%;
  }
  @media (max-width: 750px) {
    transform: scaleY(3) scaleX(1.1);
  }
  @media (max-width: 700px) {
    top: 25%;
    transform: scaleY(3.5) scaleX(1.1);
  }
  @media (max-width: 550px) {
    top: 30%;
    transform: scaleY(4.5) scaleX(1.1);
  }
  @media (max-width: 420px) {
    top: 35%;
    transform: scaleY(6) scaleX(1.1);
  }
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