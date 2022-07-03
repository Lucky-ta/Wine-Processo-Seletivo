import React, { useContext } from 'react';
import { IoIosArrowBack } from 'react-icons/io';
import { CartModelContent, Container, ModelHeader } from '.';
import { Button } from '..';
import MyContext from '../../../contexts/MyContext';

interface ICartModelProps {
  // eslint-disable-next-line no-unused-vars
  modelStatus: (value: boolean) => any;
}

function CartModal({ modelStatus }: ICartModelProps) {
  const { cart } = useContext<any>(MyContext);

  return (
    <Container>
      <ModelHeader>
        <Button onClick={() => modelStatus(false)} type="button">
          <IoIosArrowBack size="2.6em" />
        </Button>
        <p>{`WineBox (${cart.length})`}</p>
      </ModelHeader>
      <CartModelContent>
        <p>Você ainda não escolheu seus produtos</p>
      </CartModelContent>
    </Container>
  );
}

export default CartModal;
