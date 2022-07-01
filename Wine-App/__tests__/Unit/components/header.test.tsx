/* eslint-disable no-undef */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Header from '../../../src/components/Header';

describe('Test main page', () => {
  it('Render Header', async () => {
    render(<Header />);

    const searchButton = screen.getByText(/Search/i);
    expect(searchButton).toBeInTheDocument();
  });
});
