import React from 'react';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import UserDeliveryAddressList from './userDeliveryAddressList';

describe('<Box />', () => {
  test('it should mount', () => {
    render(<UserDeliveryAddressList />);

    const userDeliveryAddressList = screen.getByTestId('UserDeliveryAddressList');

    expect(userDeliveryAddressList).toBeInTheDocument();
  });
});
