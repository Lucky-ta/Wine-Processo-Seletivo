import React, { useContext } from 'react';
import { useRouter } from 'next/router';
import MyContext from '../../contexts/MyContext';
import { Cart } from '../../interfaces/IApiResponse';
import formatPrice from '../../services/formatFunctions/formatPrice';
import {
  CardContainer,
  Image,
  ItemName,
  DiscountPrice,
  Discount,
  Member,
  MemberPrice,
  RS,
  NotMember,
  SideToSideSpansContainer,
  AddItemButtonDiv,
} from '.';
import { AddItemButton } from '../ProductDetailsCard';

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
    }
  };

  const redirectProductDetails = () => {
    const { id } = item;
    path.push(`/productDetails/${id}`);
  };

  return (
    <div>
      <CardContainer
        onKeyDown={() => null}
        role="button"
        onClick={redirectProductDetails}
        tabIndex={0}
      >
        <Image page="main" src={item.image} alt="" />
        <ItemName page="main">{item.name}</ItemName>
        <SideToSideSpansContainer>
          <DiscountPrice>{formatPrice(item.price)}</DiscountPrice>
          <Discount>{`${item.discount}% OFF`}</Discount>
        </SideToSideSpansContainer>
        <SideToSideSpansContainer>
          <Member>SÓCIO WINE</Member>
          <RS page="main">R$ </RS>
          <MemberPrice page="main">{formatPrice(item.priceMember)}</MemberPrice>
        </SideToSideSpansContainer>
        <NotMember page="main">{`NÃO SÓCIO, ${formatPrice(item.price)}`}</NotMember>
      </CardContainer>
      <AddItemButtonDiv page="main">
        <AddItemButton onClick={handleAddItemToCart} type="button">
          ADICIONAR
        </AddItemButton>
      </AddItemButtonDiv>
    </div>
  );
}

export default ProductCards;
