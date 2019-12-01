import React from 'react';
import styled from "styled-components";

export default function ({id, image, title, colors, price, subtitle}) {
  return (
    <Container key={id}>
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

const Container = styled.div`
  background-color: #F6F6F6;
  border-radius: 30px;
  margin: 10px;
  width: 230px;
`;

const Image = styled.img`
  height: 200px;
`;

const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
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
`;

const Subtitle = styled.span`
  display: block;
  font-size: 12px;
`;

const Price = styled.span`
  display: block;
  font-weight: bold;
  color: palevioletred;
`;