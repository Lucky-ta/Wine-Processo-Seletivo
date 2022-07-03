import React, { useContext, useEffect, useState } from 'react';
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
  const [product, setProduct] = useState<Cart | null>({});

  const { cart } = useContext<any>(MyContext);

  const cartShape: Cart = {
    id: product.id,
    name: product.name,
    price: product.price,
    discount: product.discount,
    priceMember: product.priceMember,
    totalPrice: product.price,
    totalMemberPrice: product.priceMember,
    quantity: product.quantity,
  };

  const handleAddItemToCart = () => {
    // const verifyEqualItems = cart.some(
    //   ({ id }: any): boolean => id === cartShape.id,
    // );
    // if (!verifyEqualItems) {
    //   cart.push(cartShape);
    localStorage.setItem('WineCart', JSON.stringify(cart));
    console.log(cartShape);

    // }localStorage.setItem('WineCart', JSON.stringify(cart));
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storagedProduct = JSON.parse(localStorage.getItem('WineCart'));
      const filteredProduct = storagedProduct.find(({ id }) => id === item.id);
      setProduct(filteredProduct);
    }
  }, []);

  const hanlderSumQuantity = () => {
    cartShape.quantity += 1;
    cartShape.totalPrice = cartShape.price * cartShape.quantity;
    cartShape.totalMemberPrice = cartShape.priceMember * cartShape.quantity;

    // const equalItem = cart.find(({ id }) => id === cartShape.id);
    // equalItem.quantity += 1;
    // equalItem.totalPrice = formatPrice(equalItem.price * equalItem.quantity);
    // equalItem.totalMemberPrice = formatPrice(
    //   equalItem.priceMember * equalItem.quantity,
    // );
    // localStorage.setItem('WineCart', JSON.stringify(cart));
  };

  const hanlderSubtractQuantity = () => {
    // const equalItem = cart.find(({ id }) => id === cartShape.id);
    // equalItem.quantity -= 1;
    // equalItem.totalPrice = formatPrice(equalItem.price * equalItem.quantity);
    // equalItem.totalMemberPrice = formatPrice(
    //   equalItem.priceMember * equalItem.quantity,
    // );
    // localStorage.setItem('WineCart', JSON.stringify(cart));
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
              {cartShape.quantity}
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
