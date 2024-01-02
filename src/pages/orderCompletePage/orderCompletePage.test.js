import React from 'react';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import OrderCompletePage from './orderCompletePage';

describe('<Box />', () => {
  test('it should mount', () => {
    render(<OrderCompletePage />);

    const orderCompletePage = screen.getByTestId('OrderCompletePage');

    expect(orderCompletePage).toBeInTheDocument();
  });
});
