import { GetStaticPaths, GetStaticProps } from 'next';
import React from 'react';
import Header from '../../components/Header/Header';
import ProductCards from '../../components/ProductCard/ProductCards';
import fetchProducts from '../../services/fetchProducts';

function ProductDetails(props) {
  return (
    <div>
      <Header />
      <ProductCards item={props} />
    </div>
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
