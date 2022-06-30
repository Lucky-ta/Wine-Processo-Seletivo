/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import axios from 'axios';
import { GetStaticPaths, GetStaticProps } from 'next';
import React from 'react';
import Header from '../components/Header';
import Pagination from '../components/Pagination';
import ProductCards from '../components/ProductCards';
import SearchLeftBar from '../components/SearchLeftBar';
import { IApiResponse } from '../interfaces/IApiResponse';

function Store({ items }: IApiResponse) {
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

export const getStaticPaths: GetStaticPaths = async () => {
  const data = [1, 2, 3, 4, 5, 6, 7];
  const paths = data.map((p) => ({ params: { store: JSON.stringify(p) } }));
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { store } = context.params;

  const response = await axios.get(
    `https://wine-back-test.herokuapp.com/products?page=${store}&limit=10`,
  );

  const json = response.data;
  return { props: json, revalidate: 3600 };
};

export default Store;
