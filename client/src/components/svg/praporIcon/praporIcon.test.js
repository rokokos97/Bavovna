import React from 'react';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import PraporIcon from './praporIcon';

describe('<Box />', () => {
  test('it should mount', () => {
    render(<PraporIcon />);

    const praporIcon = screen.getByTestId('PraporIcon');

    expect(praporIcon).toBeInTheDocument();
  });
});
