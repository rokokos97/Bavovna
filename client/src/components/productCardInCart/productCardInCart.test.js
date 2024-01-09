import React from 'react';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ProductCardInCart from './ProductCardInCart';

describe('<Box />', () => {
  test('it should mount', () => {
    render(<ProductCardInCart item='' />);

    const productCardInCart = screen.getByTestId('ProductCardInCart');

    expect(productCardInCart).toBeInTheDocument();
  });
});
