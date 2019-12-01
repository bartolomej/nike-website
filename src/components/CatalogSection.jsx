import React, {useState} from 'react';
import styled from "styled-components";
import ShoeCard from "./ShoeCard";

export default function ({menShoes, womenShoes}) {
  const [tab, setTab] = useState('men');

  return (
    <Container>
      <Header>
        <h1>Popular Shoes</h1>
        <CategoryWrapper>
          <CategoryBtn onClick={() => setTab('men')}>Men</CategoryBtn>
          <CategoryBtn onClick={() => setTab('women')}>Women</CategoryBtn>
        </CategoryWrapper>
      </Header>
      <ShoesWrapper>
        {(tab === 'men' ? menShoes : womenShoes).map(shoe => (
          <ShoeCard
            id={shoe.id}
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
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  margin-bottom: 20px;
`;

const ShoesWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 60%;
  margin: 0 auto;
`;

const CategoryWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const CategoryBtn = styled.button`
  border: none;
  font-weight: bold;
  cursor: pointer;
  outline: none;
  &:hover {
    color: palevioletred;
  }
`;