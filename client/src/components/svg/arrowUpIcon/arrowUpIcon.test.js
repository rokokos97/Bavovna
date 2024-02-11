import React from 'react';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ArrowUpIcon from './ArrowUpIcon';

describe('<Box />', () => {
  test('it should mount', () => {
    render(<ArrowUpIcon />);

    const arrowUpIcon = screen.getByTestId('ArrowUpIcon');

    expect(arrowUpIcon).toBeInTheDocument();
  });
});
