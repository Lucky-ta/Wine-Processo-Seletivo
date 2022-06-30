/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import React, { useContext } from 'react';
import MyContext from '../contexts/MyContext';

function SearchLeftBar() {
  const {
    products, toggle, setToggle, setFilteredProducts,
  } = useContext<any>(MyContext);

  const handleFilterClick = async ({ min, max, id }) => {
    const elementById: any = document.getElementById(id);

    const minNumber = Number(min);
    const maxNumber = Number(max);

    if (!toggle && maxNumber === 0) {
      const filter = products.filter((p) => p.price <= minNumber);
      setFilteredProducts(filter);
      return setToggle(true);
    }
    setFilteredProducts(null);
    setToggle(!toggle);

    if (!toggle && minNumber === 0) {
      const filter = products.filter((p) => p.price >= maxNumber);
      setFilteredProducts(filter);
      return setToggle(true);
    }
    setFilteredProducts(null);
    setToggle(!toggle);

    if (!toggle) {
      const filter = products.filter(
        (p) => p.price >= minNumber && p.price <= maxNumber,
      );
      setFilteredProducts(filter);
      return setToggle(true);
    }
    setFilteredProducts(null);
    elementById.checked = false;
    return setToggle(!toggle);
  };

  return (
    <section>
      <strong>Refine sua busca</strong>
      <p>Por preço</p>
      <form id="form">
        <label htmlFor="40">
          <input
            onClick={(e: any) => handleFilterClick(e.target)}
            value="40"
            min={40}
            max={0}
            type="radio"
            id="40"
          />
          Até R$40
        </label>
        <label htmlFor="40-60">
          <input
            onClick={(e: any) => handleFilterClick(e.target)}
            value="40-60"
            type="radio"
            id="40-60"
            min={40}
            max={60}
          />
          R$40 A R$60
        </label>
        <label htmlFor="100-200">
          <input
            onClick={(e: any) => handleFilterClick(e.target)}
            type="radio"
            id="100-200"
            value="100-200"
            min={100}
            max={200}
          />
          R$100 A R$200
        </label>
        <label htmlFor="200-500">
          <input
            onClick={(e: any) => handleFilterClick(e.target)}
            value="200-500"
            type="radio"
            id="200-500"
            min={200}
            max={500}
          />
          R$200 A R$500
        </label>
        <label htmlFor="500">
          <input
            onClick={(e: any) => handleFilterClick(e.target)}
            value="500"
            type="radio"
            id="500"
            min={0}
            max={500}
          />
          Acimade R$500
        </label>
      </form>
    </section>
  );
}

export default SearchLeftBar;
