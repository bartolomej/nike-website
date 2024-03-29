import React, { useState } from 'react';
import styled from "styled-components";
import ShoeCard from "./ShoeCard";
import "animate.css/animate.min.css";


export default function ({ id, error, style, menShoes, womenShoes }) {
  const [tab, setTab] = useState('men');
  const [selectedPage, setSelectedPage] = useState(0);

  const itemsPerPage = isMobile() ? 3 : 8;
  const fromItem = selectedPage * itemsPerPage;

  function handleTabChange (i) {
    setSelectedPage(i);
    let element = document.getElementById("header");
    element.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <Container id="catalog" extraStyles={style}>
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
    </Container>
  )
}

function isMobile () {
  let isMobile = false;
  if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent)
    || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))) {
    isMobile = true;
  }
  return isMobile;
}

const Container = styled.div`
  ${props => props.extraStyles};
  display: flex;
  flex-direction: column;
  margin-bottom: 20%;
  @media (max-width: 700px) {
    width: 90%;
    margin: 0 auto 50% auto;
  }
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
  @media (max-width: 700px) {
    margin: 0 0 20px;
    font-size: 40px;
  }
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
  @media (max-width: 1300px) {
    width: 80%;
  }
  @media (max-width: 400px) {
    width: 100%;
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