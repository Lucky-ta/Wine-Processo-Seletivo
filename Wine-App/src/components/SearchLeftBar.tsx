import React from 'react';

function SearchLeftBar() {
  return (
    <section>
      <strong>Refine sua busca</strong>
      <p>Por preço</p>
      <form>
        <label htmlFor="40">
          <input type="radio" id="40" />
          Até R$40
        </label>
        <label htmlFor="40-60">
          <input type="radio" id="40-60" />
          R$40 A R$60
        </label>
        <label htmlFor="100-200">
          <input type="radio" id="100-200" />
          R$100 A R$200
        </label>
        <label htmlFor="200-500">
          <input type="radio" id="200-500" />
          R$200 A R$500
        </label>
        <label htmlFor="500">
          <input type="radio" id="500" />
          Acimade R$500
        </label>
      </form>
    </section>
  );
}

export default SearchLeftBar;
