import React from 'react';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import NovaInternationalAddressDeliveryForm from './NovaInternationalAddressDeliveryForm';

describe('<Box />', () => {
  test('it should mount', () => {
    render(<NovaInternationalAddressDeliveryForm />);

    const novaInternationalAddressDeliveryForm = screen.getByTestId('NovaInternationalAddressDeliveryForm');

    expect(novaInternationalAddressDeliveryForm).toBeInTheDocument();
  });
});
