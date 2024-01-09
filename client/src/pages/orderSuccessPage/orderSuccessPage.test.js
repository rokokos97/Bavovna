import React from 'react';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import OrderSuccessPage from './orderSuccessPage';

describe('<Box />', () => {
  test('it should mount', () => {
    render(<OrderSuccessPage />);

    const orderCompletePage = screen.getByTestId('OrderCompletePage');

    expect(orderCompletePage).toBeInTheDocument();
  });
});
