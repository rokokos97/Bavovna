import React from 'react';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

describe('<Box />', () => {
  test('it should mount', () => {
    render(<CheckOutUserInfoPage />);

    const CheckOutUserInfoPage = screen.getByTestId('CheckOutUserInfoPage');

    expect(CheckOutUserInfoPage).toBeInTheDocument();
  });
});
