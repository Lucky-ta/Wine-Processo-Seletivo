import React, { useContext } from 'react';
import { useRouter } from 'next/router';
import MyContext from '../../contexts/MyContext';
import { Cart } from '../../interfaces/IApiResponse';
import formatPrice from '../../services/formatFunctions/formatPrice';
import {
  CardContainer,
  Image,
  AddItemButton,
  ItemName,
  DiscountPrice,
  Discount,
  Member,
  MemberPrice,
  RS,
  NotMember,
  SideToSideSpansContainer,
} from '.';

function ProductCards({ item }: any) {
  const path = useRouter();
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

  const redirectProductDetails = () => {
    const { id } = item;
    path.push(`/productDetails/${id}`);
  };

  return (
    <div>
      <CardContainer onClick={redirectProductDetails}>
        <Image page="main" src={item.image} alt="" />
        <ItemName>{item.name}</ItemName>
        <SideToSideSpansContainer>
          <DiscountPrice>{item.price}</DiscountPrice>
          <Discount>{`${item.discount}% OFF`}</Discount>
        </SideToSideSpansContainer>
        <SideToSideSpansContainer>
          <Member>SÓCIO WINE</Member>
          <RS>R$ </RS>
          <MemberPrice>{item.priceMember}</MemberPrice>
        </SideToSideSpansContainer>
        <NotMember>{`NÃO SÓCIO, ${item.price}`}</NotMember>
      </CardContainer>
      <AddItemButton onClick={handleAddItemToCart} type="button">
        ADICIONAR
      </AddItemButton>
    </div>
  );
}

export default ProductCards;
