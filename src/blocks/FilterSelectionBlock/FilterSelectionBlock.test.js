import React from 'react';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import FilterSelectionBlock from './FilterSelectionBlock';

describe('<Box />', () => {
  test('it should mount', () => {
    render(<FilterSelectionBlock />);

    const filterSelectionBlock = screen.getByTestId('FilterSelectionBlock');

    expect(filterSelectionBlock).toBeInTheDocument();
  });
});
