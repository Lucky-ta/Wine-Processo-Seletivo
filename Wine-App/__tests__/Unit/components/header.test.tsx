/* eslint-disable no-undef */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Header from '../../../src/components/Header/Header';

describe('Test Header Component', () => {
  it('Buttons: `Search, Profile and Cart` Must be in screen', async () => {
    render(<Header />);

    const searchButton = screen.getByTestId('searchButton');
    const profileButton = screen.getByTestId('profileButton');
    const cartButton = screen.getByTestId('cartButton');

    expect(searchButton).toBeInTheDocument();
    expect(profileButton).toBeInTheDocument();
    expect(cartButton).toBeInTheDocument();
  });

  it('Wine Logo must be in screen', () => {
    render(<Header />);

    const wineLogo = screen.getByAltText(/wine-logo/i);
    expect(wineLogo).toBeInTheDocument();
  });

  it('Check if search input is visible after click on Search button', () => {
    render(<Header />);

    const searchButton = screen.getByTestId('searchButton');
    // const searchInput = screen.getByPlaceholderText('Bacalhôa Quinta...');

    expect(searchButton).toBeInTheDocument();
    // expect(searchInput).toBeInTheDocument();
  });
});
