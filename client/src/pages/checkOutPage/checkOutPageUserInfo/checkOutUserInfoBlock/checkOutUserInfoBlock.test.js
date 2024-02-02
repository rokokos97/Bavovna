import React from 'react';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import CheckOutUserInfoBlock from './checkOutUserInfoBlock';

describe('<Box />', () => {
  test('it should mount', () => {
    render(<CheckOutUserInfoBlock />);

    const checkOutUserInfoBlock = screen.getByTestId('CheckOutUserInfoBlock');

    expect(checkOutUserInfoBlock).toBeInTheDocument();
  });
});
