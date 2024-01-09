import React from 'react';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import CleatFormIcon from './cleatFormIcon';

describe('<Box />', () => {
  test('it should mount', () => {
    render(<CleatFormIcon />);

    const cleatFormIcon = screen.getByTestId('CleatFormIcon');

    expect(cleatFormIcon).toBeInTheDocument();
  });
});
