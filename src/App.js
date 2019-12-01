import React, { useEffect, useState } from 'react';
import HeaderBar from "./components/HeaderBar";
import LandingSection from "./components/LandingSection";
import ShowcaseSection from "./components/ShowcaseSection";
import CatalogSection from "./components/CatalogSection";

// TODO: display loading animation while fetching shoes

export default function () {
  const [menShoes, setMenShoes] = useState(null);
  const [womenShoes, setWomenShoes] = useState(null);

  useEffect(() => {
    get('men', 'catalog.json').then(setMenShoes);
    get('women', 'catalog.json').then(setWomenShoes);
  }, []);

  if (!menShoes || !womenShoes) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      <HeaderBar/>
      <LandingSection/>
      <ShowcaseSection/>
      <CatalogSection
        menShoes={menShoes}
        womenShoes={womenShoes}
      />
    </div>
  );
}

async function get (gender, file) {
  const domain = `https://raw.githubusercontent.com/`;
  const url = `${domain}bartolomej/nike-website/master/data/${gender}-running-shoes/${file}`;
  const response = await fetch(url);
  return await response.json();
}