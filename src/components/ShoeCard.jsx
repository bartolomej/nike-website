import React from 'react';
import styled from "styled-components";

export default function ({id, url, image, title, colors, price, subtitle}) {
  return (
    <Container target="blank" href={url} key={id}>
      <ImageWrapper>
        <Image src={image} alt={title}/>
      </ImageWrapper>
      <DescriptionWrapper>
        <Title>{title}</Title>
        <Subtitle>{colors} / {subtitle}</Subtitle>
        <Price>{price}</Price>
      </DescriptionWrapper>
    </Container>
  )
}

const Image = styled.img`
  height: 180px;
  transition: all .2s ease-in-out;
`;

const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 220px;
  padding: 15px;
`;

const DescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 15px;
`;

const Title = styled.span`
  display: block;
  font-weight: bold;
  color: black;
`;

const Subtitle = styled.span`
  display: block;
  font-size: 12px;
  color: grey;
`;

const Price = styled.span`
  display: block;
  font-weight: bold;
  color: palevioletred;
`;

const Container = styled.a`
  background-color: #F6F6F6;
  border-radius: 30px;
  border: 5px solid #F6F6F6;
  margin: 10px;
  width: 230px;
  text-decoration: none;
  animation: 1s ease-out 0s slideIn;
  &:hover {
    border: 5px solid #68D5B8;
  }
  &:hover ${Image} {
    transform: scale(1.2);
  }
  @keyframes slideIn {
    0% {
      opacity: 0;
      transform: translateY(10%);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;