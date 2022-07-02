import React, { useContext, useState } from 'react';
import { IoIosSearch } from 'react-icons/io';
import { VscAccount } from 'react-icons/vsc';
import { GiBeachBag } from 'react-icons/gi';
import { GrMenu } from 'react-icons/gr';
import MyContext from '../../contexts/MyContext';
import OptionModal from './modals/OptionModal';

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
  const [isModalActive, setIsModalActive] = useState(false);
  return (
    <Container>
      <Button onClick={() => setIsModalActive(!isModalActive)} className="menu">
        <GrMenu size="2.5em" />
      </Button>
      { isModalActive && <OptionModal /> }
      <Image
        src="https://centraldeajuda.wine.com.br/static/media/LogoWine.dc8aad50.svg"
        alt="wine-logo"
        className="image"
      />
      <ContentContainer className="content">
        <span>Clube</span>
        <SwitchPageButton>Loja</SwitchPageButton>
        <span>Produtores</span>
        <span>Ofertas</span>
        <span>Eventos</span>
      </ContentContainer>
      <ButtonsContainer>
        <Button
          data-testid="searchButton"
          type="button"
          onClick={() => setToggle(!toggle)}
        >
          <IoIosSearch size="3em" />
        </Button>
        <Button
          data-testid="profileButton"
          className="profileBtn"
          type="button"
        >
          <VscAccount size="2.8em" />
        </Button>
        <Button data-testid="cartButton" type="button">
          <GiBeachBag size="2.8em" />
        </Button>
      </ButtonsContainer>
    </Container>
  );
}

export default Header;
