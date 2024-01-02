import React from 'react';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import CheckOutBlock from './checkOutBlock';

describe('<Box />', () => {
  test('it should mount', () => {
    render(<CheckOutBlock />);

    const checkOutBlock = screen.getByTestId('CheckOutBlock');

    expect(checkOutBlock).toBeInTheDocument();
  });
});
