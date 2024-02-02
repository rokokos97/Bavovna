import React from 'react';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import CheckOutPageUserInfo from './checkOutPageUserInfo';

describe('<Box />', () => {
  test('it should mount', () => {
    render(<CheckOutPageUserInfo />);

    const checkOutPage = screen.getByTestId('CheckOutPage');

    expect(checkOutPage).toBeInTheDocument();
  });
});
