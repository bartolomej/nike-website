import React from 'react';
import styled from "styled-components";
import { ReactComponent as RunnerPath } from "../assets/graphics/runner.svg";


export default function () {
  return (
    <ShowcaseSection>
      <TextWrapper>
        <div>
          <h1>RUN LIKE YOU MEAN IT</h1>
          <p>Nike men’s running shoes feature the latest innovations to help you get more from your run, whatever your experience level, distance and preferences.</p>
        </div>
      </TextWrapper>
      <ImageWrapper>
        <RunnerSvg/>
      </ImageWrapper>
    </ShowcaseSection>
  )
}

const ShowcaseSection = styled.div`
  margin: 0 10%;
  display: flex;
  flex: 2;
  flex-direction: row;
`;

const TextWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
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
  width: 200px;
`;