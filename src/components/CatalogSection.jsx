import React, {useState} from 'react';
import styled from "styled-components";
import ShoeCard from "./ShoeCard";

export default function ({id, scrollPosition, menShoes, womenShoes}) {
  const [tab, setTab] = useState('men');

  return (
    <Container id={id}>
      <Header>
        <Title>Popular Shoes</Title>
        <CategoryWrapper>
          <CategoryBtn
            selected={tab === 'men'}
            onClick={() => setTab('men')}>Men</CategoryBtn>
          <CategoryBtn
            selected={tab === 'women'}
            onClick={() => setTab('women')}>Women</CategoryBtn>
        </CategoryWrapper>
      </Header>
      <ShoesWrapper>
        {(tab === 'men' ? menShoes : womenShoes).map(shoe => (
          <ShoeCard
            id={shoe.id}
            url={shoe.url}
            title={shoe.title}
            price={shoe.price}
            image={shoe.image}
            colors={shoe.colors}
            subtitle={shoe.subtitle}
          />
        ))}
      </ShoesWrapper>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10%;
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  margin-bottom: 50px;
`;

const Title = styled('h2')`
  font-weight: 700;
  font-size: 40px;
  color: white;
`;

const ShoesWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  width: 60%;
  margin: 0 auto;
  @media (max-width: 700px) {
    width: 95%;
  }
`;

const CategoryWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const CategoryBtn = styled.button`
  cursor: pointer;
  outline: none;
  transition: all .15s ease-out;
  background: none;
  padding: 10px;
  font-size: 17px;
  font-weight: ${props => props.selected ? 'bold' : 'unset'};
  border-style: none;
  border-bottom: ${props => props.selected ? '3px solid palevioletred' : '3px solid transparent'};
  color: ${props => props.selected ? 'palevioletred' : 'white'};
  &:hover {
    color: palevioletred;
  }
`;