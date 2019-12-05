import React, { useEffect, useState } from 'react';
import HeaderBar from "./components/HeaderBar";
import LandingSection from "./components/LandingSection";
import ShowcaseSection from "./components/ShowcaseSection";
import CatalogSection from "./components/CatalogSection";
import Footer from "./components/Footer";
import styled from "styled-components";
import bcgPattern from "./assets/graphics/bcg-pattern.png";

// TODO: display loading animation while fetching shoes

export default function () {
  const [menShoes, setMenShoes] = useState([]);
  const [womenShoes, setWomenShoes] = useState([]);

  useEffect(() => {
    get('men', 'catalog.json')
      .then(setMenShoes)
      .catch(e => setMenShoes([]));
    get('women', 'catalog.json')
      .then(setWomenShoes)
      .catch(e => setWomenShoes([]));
  }, []);

  if (!menShoes || !womenShoes) {
    return <h1>Loading...</h1>;
  }

  return (
    <Container>
      <HeaderBar/>
      <LandingSection/>
      <ShowcaseSection/>
      <CatalogSection
        menShoes={menShoes}
        womenShoes={womenShoes}
      />
      <Footer/>
    </Container>
  );
}

async function get (gender, file) {
  const domain = `https://raw.githubusercontent.com/`;
  const url = `${domain}bartolomej/nike-website/master/data/${gender}-running-shoes/${file}`;
  const response = await fetch(url);
  return await response.json();
}

const Container = styled('div')`
  background: url("${bcgPattern}");
`;