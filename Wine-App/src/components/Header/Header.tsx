import React, { useContext } from 'react';
import { IoIosSearch } from 'react-icons/io';
import { VscAccount } from 'react-icons/vsc';
import { GiBeachBag } from 'react-icons/gi';
import MyContext from '../../contexts/MyContext';
import {
  Container,
  ContentContainer,
  Image,
  ButtonsContainer,
  Button,
  SwitchPageButton,
} from '.';

function Header() {
  const { toggle, setToggle } = useContext<any>(MyContext);

  return (
    <Container>
      <Image
        src="https://centraldeajuda.wine.com.br/static/media/LogoWine.dc8aad50.svg"
        alt="wine-logo"
      />
      <ContentContainer>
        <span>Clube</span>
        <SwitchPageButton>Loja</SwitchPageButton>
        <span>Produtores</span>
        <span>Ofertas</span>
        <span>Eventos</span>
      </ContentContainer>
      <ButtonsContainer>
        <Button type="button" onClick={() => setToggle(!toggle)}>
          <IoIosSearch size="3em" />
        </Button>
        <Button className="profileBtn" type="button">
          <VscAccount size="2.8em" />
        </Button>
        <Button type="button">
          <GiBeachBag size="2.8em" />
        </Button>
      </ButtonsContainer>
    </Container>
  );
}

export default Header;
