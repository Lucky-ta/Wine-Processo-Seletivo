import React from 'react';

function Header() {
  return (
    <header>
      <img
        src="https://centraldeajuda.wine.com.br/static/media/LogoWine.dc8aad50.svg"
        alt="wine-logo"
      />
      <nav>
        <span>Clube</span>
        <span>Loja</span>
        <span>Produtores</span>
        <span>Ofertas</span>
        <span>Eventos</span>
      </nav>
      <div>
        <button type="button">Search</button>
        <button type="button">Profile</button>
        <button type="button">Cart</button>
      </div>
    </header>
  );
}

export default Header;
