import React, { useEffect, useState } from 'react';
import HeaderBar from "./components/HeaderBar";
import LandingSection from "./components/LandingSection";
import ShowcaseSection from "./components/ShowcaseSection";
import CatalogSection from "./components/CatalogSection";
import Footer from "./components/Footer";
import styled from "styled-components";
import BcgPatternStatic from "./assets/graphics/bcg-pattern-static.svg";
import {ReactComponent as BcgPattern} from "./assets/graphics/bcg-pattern.svg";


// TODO: download shoes images for long term support
// TODO: adjust footer -> add just top bezier borders
// TODO: remove shoe scroll animation -> performance issue ?
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
  const [error, setError] = useState(null);
  const [landingScroll, setLandingScroll] = useState(0);

  useEffect(() => {
    get('men', 'catalog.json')
      .then(setMenShoes)
      .catch(setError);
    get('women', 'catalog.json')
      .then(setWomenShoes)
      .catch(setError);

    window.addEventListener('scroll', () => {
      setLandingScroll(getElementScreenPos('landing'));
    });
  }, []);

  return (
    <Container>
      <HeaderBar/>
      <BackgroundPattern/>
      <LandingSection
        id="landing"
        onButtonClick={scrollToShopSection}
        scrollPosition={landingScroll}
      />
      <ShowcaseSection/>
      <CatalogSection
        error={error}
        menShoes={menShoes}
        womenShoes={womenShoes}
      />
      <Footer/>
    </Container>
  );
}

function scrollToShopSection () {
  let element = document.querySelector("#catalog");
  element.scrollIntoView({ behavior: 'smooth', block: 'start' })
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
  overflow-x: hidden;
  //background-image: url("${BcgPatternStatic}");
`;


const BackgroundPattern = styled(BcgPattern)`
  position: fixed;
  opacity: 0;
  top: 0;
  left: 0;
  right: 0;
  z-index: -1000;
  animation: 2s cubic-bezier(0.51, 0.01, 0.58, 1) 1s fadeBcgIn forwards;
  filter: blur(2px);
  @keyframes fadeBcgIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
`;