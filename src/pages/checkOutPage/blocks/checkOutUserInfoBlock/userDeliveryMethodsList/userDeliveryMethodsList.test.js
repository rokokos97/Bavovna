import React from 'react';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import UserDeliveryMethodsList from './userDeliveryMethodsList';

describe('<Box />', () => {
  test('it should mount', () => {
    render(<UserDeliveryMethodsList />);

    const userDeliveryMethodsList = screen.getByTestId('UserDeliveryMethodsList');

    expect(userDeliveryMethodsList).toBeInTheDocument();
  });
});
