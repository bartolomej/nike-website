import React from 'react';
import styled from "styled-components";
import { ReactComponent as RunnerPath } from "../assets/graphics/runner.svg";
import { ReactComponent as ShowcaseBcgPath } from "../assets/graphics/showcase-bcg.svg";


export default function ({id, scrollPosition}) {
  return (
    <Container id={id}>
      <TextWrapper>
        <div>
          <Title>RUN LIKE YOU MEAN IT</Title>
          <Paragraph>Nike men’s running shoes feature the latest innovations to help you get more from your run, whatever your experience level, distance and preferences.</Paragraph>
        </div>
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
  margin: 0 10% 20%;
  @media (max-width: 850px) {
    margin: 0 0 20%;
    flex-direction: column;
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
  @media (max-width: 850px) {
    margin-bottom: 50px;
  }
`;

const ImageWrapper = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const RunnerSvg = styled(RunnerPath)`
  height: 300px;
  z-index: 1;
  #path502 {
    fill: white;
  }
`;

const ShowcaseBcg = styled(ShowcaseBcgPath)`
  position: absolute;
  width: 30%;
  z-index: 0;
  left: 10%;
  transform: scale(1.5);
  @media (max-width: 850px) {
    display: none;
  }
`;

const Title = styled('h2')`
  color: white;
`;

const Paragraph = styled('p')`
  font-size: 13px;
  margin: 0;
  color: white;
`;