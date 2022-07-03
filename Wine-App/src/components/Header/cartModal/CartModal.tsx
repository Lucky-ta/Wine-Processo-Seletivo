import React from 'react';
import { IoIosArrowBack } from 'react-icons/io';
import { CartModelContent, Container, ModelHeader } from '.';
import { Button } from '..';

interface ICartModelProps {
  // eslint-disable-next-line no-unused-vars
  modelStatus: (value: boolean) => any
}

function CartModal({ modelStatus }: ICartModelProps) {
  return (
    <Container>
      <ModelHeader>
        <Button onClick={() => modelStatus(false)} type="button">
          <IoIosArrowBack size="2.6em" />
        </Button>
        <p>WineBox (0)</p>
      </ModelHeader>
      <CartModelContent>
        <p>Você ainda não escolheu seus produtos</p>
      </CartModelContent>
    </Container>
  );
}

export default CartModal;
