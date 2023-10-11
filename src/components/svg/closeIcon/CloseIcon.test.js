import React from 'react';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import CloseIcon from './CloseIcon';

describe('<Box />', () => {
  test('it should mount', () => {
    render(<CloseIcon />);

    const closeIcon = screen.getByTestId('CloseIcon');

    expect(closeIcon).toBeInTheDocument();
  });
});
