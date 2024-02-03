import React from 'react';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import NpInternationalDeliveryFormCheckout from './npInternationalDeliveryFormCheckout';

describe('<Box />', () => {
  test('it should mount', () => {
    render(<NpInternationalDeliveryFormCheckout />);

    const npInternationalDeliveryFormCheckout = screen.getByTestId('NpInternationalDeliveryFormCheckout');

    expect(npInternationalDeliveryFormCheckout).toBeInTheDocument();
  });
});
