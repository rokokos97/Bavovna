import React from 'react';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ArrowBackIcon from './arrowBackIcon';

describe('<Box />', () => {
  test('it should mount', () => {
    render(<ArrowBackIcon />);

    const arrowBackIcon = screen.getByTestId('ArrowBackIcon');

    expect(arrowBackIcon).toBeInTheDocument();
  });
});
