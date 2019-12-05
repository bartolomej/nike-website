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

  const [landingScroll, setLandingScroll] = useState(0);
  const [showcaseScroll, setShowcaseScroll] = useState(0);
  const [catalogScroll, setCatalogScroll] = useState(0);
  const [footerScroll, setFooterScroll] = useState(0);


  useEffect(() => {
    get('men', 'catalog.json')
      .then(setMenShoes)
      .catch(e => setMenShoes([]));
    get('women', 'catalog.json')
      .then(setWomenShoes)
      .catch(e => setWomenShoes([]));

    //window.addEventListener('scroll', handleScroll);
  }, []);

  function handleScroll (e) {
    setLandingScroll(getElementScreenPos('landing'));
    setShowcaseScroll(getElementScreenPos('showcase'));
    setCatalogScroll(getElementScreenPos('catalog'));
    setFooterScroll(getElementScreenPos('footer'));
  }

  return (
    <Container>
      <BackgroundPattern/>
      <HeaderBar/>
      <LandingSection
        id="landing"
        scrollPosition={landingScroll}
      />
      <ShowcaseSection
        id="showcase"
        scrollPosition={showcaseScroll}
      />
      <CatalogSection
        id="catalog"
        scrollPosition={catalogScroll}
        menShoes={menShoes}
        womenShoes={womenShoes}
      />
      <Footer
        id="footer"
        scrollPosition={footerScroll}
      />
    </Container>
  );
}

// calculates element position in viewport (0 - 1)
function getElementScreenPos (id) {
  const ele = document.getElementById(id);
  const pos = ele.getBoundingClientRect().y;
  const height = ele.clientHeight;
  return Math.abs(pos) / height;
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