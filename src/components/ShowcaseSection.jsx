import React from 'react';
import styled from "styled-components";
import { ReactComponent as RunnerPath } from "../assets/graphics/runner.svg";
import { ReactComponent as ShowcaseBcgPath } from "../assets/graphics/showcase-bcg.svg";


export default function () {
  return (
    <Container>
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
  margin: 0 10% 20vh 20%;
  @media (max-width: 800px) {
    margin: 0;
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
`;

const ImageWrapper = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const RunnerSvg = styled(RunnerPath)`
  height: 300px;
  #path502 {
    fill: #001021;
  }
`;

const ShowcaseBcg = styled(ShowcaseBcgPath)`
  position: absolute;
  height: 100%;
  z-index: 0;
  left: 5%;
  transform: scale(1.3);
`;

const Title = styled('h2')`
  margin: 0;
  color: white;
`;

const Paragraph = styled('p')`
  font-size: 13px;
  margin: 0;
  color: white;
`;