/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import axios from 'axios';
import React from 'react';
import Header from '../components/Header';
import SearchLeftBar from '../components/SearchLeftBar';

function Store({ products }) {
  console.log(products);
  return (
    <div>
      <Header />
      <SearchLeftBar />
      <main>
        <h1>Hello Wine</h1>
      </main>
    </div>
  );
}

Store.getInitialProps = async () => {
  const response = await axios.get(
    'https://wine-back-test.herokuapp.com/products?page=1&limit=10',
  );

  const json = await response.data;
  return { products: json };
};

export default Store;
