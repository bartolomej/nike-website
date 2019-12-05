import React, { useEffect, useState } from 'react';
import HeaderBar from "./components/HeaderBar";
import LandingSection from "./components/LandingSection";
import ShowcaseSection from "./components/ShowcaseSection";
import CatalogSection from "./components/CatalogSection";
import Footer from "./components/Footer";
import styled from "styled-components";
import { ReactComponent as BcgPattern } from "./assets/graphics/bcg-pattern.svg";

// TODO: display loading animation while fetching shoes
// TODO: svg morphing animation
/**
 * https://css-tricks.com/blobs/
 * https://www.youtube.com/watch?v=LKwXoaFwYFk
 * https://codepen.io/osublake/pen/vdzjyg
 * https://cssanimation.rocks/scroll-animations/
 * https://scotch.io/tutorials/implementing-a-scroll-based-animation-with-javascript
 */

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
      <BackgroundPattern/>
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
  position: relative;
`;

const BackgroundPattern = styled(BcgPattern)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: -1000;
  background-color: #2d2d2d;
`;