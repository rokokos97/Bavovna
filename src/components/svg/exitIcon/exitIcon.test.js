import React from 'react';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ExitIcon from './exitIcon';

describe('<Box />', () => {
  test('it should mount', () => {
    render(<ExitIcon />);

    const exitIcon = screen.getByTestId('ExitIcon');

    expect(exitIcon).toBeInTheDocument();
  });
});
