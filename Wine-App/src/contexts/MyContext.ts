/* eslint-disable no-unused-vars */
import { createContext } from 'react';
import { Cart, Item } from '../interfaces/IApiResponse';

export type ContextFunc = {
    products: Item[];
    setProducts: (items: Item[]) => void;
    filteredProducts: Item[],
    setFilteredProducts: (items: Item[]) => void;
    cart: Cart[];
    setCart: (cart: Cart[]) => void;
    toggle: boolean;
    setToggle: (value: boolean) => void;
}

const data: ContextFunc = {
  products: [],
  setProducts: (): void => {},
  filteredProducts: [],
  setFilteredProducts: (): void => {},
  cart: [],
  setCart: (): void => {},
  toggle: false,
  setToggle: (value: boolean): boolean => !value,
};

const MyContext = createContext<ContextFunc>(data);

export default MyContext;
