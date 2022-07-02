/* eslint-disable no-undef */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import ProductCards from '../../../src/components/ProductCard/ProductCards';
import mockItem from './mocks/mockItems.json';

describe('Test Product Cards Component', () => {
  it('Must have the follows tags: 1 img, 1 heading, 3 paragraphs.', () => {
    render(<ProductCards item={mockItem} />);

    const imageComponent = screen.getByRole('img');
    const h2Component = screen.getByRole('heading');
    const firstParagraph = screen.getByText(`${mockItem.discount}% OFF`);

    expect(imageComponent).toBeInTheDocument();
    expect(h2Component).toBeInTheDocument();
    expect(firstParagraph).toBeInTheDocument();
  });
});
