/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import React, { useState } from 'react';
import MyContext from '../contexts/MyContext';

interface IProps {
    children: React.ReactNode;
   }

function MyProvider({ children }: IProps) {
  const [products, setProducts] = useState([]);

  const data: any = {
    products,
    setProducts,
  };

  return <MyContext.Provider value={data}>{children}</MyContext.Provider>;
}

export default MyProvider;
