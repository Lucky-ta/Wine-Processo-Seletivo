/* eslint-disable no-undef */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Header from '../../../src/components/Header';

describe('Test Header Component', () => {
  it('Buttons: `Search, Profile and Cart` Must be in screen', async () => {
    render(<Header />);

    const searchButton = screen.getByText(/Search/i);
    const profileButton = screen.getByText(/Profile/i);
    const cartButton = screen.getByText(/Cart/i);

    expect(searchButton).toBeInTheDocument();
    expect(profileButton).toBeInTheDocument();
    expect(cartButton).toBeInTheDocument();
  });

  it('Wine Logo must be in screen', () => {
    render(<Header />);

    const wineLogo = screen.getByAltText(/wine-logo/i);
    expect(wineLogo).toBeInTheDocument();
  });
});
