import axios from 'axios';
import { GetStaticPaths, GetStaticProps } from 'next';
import React, { useContext } from 'react';
import Header from '../components/Header/Header';
import Pagination from '../components/Pagination';
import ProductCards from '../components/ProductCards';
import SearchLeftBar from '../components/LeftFilter/SearchLeftBar';
import MyContext from '../contexts/MyContext';
import { IApiResponse, Item } from '../interfaces/IApiResponse';

function Store({ items }: IApiResponse) {
  const { filteredProducts } = useContext<any>(MyContext);

  return (
    <div>
      <Header />
      <SearchLeftBar />
      {filteredProducts !== null
        ? filteredProducts.map((i: Item) => <ProductCards key={i.id} item={i} />)
        : items.map((i) => <ProductCards key={i.id} item={i} />)}
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
  const json: IApiResponse = response.data;
  return { props: json, revalidate: 3600 };
};

export default Store;
