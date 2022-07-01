/* eslint-disable no-undef */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import SearchLeftBar from '../../../src/components/LeftFilter/SearchLeftBar';

describe('Test Left Filter Component', () => {
  it('Must have 5 radio buttons on screen', () => {
    render(<SearchLeftBar />);

    const radioButtons = screen.getAllByRole('radio');
    expect(radioButtons.length).toBe(5);
  });
});
