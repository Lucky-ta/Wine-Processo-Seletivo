/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import React from 'react';

function ProductCards({ item }: any) {
  console.log(item);

  return (
    <main>
      <img src={item.image} alt="" />
      <h2>{item.name}</h2>
      <p>{`${item.price}, ${item.discount}`}</p>
      <p>{`SÓCIO WINE R$${item.priceMember}`}</p>
      <p>{`Nao socio, ${item.price}`}</p>
      <button type="button">ADICIONAR</button>
    </main>
  );
}

export default ProductCards;
