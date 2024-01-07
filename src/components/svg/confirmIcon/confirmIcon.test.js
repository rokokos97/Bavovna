import React from 'react';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ConfirmIcon from './confirmIcon';

describe('<Box />', () => {
  test('it should mount', () => {
    render(<ConfirmIcon />);

    const confirmIcon = screen.getByTestId('ConfirmIcon');

    expect(confirmIcon).toBeInTheDocument();
  });
});
