import React from 'react';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import UserDeliveryAddressForm from './userDeliveryAddressForm';

describe('<Box />', () => {
  test('it should mount', () => {
    render(<UserDeliveryAddressForm />);

    const userDeliveryAddressForm = screen.getByTestId('UserDeliveryAddressForm');

    expect(userDeliveryAddressForm).toBeInTheDocument();
  });
});
