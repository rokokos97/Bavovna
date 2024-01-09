import React from 'react';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ArrowForwardIcon from './arrowForwardIcon';

describe('<Box />', () => {
  test('it should mount', () => {
    render(<ArrowForwardIcon />);

    const arrowForwardIcon = screen.getByTestId('ArrowForwardIcon');

    expect(arrowForwardIcon).toBeInTheDocument();
  });
});
