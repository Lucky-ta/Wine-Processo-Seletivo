import React, { useContext } from 'react';
import { Cart } from '../../interfaces/IApiResponse';
import MyContext from '../../contexts/MyContext';
import formatPrice from '../../services/formatFunctions/formatPrice';

import {
  AddItemButton,
  Image,
  ItemName,
  MemberPrice,
  NotMember,
} from '../ProductCard';
import { DetailsContainer, DetailsContentContainer } from '.';

function ProductDetailsCard({ item }: any) {
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
    <DetailsContainer>
      <Image page="details" src={item.image} alt="" />
      <DetailsContentContainer>
        <ItemName>{item.name}</ItemName>
        <p>estado etc....</p>
        <MemberPrice>{item.priceMember}</MemberPrice>
        <NotMember>{`NÃO SÓCIO, ${item.price}`}</NotMember>
        <div>
          <h3>comentario do somelier</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque
            error nisi aperiam commodi pariatur ullam, temporibus impedit animi
            incidunt reiciendis dolor dolore totam minus explicabo labore
            placeat, repellat ut veniam.
          </p>
          <AddItemButton onClick={handleAddItemToCart} type="button">
            <div>
              <button type="button">-</button>
              1
              <button type="button">+</button>
            </div>
            ADICIONAR
          </AddItemButton>
        </div>
      </DetailsContentContainer>
    </DetailsContainer>
  );
}

export default ProductDetailsCard;
