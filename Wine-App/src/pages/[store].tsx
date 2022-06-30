/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import React, { useContext } from 'react';
import Header from '../components/Header';
import Pagination from '../components/Pagination';
import ProductCards from '../components/ProductCards';
import SearchLeftBar from '../components/SearchLeftBar';
import { IApiResponse } from '../interfaces/IApiResponse';
import MyContext from '../contexts/MyContext';

function Store({ items }: IApiResponse) {
  const { products, setProducts } = useContext<any>(MyContext);

  return (
    <div>
      <Header />
      <SearchLeftBar />
      {items.map((i) => (
        <ProductCards key={i.id} item={i} />
      ))}
      <Pagination />
    </div>
  );
}

export default Store;
