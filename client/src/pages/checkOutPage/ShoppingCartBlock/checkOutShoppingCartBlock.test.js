import React from 'react';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import CheckOutShoppingCartBlock from './checkOutShoppingCartBlock';

describe('<Box />', () => {
  test('it should mount', () => {
    render(<CheckOutShoppingCartBlock />);

    const checkOutShoppingCartBlock = screen.getByTestId('CheckOutShoppingCartBlock');

    expect(checkOutShoppingCartBlock).toBeInTheDocument();
  });
});
