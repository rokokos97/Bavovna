import React from 'react';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import NpHomeDeliveryFormCheckout from './npHomeDeliveryFormCheckout';

describe('<Box />', () => {
  test('it should mount', () => {
    render(<NpHomeDeliveryFormCheckout />);

    const npHomeDeliveryFormCheckout = screen.getByTestId('NpHomeDeliveryFormCheckout');

    expect(npHomeDeliveryFormCheckout).toBeInTheDocument();
  });
});
