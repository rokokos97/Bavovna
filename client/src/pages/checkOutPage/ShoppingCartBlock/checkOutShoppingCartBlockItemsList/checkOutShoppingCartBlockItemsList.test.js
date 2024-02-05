import React from 'react';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import CheckOutShoppingCartBlockItemsList from './checkOutShoppingCartBlockItemsList';

describe('<Box />', () => {
  test('it should mount', () => {
    render(<CheckOutShoppingCartBlockItemsList />);

    const checkOutShoppingCartBlockItemsList = screen.getByTestId('CheckOutShoppingCartBlockItemsList');

    expect(checkOutShoppingCartBlockItemsList).toBeInTheDocument();
  });
});
