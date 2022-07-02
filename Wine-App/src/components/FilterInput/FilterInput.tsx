import React, { useContext, useState } from 'react';
import { SearchButton, SearchInput, SearchInputContainer } from '../Header';
import MyContext from '../../contexts/MyContext';
import Container from '.';

function FilterInput() {
  const [items, setItems] = useState('');

  const { toggle, products, setFilteredProducts } = useContext<any>(MyContext);

  const handlerFilterByName = () => {
    const filteredProduct = products.filter(({ name }) => name.includes(items));
    setFilteredProducts(filteredProduct);
  };

  return (
    <Container>
      {toggle && (
        <SearchInputContainer>
          <SearchButton
            type="button"
            onClick={handlerFilterByName}
          >
            Buscar
          </SearchButton>
          <SearchInput
            type="text"
            placeholder="Bacalhôa Quinta.."
            onChange={(e) => setItems(e.target.value)}
          />

        </SearchInputContainer>
      )}
    </Container>
  );
}

export default FilterInput;
