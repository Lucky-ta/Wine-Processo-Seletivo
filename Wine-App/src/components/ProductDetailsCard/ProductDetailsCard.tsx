import React, { useContext, useState } from 'react';
import { HiOutlinePlusCircle } from 'react-icons/hi';
import { AiOutlineMinusCircle } from 'react-icons/ai';
import { Cart } from '../../interfaces/IApiResponse';
import MyContext from '../../contexts/MyContext';
import formatPrice from '../../services/formatFunctions/formatPrice';
import {
  AddItemButtonDiv,
  Image,
  ItemName,
  MemberPrice,
  NotMember,
  RS,
} from '../ProductCard';
import {
  DetailsContainer,
  DetailsContentContainer,
  SommelierComentContainer,
  SommelierTitle,
  SommelierComment,
  FlagImage,
  RegionContainer,
  InfoContainer,
  LocationContainer,
  Span,
  ButtonContainer,
  AddItemButton,
} from '.';
import { Button } from '../Header';

function ProductDetailsCard({ item }: any) {
  const [quantity, setQuantity] = useState(1);
  const { cart } = useContext<any>(MyContext);

  const cartShape: Cart = {
    id: item.id,
    name: item.name,
    price: item.price,
    discount: item.discount,
    priceMember: item.priceMember,
    totalPrice: item.price * quantity,
    totalMemberPrice: item.priceMember * quantity,
    quantity,
  };

  const handleAddItemToCart = () => {
    const storagedCart = JSON.parse(localStorage.getItem('WineCart'));
    const findCart = storagedCart.find(({ id }) => id === item.id);

    if (!findCart) {
      cart.push(cartShape);
      localStorage.setItem('WineCart', JSON.stringify(cart));
    }
    const find = cart.find(({ id }) => id === cartShape.id);

    find.totalPrice = formatPrice(cartShape.totalPrice);
    find.totalMemberPrice = formatPrice(cartShape.totalMemberPrice);
    find.quantity = formatPrice(cartShape.quantity);
    localStorage.setItem('WineCart', JSON.stringify(cart));
  };

  const hanlderSumQuantity = () => {
    setQuantity(quantity + 1);
  };

  const hanlderSubtractQuantity = () => {
    const find = cart.find(({ id }) => id === cartShape.id);
    const index = cart.indexOf(find);

    setQuantity(quantity - 1);
    if (quantity <= 0) setQuantity(0);
    if (quantity <= 1) {
      cart.splice(index, 1);
      localStorage.setItem('WineCart', JSON.stringify(cart));
    }
  };

  return (
    <DetailsContainer>
      <Image page="details" src={item.image} alt="" />
      <DetailsContentContainer>
        <LocationContainer>
          <p>Vinhos</p>
          <Span>{'>'}</Span>
          <p>{item.country}</p>
          <Span>{'>'}</Span>
          <p className="region">{item.region}</p>
        </LocationContainer>
        <ItemName page="details">{item.name}</ItemName>
        <InfoContainer>
          <RegionContainer>
            <FlagImage src={item.flag} alt="" />
            <p>{item.country}</p>
          </RegionContainer>
          <p>{item.type}</p>
          <p>{item.volume}</p>
        </InfoContainer>
        <RS page="details">R$ </RS>
        <MemberPrice page="details">{item.priceMember}</MemberPrice>
        <NotMember page="details">{`NÃO SÓCIO, ${item.price}`}</NotMember>
        <SommelierComentContainer>
          <SommelierTitle>Comentário do Sommelier</SommelierTitle>
          <SommelierComment>{item.sommelierComment}</SommelierComment>
          <AddItemButtonDiv page="details">
            <ButtonContainer>
              <Button
                onClick={hanlderSubtractQuantity}
                page="details"
                type="button"
              >
                <AiOutlineMinusCircle size="2.6em" />
              </Button>
              {quantity}
              <Button onClick={hanlderSumQuantity} page="details" type="button">
                <HiOutlinePlusCircle size="2.6em" />
              </Button>
              <AddItemButton onClick={handleAddItemToCart} type="button">
                ADICIONAR
              </AddItemButton>
            </ButtonContainer>
          </AddItemButtonDiv>
        </SommelierComentContainer>
      </DetailsContentContainer>
    </DetailsContainer>
  );
}

export default ProductDetailsCard;
