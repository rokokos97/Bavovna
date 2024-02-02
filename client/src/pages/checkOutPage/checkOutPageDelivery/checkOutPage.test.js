import React from 'react';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import CheckOutPage from './checkOutPageDelivery';

describe('<Box />', () => {
  test('it should mount', () => {
    render(<CheckOutPage />);

    const checkOutPage = screen.getByTestId('CheckOutPage');

    expect(checkOutPage).toBeInTheDocument();
  });
});
