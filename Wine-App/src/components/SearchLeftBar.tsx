import React, { useContext, useState } from 'react';
import MyContext from '../contexts/MyContext';

function SearchLeftBar() {
  const [selectedBtn, setSelectedBtn] = useState('');
  const {
    products, setFilteredProducts,
  } = useContext<any>(MyContext);

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
      const filter = products.filter(({ price }) => price >= minNumber && price <= maxNumber);
      return setFilteredProducts(filter);
    }
    return setFilteredProducts(null);
  };

  return (
    <section>
      <strong>Refine sua busca</strong>
      <p>Por preço</p>
      <form id="form">
        <label htmlFor="40">
          <input
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
        </label>
        <label htmlFor="40-60">
          <input
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
        </label>
        <label htmlFor="100-200">
          <input
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
        </label>
        <label htmlFor="200-500">
          <input
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
        </label>
        <label htmlFor="500">
          <input
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
        </label>
      </form>
    </section>
  );
}

export default SearchLeftBar;
