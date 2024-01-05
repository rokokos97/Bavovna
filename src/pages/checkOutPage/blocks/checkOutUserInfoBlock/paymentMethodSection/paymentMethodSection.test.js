import React from 'react';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import PaymentMethodSection from './paymentMethodSection';

describe('<Box />', () => {
  test('it should mount', () => {
    render(<PaymentMethodSection />);

    const userPaymentMethodsList = screen.getByTestId('UserPaymentMethodsList');

    expect(userPaymentMethodsList).toBeInTheDocument();
  });
});
