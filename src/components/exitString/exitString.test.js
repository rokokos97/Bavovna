import React from 'react';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ExitString from './ExitString';

describe('<Box />', () => {
  test('it should mount', () => {
    render(<ExitString />);

    const exitString = screen.getByTestId('ExitString');

    expect(exitString).toBeInTheDocument();
  });
});
