import React from 'react';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import CheckOutNavigationBlock from './checkOutNavigationBlock';

describe('<Box />', () => {
  test('it should mount', () => {
    render(<CheckOutNavigationBlock />);

    const checkOutNavigationBlock = screen.getByTestId('CheckOutNavigationBlock');

    expect(checkOutNavigationBlock).toBeInTheDocument();
  });
});
