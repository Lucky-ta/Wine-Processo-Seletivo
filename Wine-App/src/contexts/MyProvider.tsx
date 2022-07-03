/* eslint-disable react/jsx-no-constructed-context-values */
import React, { useEffect, useState } from 'react';
import MyContext from './MyContext';
import fetchProducts from '../services/fetchProducts';

interface IProps {
  children: React.ReactNode;
}

function MyProvider({ children }: IProps) {
  const [toggle, setToggle] = useState(false);
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState(null);

  const datas: any = {
    products,
    setProducts,
    filteredProducts,
    setFilteredProducts,
    cart,
    setCart,
    toggle,
    setToggle,
  };

  useEffect(() => {
    const fetchProduct = async () => {
      const response = await fetchProducts();
      setProducts(response.items);
    };
    fetchProduct();
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storageCart: any = JSON.parse(localStorage.getItem('WineCart'));
      if (!storageCart) {
        localStorage.setItem('WineCart', JSON.stringify(cart));
      }
      setCart(storageCart);
    }
  }, []);

  return <MyContext.Provider value={datas}>{children}</MyContext.Provider>;
}

export default MyProvider;
