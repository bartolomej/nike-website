import React, { useState } from 'react';
import styled from "styled-components";
import ShoeCard from "./ShoeCard";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.min.css";


export default function ({ id, error, menShoes, womenShoes }) {
  const [tab, setTab] = useState('men');
  const [selectedPage, setSelectedPage] = useState(0);

  const itemsPerPage = 8;
  const fromItem = selectedPage * itemsPerPage;

  function handleTabChange (i) {
    setSelectedPage(i);
    let element = document.getElementById("header");
    element.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <Container id="catalog">
      <ScrollAnimation animateIn="fadeInUp">
        <Header id="header">
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
          {tab === 'men' && menShoes.length === 0 ? <Loading>Loading...</Loading> : ''}
          {tab === 'women' && womenShoes.length === 0 ? <Loading>Loading...</Loading> : ''}

          {tab === 'men' && womenShoes instanceof Error ? <Loading>{menShoes.toString()}</Loading> : ''}
          {tab === 'women' && womenShoes instanceof Error ? <Loading>{womenShoes.toString()}</Loading> : ''}

          {(tab === 'men' ? menShoes : womenShoes)
            .slice(fromItem, fromItem + itemsPerPage)
            .map(shoe => (
                <ShoeCard
                  id={shoe.id}
                  url={shoe.url}
                  title={shoe.title}
                  price={shoe.price}
                  image={shoe.image}
                  colors={shoe.colors}
                  subtitle={shoe.subtitle}
                />
              )
            )}
        </ShoesWrapper>
        <PagesWrapper>
          {tab === 'men' &&
          new Array(Math.ceil(menShoes.length / itemsPerPage))
            .fill(0)
            .map((e, i) => (
              <PageBtn
                onClick={() => handleTabChange(i)}
                selected={i === selectedPage}
              />
            ))
          }
        </PagesWrapper>
      </ScrollAnimation>
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
  font-size: 55px;
  line-height: 1.2;
  margin: 0 0 50px;
  color: #2d2d2d;
`;

const Loading = styled('p')`
  font-weight: bold;
  font-size: 20px;
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

const PagesWrapper = styled('div')`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const PageBtn = styled('button')`
  display:block;
  height: 20px;
  width: 20px;
  cursor: pointer;
  outline: none;
  border-radius: 50%;
  border: 2px solid #68D5B8;
  background-color: ${props => props.selected ? '#68D5B8' : 'white'};
  color: ${props => props.selected ? 'white' : 'black'};
  margin: 10px;
  &:hover {
    color: ${props => props.selected ? 'white' : '#68D5B8'};
    background-color: #68D5B8;
  }
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
  color: ${props => props.selected ? 'palevioletred' : '#2d2d2d'};
  &:hover {
    color: palevioletred;
  }
`;