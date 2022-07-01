/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import { createContext } from 'react';
import { Cart, Item } from '../interfaces/IApiResponse';

export type ContextFunc = {
    products: Item[],
    setProducts: () => void,
    filteredProducts: Item[],
    setFilteredProducts: () => void,
    cart: Cart[],
    setCart: () => void,
}

const context = createContext<ContextFunc>(undefined);

export default context;
