import { GetStaticPaths, GetStaticProps } from 'next';
import Router from 'next/router';
import React from 'react';
import { IoIosArrowBack } from 'react-icons/io';
import FilterInput from '../../components/FilterInput/FilterInput';
import Header from '../../components/Header/Header';
import { ArrowButton, Container } from '../../components/ProductDetailsCard';
import ProductDetailsCard from '../../components/ProductDetailsCard/ProductDetailsCard';
import fetchProducts from '../../services/fetchProducts';

function ProductDetails(props: any) {
  const returnMainPage = () => {
    Router.push('/1');
  };

  return (
    <Container>
      <Header />
      <ArrowButton onClick={returnMainPage} type="button">
        <IoIosArrowBack size="2.8em" />
        Voltar
      </ArrowButton>
      <FilterInput />
      <ProductDetailsCard item={props} />
    </Container>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const response = await fetchProducts();
  const { items } = response;

  const paths = items.map(({ id }) => ({
    params: { id: String(id) },
  }));

  return {
    paths,
    fallback: false,
  };
};
export const getStaticProps: GetStaticProps = async (context) => {
  const { id: productId } = context.params;
  const response = await fetchProducts();
  const { items } = response;

  const filteredProduct = items.find(({ id }) => id === Number(productId));
  return { props: filteredProduct, revalidate: 3600 };
};

export default ProductDetails;
