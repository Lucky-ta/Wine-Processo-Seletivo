/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import React, { useEffect, useState } from 'react';
import MyContext from '../contexts/MyContext';
import fetchProducts from '../services/fetchProducts';

interface IProps {
  children: React.ReactNode;
}

function MyProvider({ children }: IProps) {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState(null);
  const [toggle, setToggle] = useState(false);

  const datas: any = {
    products,
    setProducts,
    toggle,
    setToggle,
    filteredProducts,
    setFilteredProducts,
  };

  useEffect(() => {
    const fetchProduct = async () => {
      const response = await fetchProducts();
      setProducts(response.items);
    };
    fetchProduct();
  }, []);

  return <MyContext.Provider value={datas}>{children}</MyContext.Provider>;
}

export default MyProvider;
