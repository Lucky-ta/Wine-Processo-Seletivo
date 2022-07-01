import React, { useContext, useState } from 'react';
import { IoIosSearch } from 'react-icons/io';
import { VscAccount } from 'react-icons/vsc';
import MyContext from '../../contexts/MyContext';
import { Container, ContentContainer, Image } from '.';

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
        <span>Loja</span>
        <span>Produtores</span>
        <span>Ofertas</span>
        <span>Eventos</span>
      </ContentContainer>
      <div>
        <button type="button" onClick={() => setIsFilter(!isFilter)}>
          <IoIosSearch />
        </button>
        {isFilter && (
          <div>
            <input
              type="text"
              placeholder="VINHO"
              onChange={(e) => setItem(e.target.value)}
            />
            <button type="button" onClick={handlerFilterByName}>
              Buscar
            </button>
          </div>
        )}
        <button type="button">
          <VscAccount />
        </button>
        <button type="button">Cart</button>
      </div>
    </Container>
  );
}

export default Header;
