import {ReactComponent as NikeBadgeSvg} from "../assets/graphics/nike-badge.svg";
import React from "react";
import styled from "styled-components";


export default function () {
  return (
    <Header>
      <NikeBadge/>
    </Header>
  )
}

const Header = styled.div`
  z-index: 10;
  position: absolute;
  left: 0;
  right: 0;
  height: 10vh;
  display: flex;
  flex: 3;
  flex-direction: row;
  margin: 0 20px;
  align-items: center;
  justify-content: center;
`;

const NikeBadge = styled(NikeBadgeSvg)`
  width: 90px;
  opacity: 0;
  animation: 2s ease-out 1s animate-nike forwards;
  @keyframes animate-nike {
    from {
      opacity: 0;
      transform: translateY(-40%);
      }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;