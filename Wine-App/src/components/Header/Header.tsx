import React, { useContext, useState } from 'react';
import { GrMenu } from 'react-icons/gr';
import CartSvg from '../../../public/svg/Bitmap.svg';
import ProfileSvg from '../../../public/svg/conta.svg';
import SearchSvg from '../../../public/svg/Busca.svg';
import LogoSvg from '../../../public/svg/black.svg';
import MyContext from '../../contexts/MyContext';
import OptionModal from './menuModal/OptionModal';

import {
  Container,
  ContentContainer,
  Image,
  ButtonsContainer,
  Button,
  SwitchPageButton,
  SvgImage,
} from '.';
import CartModal from './cartModal/CartModal';

function Header() {
  const { toggle, setToggle } = useContext<any>(MyContext);
  const [cartModel, SetCartModel] = useState(false);
  const [isModalActive, setIsModalActive] = useState(false);
  return (
    <Container>
      <Button
        type="button"
        page="main"
        onClick={() => setIsModalActive(!isModalActive)}
        className="menu"
      >
        <GrMenu size="2.5em" />
      </Button>
      {isModalActive && <OptionModal />}
      <Image src={LogoSvg.src} alt="wine-logo" className="image" />
      <ContentContainer className="content">
        <span>Clube</span>
        <SwitchPageButton>Loja</SwitchPageButton>
        <span>Produtores</span>
        <span>Ofertas</span>
        <span>Eventos</span>
      </ContentContainer>
      <ButtonsContainer>
        <Button
          page="main"
          data-testid="searchButton"
          type="button"
          onClick={() => setToggle(!toggle)}
        >
          <SvgImage src={SearchSvg.src} alt="" />
        </Button>
        <Button
          page="main"
          data-testid="profileButton"
          className="profileBtn"
          type="button"
        >
          <SvgImage src={ProfileSvg.src} alt="" />
        </Button>
        <Button onClick={() => SetCartModel(!cartModel)} classN="cart" page="main" data-testid="cartButton" type="button">
          <SvgImage classN="cart" src={CartSvg.src} alt="" />
        </Button>
        { cartModel && <CartModal modelStatus={SetCartModel}/>}
      </ButtonsContainer>
    </Container>
  );
}

export default Header;
