import React from 'react';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import SortIcon from './sortIcon';

describe('<Box />', () => {
  test('it should mount', () => {
    render(<SortIcon />);

    const sortIcon = screen.getByTestId('SortIcon');

    expect(sortIcon).toBeInTheDocument();
  });
});
