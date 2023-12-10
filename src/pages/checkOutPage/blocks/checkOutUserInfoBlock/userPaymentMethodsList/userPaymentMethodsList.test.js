import React from 'react';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import UserPaymentMethodsList from './userPaymentMethodsList';

describe('<Box />', () => {
  test('it should mount', () => {
    render(<UserPaymentMethodsList />);

    const userPaymentMethodsList = screen.getByTestId('UserPaymentMethodsList');

    expect(userPaymentMethodsList).toBeInTheDocument();
  });
});
