import React from 'react';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ShoppingCartPage from './shoppingCartPage';

describe('<Box />', () => {
  test('it should mount', () => {
    render(<ShoppingCartPage />);

    const shoppingCartPage = screen.getByTestId('ShoppingCartPage');

    expect(shoppingCartPage).toBeInTheDocument();
  });
});
