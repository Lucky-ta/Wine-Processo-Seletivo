import React, { useContext } from 'react';
import MyContext from '../contexts/MyContext';
import { Cart } from '../interfaces/IApiResponse';
import formatPrice from '../services/formatFunctions/formatPrice';

function ProductCards({ item }: any) {
  const { cart } = useContext<any>(MyContext);
  const handleAddItemToCart = () => {
    const cartShape: Cart = {
      id: item.id,
      name: item.name,
      price: item.price,
      discount: item.discount,
      priceMember: item.priceMember,
      totalPrice: item.price,
      totalMemberPrice: item.priceMember,
      quantity: 1,
    };
    const verifyEqualItems = cart.some(
      ({ id }: any): boolean => id === cartShape.id,
    );
    if (!verifyEqualItems) {
      cart.push(cartShape);
      localStorage.setItem('WineCart', JSON.stringify(cart));
    } else {
      const equalItem = cart.find(({ id }) => id === cartShape.id);
      equalItem.quantity += 1;
      equalItem.totalPrice = formatPrice(equalItem.price * equalItem.quantity);
      equalItem.totalMemberPrice = formatPrice(
        equalItem.priceMember * equalItem.quantity,
      );
      localStorage.setItem('WineCart', JSON.stringify(cart));
    }
  };

  return (
    <div>
      <img src={item.image} alt="" />
      <h2>{item.name}</h2>
      <p>{`${item.price}, ${item.discount}`}</p>
      <p>{`SÓCIO WINE R$${item.priceMember}`}</p>
      <p>{`Nao socio, ${item.price}`}</p>
      <button onClick={handleAddItemToCart} type="button">
        ADICIONAR
      </button>
    </div>
  );
}

export default ProductCards;
