import React from 'react';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import NpWarehouseDeliveryFormCheckout from './npWarehouseDeliveryFormCheckout';

describe('<Box />', () => {
  test('it should mount', () => {
    render(<NpWarehouseDeliveryFormCheckout />);

    const npWarehouseDeliveryFormCheckout = screen.getByTestId('NpWarehouseDeliveryFormCheckout');

    expect(npWarehouseDeliveryFormCheckout).toBeInTheDocument();
  });
});
