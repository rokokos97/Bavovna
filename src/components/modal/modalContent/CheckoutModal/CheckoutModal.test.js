import React from 'react';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import CheckoutModal from './CheckoutModal';

describe('<Box />', () => {
  test('it should mount', () => {
    render(<CheckoutModal />);

    const checkoutModal = screen.getByTestId('CheckoutModal');

    expect(checkoutModal).toBeInTheDocument();
  });
});
