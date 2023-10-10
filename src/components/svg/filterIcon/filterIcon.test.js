import React from 'react';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import FilterIcon from './filterIcon';

describe('<Box />', () => {
  test('it should mount', () => {
    render(<FilterIcon />);

    const filterIcon = screen.getByTestId('FilterIcon');

    expect(filterIcon).toBeInTheDocument();
  });
});
