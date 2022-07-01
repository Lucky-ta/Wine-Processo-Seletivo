import React, { useContext, useState } from 'react';
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
  SearchInputContainer,
  SearchInput,
  SearchButton,
} from '.';

function Header() {
  const [isFilter, setIsFilter] = useState(false);
  const [item, setItem] = useState('');
  const { products, setFilteredProducts } = useContext<any>(MyContext);

  const handlerFilterByName = () => {
    const filteredProduct = products.filter(({ name }) => name.includes(item));
    setFilteredProducts(filteredProduct);
  };

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
        <Button type="button" onClick={() => setIsFilter(!isFilter)}>
          <IoIosSearch size="3em" />
        </Button>
        {isFilter && (
          <SearchInputContainer>
            <SearchInput
              type="text"
              placeholder="Bacalhôa Quinta.."
              onChange={(e) => setItem(e.target.value)}
            />
            <SearchButton type="button" onClick={handlerFilterByName}>
              Buscar
            </SearchButton>
          </SearchInputContainer>
        )}
        <Button type="button">
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
