import React from 'react';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import CompleteOrderPage from './CompleteOrderPage';

describe('<Box />', () => {
  test('it should mount', () => {
    render(<CompleteOrderPage />);

    const completeOrderPage = screen.getByTestId('CompleteOrderPage');

    expect(completeOrderPage).toBeInTheDocument();
  });
});
