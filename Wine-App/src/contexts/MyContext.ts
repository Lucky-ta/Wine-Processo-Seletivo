import { createContext } from 'react';
import { Cart, Item } from '../interfaces/IApiResponse';

export type ContextFunc = {
    products: Item[],
    setProducts: () => void,
    filteredProducts: Item[],
    setFilteredProducts: () => void,
    cart: Cart[],
    setCart: () => void,
    toggle: boolean,
    setToggle: () => void;
    loading: boolean;
    setLoading: () => void;
}

const MyContext = createContext<ContextFunc | boolean>(!!null);

export default MyContext;
