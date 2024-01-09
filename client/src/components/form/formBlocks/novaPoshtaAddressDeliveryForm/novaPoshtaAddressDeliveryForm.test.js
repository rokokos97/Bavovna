import React from 'react';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import NovaPoshtaAddressDeliveryForm from './novaPoshtaAddressDeliveryForm';

describe('<Box />', () => {
  test('it should mount', () => {
    render(<NovaPoshtaAddressDeliveryForm />);

    const novaPoshtaAddressDeliveryForm = screen.getByTestId('NovaPoshtaAddressDeliveryForm');

    expect(novaPoshtaAddressDeliveryForm).toBeInTheDocument();
  });
});
