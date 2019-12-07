import React, { useEffect, useState } from 'react';
import HeaderBar from "./components/HeaderBar";
import LandingSection from "./components/LandingSection";
import ShowcaseSection from "./components/ShowcaseSection";
import CatalogSection from "./components/CatalogSection";
import Footer from "./components/Footer";
import styled from "styled-components";
import { ReactComponent as BcgPattern } from "./assets/graphics/bcg-pattern.svg";

// TODO: download shoes images for long term support
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

    window.addEventListener('scroll', handleScroll);
  }, []);

  function handleScroll (e) {
    setLandingScroll(getElementScreenPos('landing'));
  }

  return (
    <Container>
      <BackgroundPattern/>
      <HeaderBar/>
      <LandingSection
        id="landing"
        scrollPosition={landingScroll}
      />
      <ShowcaseSection/>
      <CatalogSection
        error={error}
        menShoes={menShoes}
        womenShoes={womenShoes}
      />
      <Footer />
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
  overflow-x: hidden;
`;

const BackgroundPattern = styled(BcgPattern)`
  position: fixed;
  opacity: 0;
  top: 0;
  left: 0;
  right: 0;
  z-index: -1000;
  animation: 2s cubic-bezier(0.51, 0.01, 0.58, 1) 1s fadeBcgIn forwards;
  @keyframes fadeBcgIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
`;