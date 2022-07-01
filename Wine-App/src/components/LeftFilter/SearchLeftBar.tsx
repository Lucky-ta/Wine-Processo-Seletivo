import React, { useContext, useState } from 'react';
import MyContext from '../../contexts/MyContext';
import {
  Container,
  FilterContainer,
  FilterTitle,
  RadioInput,
  RadioLabel,
} from '.';

function SearchLeftBar() {
  const [selectedBtn, setSelectedBtn] = useState('');
  const { products, setFilteredProducts } = useContext<any>(MyContext);

  const isRadioSelected = (id: string): boolean => selectedBtn === id;

  const handleRadioClick = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setSelectedBtn(e.target.id);
  };

  const handleFilterOnClick = ({ target }) => {
    const minNumber = Number(target.min);
    const maxNumber = Number(target.max);
    const { id } = target;

    if (selectedBtn !== id && maxNumber === 0) {
      const filter = products.filter(({ price }) => price <= minNumber);
      return setFilteredProducts(filter);
    }
    setSelectedBtn('');
    setFilteredProducts(null);

    if (selectedBtn !== id && minNumber === 0) {
      const filter = products.filter(({ price }) => price >= maxNumber);
      return setFilteredProducts(filter);
    }
    setSelectedBtn('');
    setFilteredProducts(null);

    if (selectedBtn !== id) {
      const filter = products.filter(
        ({ price }) => price >= minNumber && price <= maxNumber,
      );
      return setFilteredProducts(filter);
    }
    return setFilteredProducts(null);
  };

  return (
    <Container>
      <FilterTitle>Refine sua busca</FilterTitle>
      <p>Por preço</p>
      <FilterContainer id="form">
        <RadioLabel htmlFor="40">
          <RadioInput
            min={40}
            max={0}
            type="radio"
            id="40"
            name="radio-price"
            checked={isRadioSelected('40')}
            onChange={handleRadioClick}
            onClick={handleFilterOnClick}
          />
          Até R$40
        </RadioLabel>
        <RadioLabel htmlFor="40-60">
          <RadioInput
            checked={isRadioSelected('40-60')}
            type="radio"
            id="40-60"
            min={40}
            max={60}
            name="radio-price"
            onChange={handleRadioClick}
            onClick={handleFilterOnClick}
          />
          R$40 A R$60
        </RadioLabel>
        <RadioLabel htmlFor="100-200">
          <RadioInput
            checked={isRadioSelected('100-200')}
            type="radio"
            id="100-200"
            min={100}
            max={200}
            name="radio-price"
            onChange={handleRadioClick}
            onClick={handleFilterOnClick}
          />
          R$100 A R$200
        </RadioLabel>
        <RadioLabel htmlFor="200-500">
          <RadioInput
            checked={isRadioSelected('200-500')}
            type="radio"
            id="200-500"
            min={200}
            max={500}
            name="radio-price"
            onChange={handleRadioClick}
            onClick={handleFilterOnClick}
          />
          R$200 A R$500
        </RadioLabel>
        <RadioLabel htmlFor="500">
          <RadioInput
            checked={isRadioSelected('500')}
            type="radio"
            id="500"
            min={0}
            max={500}
            name="radio-price"
            onChange={handleRadioClick}
            onClick={handleFilterOnClick}
          />
          Acimade R$500
        </RadioLabel>
      </FilterContainer>
    </Container>
  );
}

export default SearchLeftBar;
