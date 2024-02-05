import React from 'react';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import CheckOutPagePaymentInfo from './CheckOutPagePaymentInfo';

describe('<Box />', () => {
  test('it should mount', () => {
    render(<CheckOutPagePaymentInfo />);

    const checkOutPagePaymentInfo = screen.getByTestId('CheckOutPagePaymentInfo');

    expect(checkOutPagePaymentInfo).toBeInTheDocument();
  });
});
