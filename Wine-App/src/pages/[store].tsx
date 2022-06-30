/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import React, { useContext } from 'react';
import Header from '../components/Header';
import Pagination from '../components/Pagination';
import ProductCards from '../components/ProductCards';
import SearchLeftBar from '../components/SearchLeftBar';
import MyContext from '../contexts/MyContext';

function Store() {
  const { products, setProducts, filteredProducts } = useContext<any>(MyContext);

  return (
    <div>
      <Header />
      <SearchLeftBar />
      {filteredProducts !== null
        ? filteredProducts.map((i) => <ProductCards key={i.id} item={i} />)
        : products.map((i) => <ProductCards key={i.id} item={i} />)}
      <Pagination />
    </div>
  );
}

export default Store;
