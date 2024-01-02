import React from 'react';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import OrdersBlock from './ordersBlock';

describe('<Box />', () => {
  test('it should mount', () => {
    render(<OrdersBlock />);

    const ordersBlock = screen.getByTestId('OrdersBlock');

    expect(ordersBlock).toBeInTheDocument();
  });
});
