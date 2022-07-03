import axios from 'axios';
import { GetStaticPaths, GetStaticProps } from 'next';
import React, { useContext } from 'react';
import Header from '../components/Header/Header';
import Pagination from '../components/Pagination/Pagination';
import ProductCards from '../components/ProductCard/ProductCards';
import SearchLeftBar from '../components/LeftFilter/SearchLeftBar';
import MyContext from '../contexts/MyContext';
import { IApiResponse, Item } from '../interfaces/IApiResponse';
import { GlobalContainer, ProductsContainer, ShowMoreButton } from '../components/ProductCard/index';
import FilterInput from '../components/FilterInput/FilterInput';
import MainContentContainer from '../../styles/Containers';

function Store({ items }: IApiResponse) {
  const { filteredProducts } = useContext<any>(MyContext);

  return (
    <GlobalContainer>
      <Header />
      <FilterInput />
      <MainContentContainer>
        <SearchLeftBar />
        <ProductsContainer>
          {filteredProducts !== null
            ? filteredProducts.map((i: Item) => (
              <ProductCards key={i.id} item={i} />
            ))
            : items.map((i) => <ProductCards key={i.id} item={i} />)}
        </ProductsContainer>
      </MainContentContainer>
      <Pagination />
      <ShowMoreButton type="button">MOSTRAR MAIS</ShowMoreButton>
    </GlobalContainer>
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
